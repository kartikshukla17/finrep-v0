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

    // Get related articles (random posts excluding current one)
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
          image: postData.coverImage ?? "/assets/images/articleimage.png",
        };
      })
      .sort(() => Math.random() - 0.5) // Shuffle randomly
      .slice(0, 3); // Get 3 random articles

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
      relatedArticles: otherPosts,
    });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
