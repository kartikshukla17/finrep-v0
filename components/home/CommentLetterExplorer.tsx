"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

// Navigation tabs data
const navigationTabs = [
  {
    id: "sec-reporting",
    label: "SEC Reporting",
    sections: [
      {
        id: 1,
        title: "Get cited answers on 10M+ financial documents",
        mobileTitle: "Get cited answers on 10M+ financial documents",
        description:
          "Research across filings, guidance, and SEC correspondence in one place. Conduct trustful research, 10x faster",
        mobileDescription:
          "Research across filings, guidance, and SEC correspondence in one place. Conduct trustful research, 10x faster",
        image: "/assets/commentletterexplorer/sec-reporting-1.png",
        benefits: [
          {
            text: "Unified authoritative sources",
            mobileBenefit: "Unified authoritative sources",
            badge: null,
          },
          {
            text: "Evidence first answers",
            mobileBenefit: "Evidence first answers",
            badge: null,
          },
          {
            text: "Verifiable source excerpts",
            mobileBenefit: "Verifiable source excerpts",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 2,
        title: "Benchmark peer practices clearly",
        mobileTitle: "Benchmark peer practices clearly",
        description:
          'See what "market standard" actually looks like for any disclosure, IR or any other document. Cut down benchmarking times by more than 80%',
        mobileDescription:
          'See what "market standard" actually looks like for any disclosure, IR or any other document. Cut down benchmarking times by more than 80%',
        image: "/assets/commentletterexplorer/sec-reporting-2.png",
        benefits: [
          {
            text: "Side by side peer views",
            mobileBenefit: "Side by side peer views",
            badge: null,
          },
          {
            text: "Verbatim disclosure excerpts",
            mobileBenefit: "Verbatim disclosure excerpts",
            badge: null,
          },
          {
            text: "Repeatable benchmarking structure",
            mobileBenefit: "Repeatable benchmarking structure",
            badge: null,
          },
        ],
      },
      {
        id: 3,
        title: "Draft disclosures with confidence",
        mobileTitle: "Draft disclosures with confidence",
        description:
          "Draft filings, PRs, memos using roll forwards, peer language, authoritative guidance. Get to the first draft in a matter of minutes",
        mobileDescription:
          "Draft filings, PRs, memos using roll forwards, peer language, authoritative guidance. Get to the first draft in a matter of minutes",
        image: "/assets/commentletterexplorer/sec-reporting-3.png",
        benefits: [
          {
            text: "Source linked, research integrated drafting",
            mobileBenefit: "Source linked, research integrated drafting",
            badge: null,
          },
          {
            text: "Built in redlining",
            mobileBenefit: "Built in redlining",
            badge: null,
          },
          {
            text: "Collaborative review workflows",
            mobileBenefit: "Collaborative review workflows",
            badge: null,
          },
        ],
      },
      {
        id: 4,
        title: "Ensure compliance early with confidence.",
        mobileTitle: "Ensure compliance early with confidence.",
        description:
          "Evaluate compliance while you are drafting, and align with peer languages and best practices in an instant. Support conclusions with traceable regulatory evidence.",
        mobileDescription:
          "Evaluate compliance while you are drafting, and align with peer languages and best practices in an instant. Support conclusions with traceable regulatory evidence.",
        image: "/assets/commentletterexplorer/sec-reporting-4.png",
        benefits: [
          {
            text: "ASC-aligned benchmarking for filings",
            mobileBenefit: "ASC-aligned benchmarking for filings",
            badge: "Most Liked",
          },
          {
            text: "Evidence backed findings for benchmarking drafts",
            mobileBenefit: "Evidence backed findings for benchmarking drafts",
            badge: null,
          },
        ],
      },
      {
        id: 5,
        title: "Monitor disclosure and regulatory changes",
        mobileTitle: "Monitor disclosure and regulatory changes",
        description:
          "Track evolving peer disclosures and SEC focus areas as they change. Get notified daily or weekly, before issues surface in review.",
        mobileDescription:
          "Track evolving peer disclosures and SEC focus areas as they change. Get notified daily or weekly, before issues surface in review.",
        image: "/assets/commentletterexplorer/sec-reporting-5.png",
        benefits: [
          {
            text: "Keyword based monitoring on EDGAR",
            mobileBenefit: "Keyword based monitoring on EDGAR",
            badge: null,
          },
          {
            text: "Topic scoped mail alerts",
            mobileBenefit: "Topic scoped mail alerts",
            badge: null,
          },
        ],
      },
    ],
  },
];

export default function CommentLetterExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const currentTab = navigationTabs[activeTab];
  const sections = currentTab.sections;

  // Track scroll progress within the container (desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Only allows advancing one section at a time to prevent skipping sections (desktop)
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const clampedProgress = Math.max(0, Math.min(0.999, progress));
    const n = sections.length;
    const rawIndex = clampedProgress * n;
    let sectionIndex: number;

    // Only allow moving to adjacent sections (one at a time)
    // Require rawIndex to be closer to target section before switching
    if (rawIndex >= activeSection + 0.8) {
      // Advance forward: only go to next section
      sectionIndex = Math.min(activeSection + 1, n - 1);
    } else if (rawIndex < activeSection + 0.2) {
      // Go backward: only go to previous section
      sectionIndex = Math.max(activeSection - 1, 0);
    } else {
      // Stay in current section
      sectionIndex = activeSection;
    }

    if (sectionIndex !== activeSection) {
      setActiveSection(sectionIndex);
    }
  });

  return (
    <section id="solutions">
      {/* Mobile Layout - Vertically scrollable/swipeable cards */}
      <div
        ref={mobileContainerRef}
        className="lg:hidden w-full bg-white overflow-y-scroll snap-y snap-mandatory"
        style={{
          height: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        {/* Scrollable cards - each card takes full viewport height */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="min-h-screen snap-start flex items-center justify-center py-6 sm:py-8 md:py-10"
          >
            <div className="px-4 sm:px-6 md:px-8 max-w-[600px] md:max-w-[700px] mx-auto w-full flex flex-col gap-5 sm:gap-6 md:gap-8">
              {/* Mobile Image - image1.png, image2.png, etc. (no container) */}
              <div className="w-full aspect-[4/4] relative overflow-hidden rounded-[8px]">
                <Image
                  src={`/assets/commentletterexplorer/mobile/image${index + 1}.png`}
                  alt="Feature preview"
                  fill
                  className="object-contain rounded-[8px]"
                />
              </div>

              {/* Mobile Content */}
              <div className="flex flex-col gap-6">
                {/* Section Number */}
                <span className="text-[#0E0F10] text-xs font-medium font-articulat">
                  0{section.id}
                </span>

                {/* Title & Description */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-[#0E0F10] text-[24px] sm:text-[26px] md:text-[28px] font-medium font-articulat leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-[#5E6469] text-base sm:text-lg font-normal font-articulat leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {section.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      {/* Checkbox Icon */}
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0E0F10] rounded flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
                      </div>
                      <span className="text-[#0E0F10] text-base sm:text-lg font-medium font-articulat">
                        {benefit.text}
                      </span>
                      {benefit.badge && (
                        <div className="px-1 py-1 bg-gradient-to-br from-[#CC1C0F] to-[#FFAF42] rounded-lg flex items-center gap-1">
                          <Image
                            src="/assets/icons/solar_star-fall-2-bold-duotone.svg"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                          <span className="text-white text-xs font-semibold font-articulat">
                            {benefit.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Request Access Button - Positioned below CommentLetterExplorer, above OutcomeInPractice (mobile only) */}
      <div className="lg:hidden w-full bg-white px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="max-w-[600px] md:max-w-[700px] mx-auto">
          <a
            href="https://cal.com/gana-finrep/intro?duration=15"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-[#29AB87] rounded-lg flex items-center justify-center hover:bg-[#238f73] transition-colors"
          >
            <span className="text-[#F4FBF8] text-base sm:text-lg font-medium font-articulat">
              Request Access
            </span>
          </a>
        </div>
      </div>

      {/* Desktop Layout - Scroll-driven sticky behavior with layout containment */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full bg-white"
        style={{
          height: `calc(${sections.length} * var(--section-scroll-vh) * 1vh)`,
          contain: "layout style",
        }}
      >
        {/* Sticky content that stays in view - offset for header */}
        <div className="comment-letter-sticky sticky top-[75px] h-[calc(100vh-75px)] overflow-y-auto flex items-center">
          <div className="comment-letter-inner w-full h-full mx-auto flex flex-row items-stretch">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-start items-start gap-12 pl-6 lg:pl-10 py-8 overflow-y-auto">
              {/* Main Content with Numbered List and Active Section */}
              <div className="w-full flex justify-start items-start gap-8 lg:gap-16">
                {/* Numbered List - Clickable */}
                <div className="flex flex-col justify-start items-start">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(index)}
                      className="flex justify-start items-center gap-1 cursor-pointer"
                    >
                      <div
                        className={cn(
                          "w-px h-20 transition-colors duration-300",
                          activeSection === index
                            ? "bg-[#29AB87]"
                            : "bg-[#ECEDEE]",
                        )}
                      ></div>
                      <div
                        className={cn(
                          "text-xs font-normal font-articulat transition-colors duration-300 w-3",
                          activeSection === index
                            ? "text-[#29AB87]"
                            : "text-[#0E0F10]",
                        )}
                      >
                        {section.id}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active Section Content + Request Access just below the points */}
                <div className="flex-1 max-w-[450px] lg:max-w-[545px] flex flex-col justify-start items-start gap-6 lg:gap-9">
                  <AnimatePresence mode="wait">
                    <SectionContent
                      key={activeSection}
                      section={sections[activeSection]}
                    />
                  </AnimatePresence>

                  <div className="flex justify-start items-center gap-4">
                    <a
                      href="https://cal.com/gana-finrep/intro?duration=15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors"
                    >
                      <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                        Request Access
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Interface Mockup */}
            <div className="w-[45%] max-w-[706px] min-w-[350px] h-full max-h-[700px] flex-shrink-0 self-center rounded-l-2xl overflow-hidden">
              <InterfaceMockup image={sections[activeSection].image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionContent({
  section,
}: {
  section: {
    id: number;
    title: string;
    description: string;
    benefits: { text: string; badge: string | null }[];
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col justify-start items-start gap-9"
    >
      {/* Title and Description */}
      <div className="flex flex-col justify-start items-start gap-6">
        <h3 className="max-w-[477px] text-[#0E0F10] text-[36px] font-medium font-articulat leading-[43.20px]">
          {section.title}
        </h3>
        <p className="max-w-[525px] text-[#5E6469] text-xl font-normal font-articulat leading-7">
          {section.description}
        </p>
      </div>

      {/* Benefits List */}
      <div className="flex flex-col justify-start items-start gap-3">
        {section.benefits.map((benefit, idx) => (
          <div key={idx} className="flex justify-center items-center gap-2.5">
            {/* Checkbox Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="4" fill="#0E0F10" />
              <path
                d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z"
                fill="#F9FAFA"
              />
            </svg>

            <div className="text-[#0E0F10] text-xl font-medium font-articulat leading-7">
              {benefit.text}
            </div>
            {benefit.badge && (
              <div className="p-1 bg-gradient-to-br from-[#CC1C0F] to-[#FFAF42] rounded-lg flex justify-center items-center gap-1">
                <Image
                  src="/assets/icons/solar_star-fall-2-bold-duotone.svg"
                  alt="Star"
                  width={16}
                  height={16}
                />
                <div className="text-white text-xs font-semibold font-articulat leading-[16.80px]">
                  {benefit.badge}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function InterfaceMockup({ image }: { image: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90) 100%),
            radial-gradient(ellipse 106% 80% at 50% 100%, rgba(41, 171, 135, 0.28) 0%, rgba(21, 89, 70, 0.28) 40%, rgba(0, 0, 0, 0) 70%)
          `,
        }}
      />
      {/* Noise Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <Image
            src={image}
            alt="Feature preview"
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
