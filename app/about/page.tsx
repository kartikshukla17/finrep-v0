import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Footer from "@/components/layout/Footer";
import {
    AboutHero,
    VisionSection,
    ProblemSection,
    PlatformSection,
    ValueSection,
    LeadersSection,
    ExperienceSection,
    BackersSection
} from "@/components/about";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-articulat">
            <AboutHero />

            {/* Vision, Problem, Platform Section */}
            <div className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-10 section-screen">
                <div className="max-w-[1440px] mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-[120px]">
                    <VisionSection />
                    <ProblemSection />
                    <PlatformSection />
                </div>
            </div>

            <ValueSection />
            <LeadersSection />
            <ExperienceSection />
            <BackersSection />

            <Footer />
        </div>
    );
}
