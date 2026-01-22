import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  author?: string;
  authorImage?: string;
  categories?: string[] | string;
  coverImage?: string;
};

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      ...(data as Omit<BlogMeta, "slug">),
    };
  });

  // newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: { slug, ...(data as Omit<BlogMeta, "slug">) },
    content,
  };
}
