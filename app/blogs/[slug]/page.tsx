"use client";

import { use } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
    ArticleSidebar,
    ArticleHeader,
    ArticleContent,
    TableOfContents,
    RelatedArticles
} from "@/components/blogs";

// Define the article data structure
interface BlogArticle {
    id: string;
    slug: string;
    title: string;
    date: string;
    author?: {
        name: string;
        role?: string;
        avatar?: string;
    };
    category: string;
    categories?: string[];
    featuredImage: string;
    content: string;
    excerpt?: string;
    tags?: string[];
    readTime?: number;
    pdfUrl?: string;
    tableOfContents?: {
        title: string;
        sections?: string[];
    }[];
}

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = use(params);

    // TODO: Fetch article data from backend API
    // Mock data structure - replace with actual data from backend
    const article: BlogArticle = {
        id: "1",
        slug: slug,
        title: "Auditor's Watch: How Increased SEC Scrutiny of Gatekeepers Impacts Your Next 10-K/20-F Audit",
        date: "Jan 1, 2023",
        author: {
            name: "Aman Gupta",
            role: "Guest Author",
            avatar: "/assets/images/author-avatar.png",
        },
        category: "Blogs",
        categories: ["Category 1", "Category 2"],
        featuredImage: "/assets/images/article-featured.png",
        content: "<p>Article content will come from backend...</p>",
        excerpt: "Expert insights on financial disclosure, compliance, and the future of CFO operations",
        tags: ["SEC Reporting", "Compliance", "OFAC"],
        readTime: 5,
        pdfUrl: "/documents/article.pdf",
        tableOfContents: [
            {
                title: "Why the Sudden Spotlight",
                sections: ["SEC's Renewed Focus", "The Perfect Storm", "Three Lines of Defense"],
            },
            {
                title: "The New Audit Landscape",
                sections: ["Professional Skepticism", "Documentation Standards"],
            },
            {
                title: "How to Prepare",
            },
        ],
    };

    const relatedArticles = [
        {
            slug: "article-1",
            title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
            date: "Jan 2, 2026",
            image: "/assets/images/articleimage.png"
        },
        {
            slug: "article-2",
            title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
            date: "Jan 2, 2026",
            image: "/assets/images/articleimage.png"
        },
        {
            slug: "article-3",
            title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
            date: "Jan 2, 2026",
            image: "/assets/images/articleimage.png"
        }
    ];

    return (
        <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
            {/* Fixed Header */}
            <Header variant="dark" />

            {/* Main Content */}
            <main className="flex-1 w-full pt-[72px]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-8 md:py-12">
                    <div className="flex gap-8 lg:gap-12">
                        {/* Left Sidebar - Authors & Share (Desktop only) */}
                        <ArticleSidebar author={article.author} />

                        {/* Main Article Content */}
                        <div className="flex-1 min-w-0 max-w-[800px]">
                            {/* Mobile Author Info */}
                            <div className="lg:hidden mb-6">
                                {article.author && (
                                    <div className="flex items-center gap-2 text-sm text-[#5E6469]">
                                        <span>By {article.author.name}</span>
                                        {article.author.role && (
                                            <>
                                                <span>•</span>
                                                <span>{article.author.role}</span>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            <ArticleHeader
                                title={article.title}
                                date={article.date}
                                categories={article.categories}
                            />

                            <ArticleContent
                                featuredImage={article.featuredImage}
                                title={article.title}
                            />
                        </div>

                        {/* Right Sidebar - Table of Contents (Desktop only) */}
                        {article.tableOfContents && (
                            <TableOfContents sections={article.tableOfContents} />
                        )}
                    </div>
                </div>

                {/* Related Articles */}
                <RelatedArticles articles={relatedArticles} />
            </main>

            <Footer />
        </div>
    );
}
