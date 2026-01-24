import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/server/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;

  const allPosts = getAllBlogPosts(category);

  return NextResponse.json({
    featured: allPosts[0] ?? null,
    posts: allPosts.slice(0, 9),
    total: allPosts.length,
  });
}
