import os
import requests
import json
from datetime import datetime
from notion_client import Client
from slugify import slugify

# ==========================================
# CONFIGURATION (FILL THESE IN)
# ==========================================
NOTION_TOKEN = process.env.NOTION_TOKEN
DATABASE_ID = process.env.DATABASE_ID

# Where to save files
OUTPUT_DIR = "content/blog"
IMAGE_DIR = "public/uploads"
IMAGE_PUBLIC_PATH = "/uploads"

# Headers for the raw API request
HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",  # Using a stable API version
}

# ==========================================
# HELPER FUNCTIONS
# ==========================================


def download_image(url, filename_prefix):
    if not url:
        return None
    try:
        response = requests.get(url)
        if response.status_code == 200:
            ext = ".jpg"
            if ".png" in url:
                ext = ".png"
            elif ".gif" in url:
                ext = ".gif"

            filename = f"{filename_prefix}{ext}"
            filepath = os.path.join(IMAGE_DIR, filename)

            with open(filepath, "wb") as f:
                f.write(response.content)
            return f"{IMAGE_PUBLIC_PATH}/{filename}"
    except Exception as e:
        print(f"Failed to download image: {e}")
    return None


def extract_plain_text(rich_text_list):
    if not rich_text_list:
        return ""
    return "".join([t.get("plain_text", "") for t in rich_text_list])


def blocks_to_markdown(blocks, slug):
    md_content = ""
    img_counter = 1

    for block in blocks:
        b_type = block["type"]
        content = block.get(b_type, {})

        if b_type == "paragraph":
            text = extract_plain_text(content.get("rich_text", []))
            md_content += f"{text}\n\n"

        elif b_type in ["heading_1", "heading_2", "heading_3"]:
            level = b_type.split("_")[1]
            text = extract_plain_text(content.get("rich_text", []))
            md_content += f"{'#' * int(level)} {text}\n\n"

        elif b_type == "bulleted_list_item":
            text = extract_plain_text(content.get("rich_text", []))
            md_content += f"* {text}\n"

        elif b_type == "code":
            text = extract_plain_text(content.get("rich_text", []))
            lang = content.get("language", "text")
            md_content += f"```{lang}\n{text}\n```\n\n"

        elif b_type == "image":
            file_info = content.get("file") or content.get("external")
            url = file_info.get("url")
            local_path = download_image(url, f"{slug}-img-{img_counter}")
            if local_path:
                md_content += f"![Image]({local_path})\n\n"
                img_counter += 1

    return md_content


def get_property(page, name):
    props = page.get("properties", {})
    if name not in props:
        return None

    prop = props[name]
    p_type = prop["type"]

    if p_type == "title":
        return extract_plain_text(prop["title"])
    elif p_type == "rich_text":
        return extract_plain_text(prop["rich_text"])
    elif p_type == "select":
        return prop["select"]["name"] if prop["select"] else None
    elif p_type == "multi_select":
        return [x["name"] for x in prop["multi_select"]]
    elif p_type == "date":
        return prop["date"]["start"] if prop["date"] else datetime.now().isoformat()
    elif p_type == "people":
        return prop["people"][0].get("name") if prop["people"] else "Admin"

    return None


# ==========================================
# MAIN LOGIC
# ==========================================


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(IMAGE_DIR, exist_ok=True)

    print("Querying Notion Database...")

    # 1. Fetch Pages (POST request to /query)
    query_url = f"https://api.notion.com/v1/databases/{DATABASE_ID}/query"
    response = requests.post(query_url, headers=HEADERS)

    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.text}")
        return

    pages = response.json().get("results", [])
    print(f"Found {len(pages)} articles.")

    for page in pages:
        try:
            # Match your column names here exactly
            title = get_property(
                page, "Name"
            )  # Change "Name" if your title column is different
            if not title:
                continue

            slug = slugify(title)
            print(f"Processing: {title}...")

            # 2. Fetch Blocks for this page
            blocks_url = f"https://api.notion.com/v1/blocks/{page['id']}/children"
            blocks_resp = requests.get(blocks_url, headers=HEADERS)
            blocks = blocks_resp.json().get("results", [])

            body = blocks_to_markdown(blocks, slug)

            # 3. Get Metadata
            author = (
                get_property(page, "Author") or "Admin"
            )  # Change "Author" to your column name
            date = get_property(page, "Date")  # Change "Date" to your column name
            tags = get_property(page, "Tags")  # Change "Tags" to your column name
            categories = get_property(
                page, "Category"
            )  # Change "Category" to your column name

            # Handle Cover Image
            cover_url = None
            if page.get("cover"):
                raw_url = page["cover"].get("file", {}).get("url") or page["cover"].get(
                    "external", {}
                ).get("url")
                cover_url = download_image(raw_url, f"{slug}-cover")

            # 4. Construct Frontmatter
            frontmatter = f"""---
title: "{title}"
draft: true
featured: false
date: "{date}"
author: "{author}"
"""
            if cover_url:
                frontmatter += f'coverImage: "{cover_url}"\n'

            if categories:
                # Handle if it's a list or single item
                cats = categories if isinstance(categories, list) else [categories]
                frontmatter += "categories:\n"
                for c in cats:
                    frontmatter += f"  - {c}\n"

            if tags:
                tgs = tags if isinstance(tags, list) else [tags]
                frontmatter += "tags:\n"
                for t in tgs:
                    frontmatter += f"  - {t}\n"

            frontmatter += "---\n\n"

            # 5. Write File
            with open(f"{OUTPUT_DIR}/{slug}.md", "w", encoding="utf-8") as f:
                f.write(frontmatter + body)

        except Exception as e:
            print(f"Skipping page due to error: {e}")


if __name__ == "__main__":
    main()
