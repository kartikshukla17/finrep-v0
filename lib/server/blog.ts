import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author?: string;
  categories?: string[] | string;
  description?: string;
  videoUrl?: string;
};

export function getAllBlogPosts(category?: string): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);

    // Normalize categories to always be an array
    let categories: string[] = [];
    if (Array.isArray(data.categories)) {
      categories = data.categories;
    } else if (typeof data.categories === "string" && data.categories) {
      categories = [data.categories];
    }

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      coverImage: data.coverImage,
      author: data.author,
      categories,
      description: data.description,
      videoUrl: data.videoUrl,
    } as BlogPost;
  });

  // Sort by date (most recent first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter by category if provided (and not "Blogs" which shows all)
  if (category && category !== "Blogs") {
    return sortedPosts.filter((post) => {
      const postCategories = Array.isArray(post.categories) ? post.categories : [];
      return postCategories.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      );
    });
  }

  return sortedPosts;
}
