import os
import requests
from datetime import datetime
from slugify import slugify

# ==========================================
# CONFIGURATION
# ==========================================
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")    # Paste your internal integration token
PARENT_PAGE_ID = os.environ.get("PARENT_PAGE_ID")  # Paste the ID of the page holding the list of articles

# Output Paths (Matching your Tina config)
OUTPUT_DIR = "content/blog"
IMAGE_DIR = "public/uploads"
IMAGE_PUBLIC_PATH = "/uploads"

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
}

# ==========================================
# HELPER FUNCTIONS
# ==========================================
def download_image(url, filename_prefix):
    """Downloads an image from Notion and saves it to public/uploads"""
    if not url: return None
    try:
        response = requests.get(url)
        if response.status_code == 200:
            # Determine extension
            ext = ".jpg"
            if ".png" in url: ext = ".png"
            elif ".gif" in url: ext = ".gif"
            elif ".jpeg" in url: ext = ".jpeg"
            elif ".webp" in url: ext = ".webp"
            
            filename = f"{filename_prefix}{ext}"
            filepath = os.path.join(IMAGE_DIR, filename)
            
            with open(filepath, "wb") as f:
                f.write(response.content)
            
            # Return the path TinaCMS needs (e.g. /uploads/image.jpg)
            return f"{IMAGE_PUBLIC_PATH}/{filename}"
    except Exception as e:
        print(f"Warning: Failed to download image {url}: {e}")
    return None

def extract_text(rich_text):
    """Extracts plain text from Notion's rich text objects"""
    if not rich_text: return ""
    return "".join([t.get("plain_text", "") for t in rich_text])

def blocks_to_markdown(blocks, slug):
    """Converts Notion Blocks to Markdown Body"""
    md = ""
    img_count = 1
    for b in blocks:
        b_type = b["type"]
        content = b.get(b_type, {})
        
        # Text Blocks
        if b_type == "paragraph":
            md += f"{extract_text(content.get('rich_text', []))}\n\n"
        elif "heading" in b_type:
            level = b_type.split("_")[1]
            md += f"{'#' * int(level)} {extract_text(content.get('rich_text', []))}\n\n"
        elif b_type == "bulleted_list_item":
             md += f"* {extract_text(content.get('rich_text', []))}\n"
        elif b_type == "numbered_list_item":
             md += f"1. {extract_text(content.get('rich_text', []))}\n"
        elif b_type == "quote":
             md += f"> {extract_text(content.get('rich_text', []))}\n\n"
        elif b_type == "code":
            lang = content.get("language", "text")
            md += f"```{lang}\n{extract_text(content.get('rich_text', []))}\n```\n\n"
            
        # Image Blocks
        elif b_type == "image":
            url = content.get("file", {}).get("url") or content.get("external", {}).get("url")
            # Download the image so it works in Tina
            local_path = download_image(url, f"{slug}-body-{img_count}")
            if local_path:
                md += f"![Image]({local_path})\n\n"
                img_count += 1
                
    return md

# ==========================================
# MAIN EXECUTION
# ==========================================
def main():
    # Ensure folders exist
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(IMAGE_DIR, exist_ok=True)

    print(f"--- Starting Migration from Parent Page: {PARENT_PAGE_ID} ---")
    
    # 1. Fetch all children of the parent page
    url = f"https://api.notion.com/v1/blocks/{PARENT_PAGE_ID}/children"
    response = requests.get(url, headers=HEADERS)
    
    if response.status_code != 200:
        print(f"CRITICAL ERROR: Could not access page. Status: {response.status_code}")
        print(response.text)
        return

    # 2. Filter for only 'child_page' (ignoring headings/text on the main page)
    results = response.json().get("results", [])
    pages = [b for b in results if b["type"] == "child_page"]
    
    print(f"Found {len(pages)} articles to migrate.")

    for page in pages:
        title = page["child_page"]["title"]
        page_id = page["id"]
        slug = slugify(title)
        
        print(f"Processing: {title}...")

        try:
            # 3. Fetch Page Metadata (Need this specifically for the Cover Image)
            meta_url = f"https://api.notion.com/v1/pages/{page_id}"
            meta_resp = requests.get(meta_url, headers=HEADERS).json()
            
            cover_url = None
            if meta_resp.get("cover"):
                raw_url = meta_resp["cover"].get("file", {}).get("url") or meta_resp["cover"].get("external", {}).get("url")
                cover_url = download_image(raw_url, f"{slug}-cover")

            # 4. Fetch Page Content (The body text)
            blocks_url = f"https://api.notion.com/v1/blocks/{page_id}/children"
            blocks_resp = requests.get(blocks_url, headers=HEADERS)
            blocks = blocks_resp.json().get("results", [])
            
            body_content = blocks_to_markdown(blocks, slug)

            # 5. Construct Frontmatter (Strictly matching your new Schema)
            # Note: Categories and Tags are empty lists [] because Notion pages don't have them.
            frontmatter = f"""---
title: "{title}"
draft: true
featured: false
date: "{datetime.now().isoformat()}"
tags: []
categories: []
"""
            if cover_url:
                frontmatter += f'coverImage: "{cover_url}"\n'
            
            frontmatter += "---\n\n"

            # 6. Save the file
            filename = f"{OUTPUT_DIR}/{slug}.md"
            with open(filename, "w", encoding="utf-8") as f:
                f.write(frontmatter + body_content)

        except Exception as e:
            print(f"FAILED on '{title}': {e}")

    print("--- Migration Complete ---")

if __name__ == "__main__":
    main()