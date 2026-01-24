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
            <div className="w-full bg-white py-12 lg:py-[120px] px-5 lg:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-[120px]">
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
