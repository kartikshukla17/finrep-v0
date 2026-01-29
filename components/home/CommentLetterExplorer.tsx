"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Auto-advance duration for mobile
const MOBILE_SLIDE_DURATION = 5000;

// Navigation tabs data
const navigationTabs = [
  {
    id: "sec-reporting",
    label: "SEC Reporting",
    sections: [
      {
        id: 1,
        title: "Ground Disclosures in SEC Precedent with Ask Fina",
        mobileTitle: "Minimize Scrutiny with Comment Letter Explorer",
        description:
          "Research SEC filings, guidance, peer disclosures, comment letters, and internal documents in one place with inspectable citations to defend disclosure decisions during audit and SEC review.",
        mobileDescription:
          "Leverage our AI to get insights, summaries, conclusion, and focus areas-tagged, so you know what triggers scrutiny.",
        image: "/assets/commentletterexplorer/sec-reporting-1.png",
        benefits: [
          {
            text: "SEC filing citations",
            mobileBenefit: "Early SEC focus visibility",
            badge: null,
          },
          {
            text: "Peer disclosure precedent",
            mobileBenefit: "Fewer Late Replies",
            badge: null,
          },
          {
            text: "Inspectable source trails",
            mobileBenefit: "Reduced Comment Risk",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 2,
        title: "Avoid EDGAR Blind Spots with Keyword Search + Alerts",
        mobileTitle: "Avoid EDGAR Blind Spots with Keyword Search + Alerts",
        description:
          "Run precise boolean searches across EDGAR filings and receive alerts when new disclosures match your criteria, reducing the risk of missed peer language.",
        mobileDescription:
          "Run precise boolean searches across EDGAR filings and receive alerts when new disclosures match your criteria.",
        image: "/assets/commentletterexplorer/sec-reporting-2.png",
        benefits: [
          {
            text: "EDGAR boolean logic",
            mobileBenefit: "EDGAR boolean logic",
            badge: null,
          },
          {
            text: "Filing metadata filters",
            mobileBenefit: "Filing metadata filters",
            badge: null,
          },
          {
            text: "Automated disclosure alerts",
            mobileBenefit: "Automated disclosure alerts",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 3,
        title: "Benchmark Peer Disclosures Correctly with AI Grid Reports",
        mobileTitle: "Benchmark Peer Disclosures Correctly",
        description:
          "Compare peer disclosures across companies and periods using structured grids with verbatim excerpts or AI summaries for consistent benchmarking.",
        mobileDescription:
          "Compare peer disclosures across companies and periods using structured grids with verbatim excerpts.",
        image: "/assets/commentletterexplorer/sec-reporting-3.png",
        benefits: [
          {
            text: "Structured peer grids",
            mobileBenefit: "Structured peer grids",
            badge: null,
          },
          {
            text: "Period comparisons",
            mobileBenefit: "Period comparisons",
            badge: null,
          },
          {
            text: "Verbatim and AI views",
            mobileBenefit: "Verbatim and AI views",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 4,
        title:
          "Prevent Disclosure Drift with Disclosure Comparison + Checklists",
        mobileTitle: "Prevent Disclosure Drift",
        description:
          "Review disclosures side by side and validate required coverage using FASB-aligned checklists to catch drift, omissions, and over-disclosure early.",
        mobileDescription:
          "Review disclosures side by side and validate required coverage using FASB-aligned checklists.",
        image: "/assets/commentletterexplorer/sec-reporting-4.png",
        benefits: [
          {
            text: "Side-by-side disclosures",
            mobileBenefit: "Side-by-side disclosures",
            badge: null,
          },
          {
            text: "FASB-aligned checklists",
            mobileBenefit: "FASB-aligned checklists",
            badge: null,
          },
          {
            text: "Language drift detection",
            mobileBenefit: "Language drift detection",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 5,
        title: "Anticipate SEC Scrutiny with Comment Letter Explorer",
        mobileTitle: "Anticipate SEC Scrutiny",
        description:
          "Analyze historical and recent SEC comment letters to identify recurring focus areas and pressure-test disclosures before filing.",
        mobileDescription:
          "Analyze historical and recent SEC comment letters to identify recurring focus areas.",
        image: "/assets/commentletterexplorer/sec-reporting-5.png",
        benefits: [
          {
            text: "SEC focus analytics",
            mobileBenefit: "SEC focus analytics",
            badge: null,
          },
          {
            text: "Full comment threads",
            mobileBenefit: "Full comment threads",
            badge: null,
          },
          {
            text: "Recurring issue tracking",
            mobileBenefit: "Recurring issue tracking",
            badge: "Most Liked",
          },
        ],
      },
    ],
  },
  {
    id: "investor-relations",
    label: "Investor Relations",
    sections: [
      {
        id: 1,
        title: "Calibrate Peer Messaging with Disclosure Comparison",
        mobileTitle: "Calibrate Peer Messaging",
        description:
          "Compare disclosure language across peers and prior periods to ensure messaging aligns with investor expectations before earnings and public communications.",
        mobileDescription:
          "Compare disclosure language across peers and prior periods to ensure messaging aligns with investor expectations.",
        image: "/assets/commentletterexplorer/sec-reporting-4.png",
        benefits: [
          {
            text: "Peer disclosure alignment",
            mobileBenefit: "Peer disclosure alignment",
            badge: null,
          },
          {
            text: "Cross-period consistency",
            mobileBenefit: "Cross-period consistency",
            badge: null,
          },
          {
            text: "Narrative comparison",
            mobileBenefit: "Narrative comparison",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 2,
        title: "Extract Investor-Relevant Themes with AI Grid Reports",
        mobileTitle: "Extract Investor-Relevant Themes",
        description:
          "Analyze MD&A and risk disclosures across peers using structured grids to surface patterns and themes relevant for earnings prep and leadership briefings.",
        mobileDescription:
          "Analyze MD&A and risk disclosures across peers using structured grids to surface patterns.",
        image: "/assets/commentletterexplorer/sec-reporting-3.png",
        benefits: [
          {
            text: "MD&A pattern analysis",
            mobileBenefit: "MD&A pattern analysis",
            badge: null,
          },
          {
            text: "Peer theme extraction",
            mobileBenefit: "Peer theme extraction",
            badge: null,
          },
          {
            text: "Verbatim disclosure support",
            mobileBenefit: "Verbatim disclosure support",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 3,
        title: "Prepare Defensible Investor Answers with Ask Fina",
        mobileTitle: "Prepare Defensible Investor Answers",
        description:
          "Generate citeable answers to investor questions using public filings, peer disclosures, and approved internal documents to reduce misstatement risk.",
        mobileDescription:
          "Generate citeable answers to investor questions using public filings and peer disclosures.",
        image: "/assets/commentletterexplorer/sec-reporting-1.png",
        benefits: [
          {
            text: "Filing-backed responses",
            mobileBenefit: "Filing-backed responses",
            badge: null,
          },
          {
            text: "Scoped disclosure context",
            mobileBenefit: "Scoped disclosure context",
            badge: null,
          },
          {
            text: "Fast Q&A preparation",
            mobileBenefit: "Fast Q&A preparation",
            badge: "Most Liked",
          },
        ],
      },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    sections: [
      {
        id: 1,
        title:
          "File Section 16 Forms Correctly with Form Creation and EDGAR Submission",
        mobileTitle: "File Section 16 Forms Correctly",
        description:
          "Draft and file Forms 3, 4, and 5 directly from a validated transaction ledger with controlled EDGAR submission to reduce filing and math errors under deadline pressure.",
        mobileDescription:
          "Draft and file Forms 3, 4, and 5 directly from a validated transaction ledger with controlled EDGAR submission.",
        image: "/assets/commentletterexplorer/legal-1.png",
        benefits: [
          {
            text: "Inline form validation",
            mobileBenefit: "Inline form validation",
            badge: null,
          },
          {
            text: "EDGAR submission control",
            mobileBenefit: "EDGAR submission control",
            badge: null,
          },
          {
            text: "Accession tracking",
            mobileBenefit: "Accession tracking",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 2,
        title: "Avoid Missed Form 4 Deadlines with Insider Dashboard",
        mobileTitle: "Avoid Missed Form 4 Deadlines",
        description:
          "Monitor Form 4 risk, drafts in progress, and upcoming ownership events daily to ensure statutory deadlines are met.",
        mobileDescription:
          "Monitor Form 4 risk, drafts in progress, and upcoming ownership events daily.",
        image: "/assets/commentletterexplorer/legal-2.png",
        benefits: [
          {
            text: "Filing risk signals",
            mobileBenefit: "Filing risk signals",
            badge: null,
          },
          {
            text: "Draft status visibility",
            mobileBenefit: "Draft status visibility",
            badge: null,
          },
          {
            text: "Vesting-based alerts",
            mobileBenefit: "Vesting-based alerts",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 3,
        title:
          "Surface Unreported Ownership Events with Unreported Transactions Queue",
        mobileTitle: "Surface Unreported Ownership Events",
        description:
          "Identify and resolve ownership events not yet reflected in SEC filings before they become compliance issues.",
        mobileDescription:
          "Identify and resolve ownership events not yet reflected in SEC filings.",
        image: "/assets/commentletterexplorer/legal-3.png",
        benefits: [
          {
            text: "Unreported event queue",
            mobileBenefit: "Unreported event queue",
            badge: null,
          },
          {
            text: "Reportable classification",
            mobileBenefit: "Reportable classification",
            badge: null,
          },
          {
            text: "Draft promotion",
            mobileBenefit: "Draft promotion",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 4,
        title: "Defend Legal Review Positions with Ask Fina",
        mobileTitle: "Defend Legal Review Positions",
        description:
          "Support disclosure and filing decisions with citeable SEC precedent, guidance, and internal policy references during legal and audit review.",
        mobileDescription:
          "Support disclosure and filing decisions with citeable SEC precedent and guidance.",
        image: "/assets/commentletterexplorer/legal-4.png",
        benefits: [
          {
            text: "SEC-backed citations",
            mobileBenefit: "SEC-backed citations",
            badge: null,
          },
          {
            text: "Source inspection",
            mobileBenefit: "Source inspection",
            badge: null,
          },
          {
            text: "Policy comparison",
            mobileBenefit: "Policy comparison",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 5,
        title: "Anticipate SEC Enforcement Focus with Comment Letter Explorer",
        mobileTitle: "Anticipate SEC Enforcement Focus",
        description:
          "Analyze historical and recent SEC comment letters to understand enforcement trends and pressure-test disclosures proactively.",
        mobileDescription:
          "Analyze historical and recent SEC comment letters to understand enforcement trends.",
        image: "/assets/commentletterexplorer/legal-5.png",
        benefits: [
          {
            text: "Enforcement pattern analysis",
            mobileBenefit: "Enforcement pattern analysis",
            badge: null,
          },
          {
            text: "Full comment threads",
            mobileBenefit: "Full comment threads",
            badge: null,
          },
          {
            text: "Risk-focused reporting",
            mobileBenefit: "Risk-focused reporting",
            badge: "Most Liked",
          },
        ],
      },
    ],
  },
  {
    id: "technical-accounting",
    label: "Technical Accounting",
    sections: [
      {
        id: 1,
        title: "Support Accounting Judgments with Ask Fina",
        mobileTitle: "Support Accounting Judgments",
        description:
          "Research authoritative guidance, peer filings, and internal accounting memos in one place with inspectable citations to support technical conclusions and policy decisions.",
        mobileDescription:
          "Research authoritative guidance, peer filings, and internal accounting memos in one place.",
        image: "/assets/commentletterexplorer/technical-accounting-1.png",
        benefits: [
          {
            text: "FASB-linked citations",
            mobileBenefit: "FASB-linked citations",
            badge: null,
          },
          {
            text: "Peer filing precedent",
            mobileBenefit: "Peer filing precedent",
            badge: null,
          },
          {
            text: "Source inspection",
            mobileBenefit: "Source inspection",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 2,
        title: "Ensure Disclosure Completeness with Checklist Benchmarking",
        mobileTitle: "Ensure Disclosure Completeness",
        description:
          "Review disclosures against FASB-aligned checklists mapped to evidence in your filing and peer filings to identify gaps early.",
        mobileDescription:
          "Review disclosures against FASB-aligned checklists mapped to evidence in your filing.",
        image: "/assets/commentletterexplorer/technical-accounting-2.png",
        benefits: [
          {
            text: "FASB-aligned checklists",
            mobileBenefit: "FASB-aligned checklists",
            badge: null,
          },
          {
            text: "Evidence-linked items",
            mobileBenefit: "Evidence-linked items",
            badge: null,
          },
          {
            text: "Gap identification",
            mobileBenefit: "Gap identification",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 3,
        title: "Analyze Peer Accounting Treatment with AI Grid Reports",
        mobileTitle: "Analyze Peer Accounting Treatment",
        description:
          "Compare how peers disclose complex accounting topics across periods using structured grids with verbatim excerpts or AI summaries.",
        mobileDescription:
          "Compare how peers disclose complex accounting topics across periods.",
        image: "/assets/commentletterexplorer/technical-accounting-3.png",
        benefits: [
          {
            text: "Consistent review lens",
            mobileBenefit: "Consistent review lens",
            badge: null,
          },
          {
            text: "Verbatim disclosure excerpts",
            mobileBenefit: "Verbatim disclosure excerpts",
            badge: null,
          },
          {
            text: "Cross-period analysis",
            mobileBenefit: "Cross-period analysis",
            badge: "Most Liked",
          },
        ],
      },
      {
        id: 4,
        title: "Reduce Wording Risk with Disclosure Comparison",
        mobileTitle: "Reduce Wording Risk",
        description:
          "Validate disclosure wording and completeness by comparing exact peer language side by side before finalizing disclosures.",
        mobileDescription:
          "Validate disclosure wording and completeness by comparing exact peer language.",
        image: "/assets/commentletterexplorer/technical-accounting-4.png",
        benefits: [
          {
            text: "Exact language comparison",
            mobileBenefit: "Exact language comparison",
            badge: null,
          },
          {
            text: "Completeness validation",
            mobileBenefit: "Completeness validation",
            badge: null,
          },
          {
            text: "Faster review",
            mobileBenefit: "Faster review",
            badge: "Most Liked",
          },
        ],
      },
    ],
  },
];

export default function CommentLetterExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [mobileActiveSection, setMobileActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTab = navigationTabs[activeTab];
  const sections = currentTab.sections;

  // Track scroll progress within the container (desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active section based on scroll progress (desktop)
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const adjustedProgress = Math.max(0, Math.min(1, progress));
    const easedProgress =
      adjustedProgress * adjustedProgress * (3 - 2 * adjustedProgress);
    const sectionIndex = Math.min(
      Math.floor(easedProgress * sections.length),
      sections.length - 1,
    );
    if (sectionIndex !== activeSection) {
      setActiveSection(sectionIndex);
    }
  });

  // Auto-advance for mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileActiveSection((prev) => (prev + 1) % sections.length);
    }, MOBILE_SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [mobileActiveSection, sections.length]);

  // Handle tab change
  const handleTabChange = useCallback((idx: number) => {
    setActiveTab(idx);
    setActiveSection(0);
    setMobileActiveSection(0);
  }, []);

  const mobileSection = sections[mobileActiveSection];

  return (
    <section id="solutions">
      {/* Mobile Layout - No scroll-driven behavior */}
      <div className="lg:hidden w-full bg-white py-6 sm:py-8 md:py-10">
        <div className="px-4 sm:px-6 md:px-8 max-w-[600px] md:max-w-[700px] mx-auto flex flex-col gap-5 sm:gap-6 md:gap-8">
          {/* Mobile Horizontal Tabs - Hidden for now */}
          {/* <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            {navigationTabs.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(idx)}
                  className={cn(
                    "px-[19px] py-2 rounded-full text-sm font-articulat whitespace-nowrap transition-all flex-shrink-0",
                    isActive
                      ? "bg-[#D6F5EC] text-[#134E3D] font-medium shadow-[inset_0px_0px_8px_rgba(0,135,67,0.09)] border border-[#21886B]"
                      : "bg-white text-[#0E0F10] font-normal border border-[#D9DBDD]",
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div> */}

          {/* Mobile Image Mockup */}
          <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${activeTab}-${mobileActiveSection}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <MobileMockup image={mobileSection.image} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-content-${activeTab}-${mobileActiveSection}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Section Number */}
              <span className="text-[#0E0F10] text-xs font-medium font-articulat">
                0{mobileSection.id}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-[#0E0F10] text-[24px] sm:text-[26px] md:text-[28px] font-medium font-articulat leading-tight">
                  {mobileSection.mobileTitle || mobileSection.title}
                </h3>
                <p className="text-[#5E6469] text-base sm:text-lg font-normal font-articulat leading-relaxed">
                  {mobileSection.mobileDescription || mobileSection.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {mobileSection.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    {/* Checkbox Icon */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0E0F10] rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
                    </div>
                    <span className="text-[#0E0F10] text-base sm:text-lg font-medium font-articulat">
                      {benefit.mobileBenefit || benefit.text}
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="flex-1 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#29AB87] flex items-center justify-center gap-1">
                  <span className="text-[#269C7B] text-base sm:text-lg font-medium font-articulat">
                    Try Now
                  </span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#29AB87]" />
                </button>
                <button className="flex-1 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#29AB87] rounded-lg">
                  <span className="text-[#F4FBF8] text-base sm:text-lg font-medium font-articulat">
                    Book a Demo
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Layout - Scroll-driven sticky behavior */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full bg-white"
        style={{ height: `${sections.length * 60}vh` }}
      >
        {/* Sticky content that stays in view - offset for header */}
        <div className="sticky top-[75px] h-[calc(100vh-75px)] overflow-hidden flex items-center">
          <div className="w-full max-h-[800px] h-full max-w-[1440px] mx-auto flex flex-row items-stretch">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col justify-center items-start gap-12 pl-6 lg:pl-10 py-8">
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

                {/* Active Section Content */}
                <div className="flex-1 max-w-[450px] lg:max-w-[545px] flex flex-col justify-start items-start gap-6 lg:gap-9">
                  <AnimatePresence mode="wait">
                    <SectionContent
                      key={`${activeTab}-${activeSection}`}
                      section={sections[activeSection]}
                    />
                  </AnimatePresence>

                  {/* CTA Buttons */}
                  <div className="flex justify-start items-center gap-4">
                    <button className="px-6 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                      <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                        Request Demo
                      </span>
                    </button>
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

// Mobile Mockup Component with browser chrome
function MobileMockup({ image }: { image: string }) {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-lg overflow-hidden">
      {/* Browser Window */}
      <div className="absolute left-4 top-4 right-4 bottom-4 bg-gradient-to-b from-[#0B0B0B] to-[#181818] rounded-xl shadow-2xl overflow-hidden border border-white/5">
        {/* Browser Chrome */}
        <div className="px-3 py-2 flex items-center gap-2 bg-gradient-to-b from-white/10 to-transparent">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F9837B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5BD4F] opacity-45" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#68CC58] opacity-85" />
          </div>
        </div>
        {/* Content */}
        <div className="relative w-full h-[calc(100%-32px)]">
          <Image
            src={image}
            alt="Feature preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
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
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
