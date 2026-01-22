"use client";

import { BlogGrid, BlogHero, BlogTabs, FeaturedArticle } from "@/components/blogs";
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

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      setFeatured(data.featured);
      setPosts(data.posts);
      setTotalPosts(data.total || 0);
    };

    load();
  }, []);

  const handleViewMore = () => {
    console.log("Load more posts");
  };

  return (
    <div className="relative w-full bg-[#0D352A] min-h-screen flex flex-col font-articulat">
      <BlogHero />

      <div className="relative w-full bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-16 flex flex-col justify-center items-start gap-16">
          <BlogTabs tabs={BLOG_TABS} activeTab={activeTab} onTabChange={setActiveTab} />

          {featured && (
            <FeaturedArticle
              slug={featured.slug}
              title={featured.title}
              date={featured.date}
              videoUrl={featured.videoUrl || "https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"}
            />
          )}

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
