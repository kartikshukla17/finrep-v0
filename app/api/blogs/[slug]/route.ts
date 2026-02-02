import { AUTHOR_IMAGE, AUTHOR_NAME } from "@/lib/author";
import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Environment check for draft filtering
const isStaging = process.env.NEXT_PUBLIC_IS_STAGING === "true";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // Check if post is draft and we're on production
    const isDraft = data.draft === true;
    if (isDraft && !isStaging) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Get related articles (3 most recent posts excluding current one)
    const allFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
    const otherPosts = allFiles
      .filter((f) => f !== `${slug}.md`)
      .map((file) => {
        const postSlug = file.replace(/\.md$/, "");
        const postRaw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
        const { data: postData } = matter(postRaw);
        return {
          slug: postSlug,
          title: postData.title ?? postSlug,
          date: postData.date ?? "",
          image: postData.coverImage ?? "/assets/images/artcleimage.webp",
          draft: postData.draft === true,
        };
      })
      // Filter out drafts on production
      .filter((post) => isStaging || !post.draft)
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 3)
      .map(({ draft, ...rest }) => rest); // Remove draft field from response

    return NextResponse.json({
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      author: {
        name: AUTHOR_NAME,
        role: "",
        avatar: AUTHOR_IMAGE,
      },
      categories: data.categories ?? [],
      featuredImage: data.coverImage ?? "",
      excerpt: data.description ?? "",
      content,
      tags: data.tags ?? [],
      readTime: data.readTime ?? undefined,
      pdfUrl: data.pdfUrl ?? "",
      relatedArticles: otherPosts,
      draft: isDraft, // Include draft status in response
    });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
