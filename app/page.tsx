import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import {
  Hero,
  BuiltForCFO,
  CommentLetterExplorer,
  OutcomeInPractice,
  CustomAI,
  BestPractices,
  FAQ,
} from "@/components/home";
import Footer from "@/components/layout/Footer";
import { getFeaturedBlogPosts } from "@/lib/server/blog";

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  const featuredArticles = getFeaturedBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date ? new Date(post.date).toDateString() : "",
    image: post.coverImage || "/assets/images/artcleimage.webp",
  }));

  return (
    <div className="relative w-full bg-[#0D352A] flex-1 flex flex-col">
      <Hero />
      {/* Main content sections with 150px vertical spacing */}
      <div className="flex flex-col gap-[150px] bg-white">
        <BuiltForCFO />
        <CommentLetterExplorer />
        <OutcomeInPractice />
        <CustomAI />
        <BestPractices articles={featuredArticles} />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
