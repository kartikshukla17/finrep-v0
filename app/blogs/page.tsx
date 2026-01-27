"use client";

import { BlogGrid, BlogHero, BlogTabs } from "@/components/blogs";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";

const BLOG_TABS = ["Blogs", "Company", "AI & Tech", "SEC Journal"];

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  videoUrl?: string;
};

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState("Blogs");

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featured, setFeatured] = useState<BlogPost | null>(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      // Pass category filter to API (Blogs = all posts)
      const categoryParam =
        activeTab === "Blogs"
          ? ""
          : `?category=${encodeURIComponent(activeTab)}`;
      const res = await fetch(`/api/blogs${categoryParam}`);
      const data = await res.json();

      setFeatured(data.featured);
      setPosts(data.posts);
      setTotalPosts(data.total || 0);
      setLoading(false);
    };

    load();
  }, [activeTab]);

  const handleViewMore = () => {
    console.log("Load more posts");
  };

  return (
    <div className="relative w-full bg-[#0D352A] min-h-screen flex flex-col font-articulat overflow-x-hidden">
      <BlogHero />

      <div className="relative w-full bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-10 py-12 lg:pt-[120px] lg:pb-[150px] flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-16">
          <BlogTabs
            tabs={BLOG_TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* {featured && (
            <FeaturedArticle
              slug={featured.slug}
              title={featured.title}
              date={featured.date}
              videoUrl={featured.videoUrl || "https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"}
            />
          )} */}

          <BlogGrid
            posts={posts.map((p) => ({
              slug: p.slug,
              title: p.title,
              date: new Date(p.date).toDateString(),
              image: p.coverImage || "/assets/images/articleimage.png",
            }))}
            showViewMore={totalPosts > 9}
            onViewMore={handleViewMore}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
