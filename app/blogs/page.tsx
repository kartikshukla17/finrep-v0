"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import {
    BlogHero,
    BlogTabs,
    FeaturedArticle,
    BlogGrid
} from "@/components/blogs";

const BLOG_TABS = ["Blogs", "Company", "AI & Tech", "SEC Journal"];

// Mock data - replace with actual data from backend
const MOCK_POSTS = Array.from({ length: 9 }, (_, i) => ({
    slug: `article-${i + 1}`,
    title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
    date: "Jan 2, 2026",
    image: "/assets/images/articleimage.png"
}));

const FEATURED_ARTICLE = {
    slug: "from-sanctions-to-scrutiny",
    title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
    date: "Jan 2, 2026",
    videoUrl: "https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"
};

export default function BlogsPage() {
    const [activeTab, setActiveTab] = useState("Blogs");

    const handleViewMore = () => {
        // TODO: Implement pagination or load more functionality
        console.log('Load more posts');
    };

    return (
        <div className="relative w-full bg-[#0D352A] min-h-screen flex flex-col font-articulat">
            <BlogHero />

            {/* Blog Content Section - White Background */}
            <div className="relative w-full bg-white">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-16 flex flex-col justify-center items-start gap-16">
                    <BlogTabs
                        tabs={BLOG_TABS}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    <FeaturedArticle
                        slug={FEATURED_ARTICLE.slug}
                        title={FEATURED_ARTICLE.title}
                        date={FEATURED_ARTICLE.date}
                        videoUrl={FEATURED_ARTICLE.videoUrl}
                    />

                    <BlogGrid
                        posts={MOCK_POSTS}
                        showViewMore={true}
                        onViewMore={handleViewMore}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
