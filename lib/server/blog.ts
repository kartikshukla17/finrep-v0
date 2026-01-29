import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Environment check for draft filtering (Approach B)
// Staging shows all posts (drafts + published)
// Production only shows published posts (draft: false or undefined)
const isStaging = process.env.NEXT_PUBLIC_IS_STAGING === "true";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author?: string;
  categories?: string[] | string;
  description?: string;
  videoUrl?: string;
  draft?: boolean;
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
      draft: data.draft === true,
    } as BlogPost;
  });

  // Filter out drafts on production (Approach B)
  // Staging (isStaging=true): show all posts
  // Production (isStaging=false): only show published posts
  const filteredPosts = isStaging
    ? posts
    : posts.filter((post) => !post.draft);

  // Sort by date (most recent first)
  const sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter by category if provided (and not "Blogs" which shows all)
  if (category && category !== "Blogs") {
    return sortedPosts.filter((post) => {
      const postCategories = Array.isArray(post.categories)
        ? post.categories
        : [];
      return postCategories.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      );
    });
  }

  return sortedPosts;
}

export function getBlogPostBySlug(slug: string): {
  post: BlogPost;
  content: string;
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Check if post is draft and we're on production
  const isDraft = data.draft === true;
  if (isDraft && !isStaging) {
    return null; // Don't show drafts on production
  }

  // Normalize categories
  let categories: string[] = [];
  if (Array.isArray(data.categories)) {
    categories = data.categories;
  } else if (typeof data.categories === "string" && data.categories) {
    categories = [data.categories];
  }

  return {
    post: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      coverImage: data.coverImage,
      author: data.author,
      categories,
      description: data.description,
      videoUrl: data.videoUrl,
      draft: isDraft,
    },
    content,
  };
}
