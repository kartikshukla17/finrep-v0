import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const BLOG_DIR = path.join(process.cwd(), "content/blog");
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return NextResponse.json({
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      author: data.author
        ? {
            name: data.author,
            role: data.authorRole ?? "",
            avatar: data.authorImage ?? "",
          }
        : undefined,
      categories: data.categories ?? [],
      featuredImage: data.coverImage ?? "",
      excerpt: data.description ?? "",
      content, // RAW MARKDOWN (we'll render in ArticleContent)
      tags: data.tags ?? [],
      readTime: data.readTime ?? undefined,
      pdfUrl: data.pdfUrl ?? "",
    });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
