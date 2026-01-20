import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Hero from "../components/home/Hero";
import BuiltForCFO from "../components/home/BuiltForCFO";
import CommentLetterExplorer from "../components/home/CommentLetterExplorer";
import OutcomeInPractice from "../components/home/OutcomeInPractice";
import CustomAI from "../components/home/CustomAI";
import BestPractices from "../components/home/BestPractices";
import FAQ from "../components/home/FAQ";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <div className="relative w-full bg-[#0D352A]">
      <Hero />
      <BuiltForCFO />
      <CommentLetterExplorer />
      <OutcomeInPractice />
      <CustomAI />
      <BestPractices />
      <FAQ />
      <Footer />
    </div>
  );
}
