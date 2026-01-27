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

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <div className="relative w-full bg-[#0D352A] flex-1 flex flex-col">
      <Hero />
      {/* Main content sections with 150px vertical spacing */}
      <div className="flex flex-col gap-[150px] bg-white">
        <BuiltForCFO />
        <CommentLetterExplorer />
        <OutcomeInPractice />
        <CustomAI />
        <BestPractices />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
