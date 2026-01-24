import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import BestPractices from "../components/home/BestPractices";
import BuiltForCFO from "../components/home/BuiltForCFO";
import CommentLetterExplorer from "../components/home/CommentLetterExplorer";
import CustomAI from "../components/home/CustomAI";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import OutcomeInPractice from "../components/home/OutcomeInPractice";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <div className="relative w-full bg-[#0D352A] flex-1 flex flex-col">
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
