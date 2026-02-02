"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Custom icon components matching the design
const DocumentIcon = ({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) => (
  <svg
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5125 18.375H13.1542C13.4021 18.375 13.6099 18.2906 13.7778 18.1218C13.9454 17.9533 14.0292 17.7442 14.0292 17.4948C14.0292 17.2455 13.9454 17.0382 13.7778 16.8729C13.6099 16.7076 13.4021 16.625 13.1542 16.625H5.5125C5.26458 16.625 5.05682 16.7094 4.88921 16.8782C4.7214 17.0468 4.6375 17.2558 4.6375 17.5053C4.6375 17.7545 4.7214 17.9618 4.88921 18.1271C5.05682 18.2924 5.26458 18.375 5.5125 18.375ZM5.5125 13.4167H13.1542C13.4021 13.4167 13.6099 13.3323 13.7778 13.1635C13.9454 12.9949 14.0292 12.7859 14.0292 12.5364C14.0292 12.2871 13.9454 12.0799 13.7778 11.9146C13.6099 11.7493 13.4021 11.6667 13.1542 11.6667H5.5125C5.26458 11.6667 5.05682 11.7511 4.88921 11.9198C4.7214 12.0884 4.6375 12.2974 4.6375 12.5469C4.6375 12.7962 4.7214 13.0035 4.88921 13.1688C5.05682 13.334 5.26458 13.4167 5.5125 13.4167ZM1.75 23.3333C1.28333 23.3333 0.875 23.1583 0.525 22.8083C0.175 22.4583 0 22.05 0 21.5833V1.75C0 1.28333 0.175 0.875 0.525 0.525C0.875 0.175 1.28333 0 1.75 0H11.55C11.7919 0 12.0225 0.0486111 12.2418 0.145833C12.4612 0.243056 12.6486 0.369444 12.8042 0.525L18.1417 5.8625C18.2972 6.01806 18.4236 6.2055 18.5208 6.42483C18.6181 6.64417 18.6667 6.87478 18.6667 7.11667V21.5833C18.6667 22.05 18.4917 22.4583 18.1417 22.8083C17.7917 23.1583 17.3833 23.3333 16.9167 23.3333H1.75ZM11.4042 6.3C11.4042 6.54792 11.4881 6.75568 11.6559 6.92329C11.8235 7.0911 12.0312 7.175 12.2792 7.175H16.9167L11.4042 1.75V6.3Z"
      fill={isActive ? "white" : "#29AB87"}
    />
  </svg>
);

const BookIcon = ({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) => (
  <svg
    width="19"
    height="25"
    viewBox="0 0 19 25"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.20833 24.3393C2.33333 24.3393 1.57986 24.0512 0.947917 23.4748C0.315972 22.8987 0 22.1855 0 21.3352V4.88516C0 4.17408 0.215055 3.53795 0.645167 2.97679C1.07528 2.41543 1.638 2.05989 2.33333 1.91016L11.3167 0.0434962C11.8611 -0.0731705 12.3472 0.0448578 12.775 0.39758C13.2028 0.750302 13.4167 1.20589 13.4167 1.76433V16.2602C13.4167 16.6716 13.2903 17.037 13.0375 17.3562C12.7847 17.6755 12.4542 17.8838 12.0458 17.981L2.91667 19.9352C2.58339 20.0069 2.30562 20.1774 2.08337 20.4467C1.86112 20.7159 1.75 21.012 1.75 21.3352C1.75 21.7046 1.89583 22.006 2.1875 22.2393C2.47917 22.4727 2.81944 22.5893 3.20833 22.5893H16.9167V4.21433C16.9167 3.96641 17.0011 3.75855 17.1698 3.59075C17.3384 3.42313 17.5474 3.33933 17.7969 3.33933C18.0462 3.33933 18.2535 3.42313 18.4188 3.59075C18.584 3.75855 18.6667 3.96641 18.6667 4.21433V22.5893C18.6667 23.0706 18.4954 23.4825 18.1528 23.8251C17.8099 24.1679 17.3979 24.3393 16.9167 24.3393H3.20833ZM4.55467 17.8381C4.75747 17.7959 4.92401 17.6974 5.05429 17.5426C5.18476 17.3876 5.25 17.2032 5.25 16.9893V4.156C5.25 3.88105 5.14306 3.65676 4.92917 3.48312C4.71528 3.30948 4.47067 3.25086 4.19533 3.30725C3.99253 3.34944 3.82599 3.44793 3.69571 3.60271C3.56524 3.75768 3.5 3.94211 3.5 4.156V16.9893C3.5 17.2643 3.60694 17.4886 3.82083 17.6622C4.03472 17.8358 4.27933 17.8945 4.55467 17.8381Z"
      fill={isActive ? "white" : "#29AB87"}
    />
  </svg>
);

const ChartIcon = ({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.05758 16.8C0.760861 16.8 0.510417 16.6994 0.30625 16.4981C0.102083 16.2969 0 16.0475 0 15.75V6.64271C0 6.3559 0.100334 6.11042 0.301 5.90625C0.501861 5.70208 0.750653 5.6 1.04738 5.6H3.14242C3.43914 5.6 3.68958 5.70062 3.89375 5.90187C4.09792 6.10312 4.2 6.3525 4.2 6.65V15.7573C4.2 16.0441 4.09967 16.2896 3.899 16.4937C3.69814 16.6979 3.44935 16.8 3.15262 16.8H1.05758ZM1.05758 4.2C0.760861 4.2 0.510417 4.09967 0.30625 3.899C0.102083 3.69814 0 3.44935 0 3.15263V1.05758C0 0.760861 0.100334 0.510417 0.301 0.30625C0.501861 0.102083 0.750653 0 1.04738 0H3.14242C3.43914 0 3.68958 0.100334 3.89375 0.301C4.09792 0.501861 4.2 0.750652 4.2 1.04737V3.14242C4.2 3.43914 4.09967 3.68958 3.899 3.89375C3.69814 4.09792 3.44935 4.2 3.15262 4.2H1.05758ZM7.35758 16.8C7.06086 16.8 6.81042 16.6995 6.60625 16.4984C6.40208 16.2974 6.3 16.0483 6.3 15.7512V9.45817C6.3 9.16106 6.40033 8.91042 6.601 8.70625C6.80186 8.50208 7.05065 8.4 7.34737 8.4H9.44242C9.73914 8.4 9.98958 8.50053 10.1937 8.70158C10.3979 8.90264 10.5 9.15172 10.5 9.44883V15.7418C10.5 16.0389 10.3997 16.2896 10.199 16.4937C9.99814 16.6979 9.74935 16.8 9.45263 16.8H7.35758ZM7.35758 7C7.06086 7 6.81042 6.89967 6.60625 6.699C6.40208 6.49814 6.3 6.24935 6.3 5.95263V3.85758C6.3 3.56086 6.40033 3.31042 6.601 3.10625C6.80186 2.90208 7.05065 2.8 7.34737 2.8H9.44242C9.73914 2.8 9.98958 2.90033 10.1937 3.101C10.3979 3.30186 10.5 3.55065 10.5 3.84737V5.94242C10.5 6.23914 10.3997 6.48958 10.199 6.69375C9.99814 6.89792 9.74935 7 9.45263 7H7.35758ZM13.6576 16.8C13.3609 16.8 13.1104 16.6994 12.9062 16.4981C12.7021 16.2969 12.6 16.0475 12.6 15.75V12.25C12.6 11.9525 12.7003 11.7031 12.901 11.5019C13.1019 11.3006 13.3507 11.2 13.6474 11.2H15.7424C16.0391 11.2 16.2896 11.3006 16.4937 11.5019C16.6979 11.7031 16.8 11.9525 16.8 12.25V15.75C16.8 16.0475 16.6997 16.2969 16.499 16.4981C16.2981 16.6994 16.0493 16.8 15.7526 16.8H13.6576ZM13.6576 9.8C13.3609 9.8 13.1104 9.69967 12.9062 9.499C12.7021 9.29814 12.6 9.04935 12.6 8.75262V6.65758C12.6 6.36086 12.7003 6.11042 12.901 5.90625C13.1019 5.70208 13.3507 5.6 13.6474 5.6H15.7424C16.0391 5.6 16.2896 5.70033 16.4937 5.901C16.6979 6.10186 16.8 6.35065 16.8 6.64737V8.74242C16.8 9.03914 16.6997 9.28958 16.499 9.49375C16.2981 9.69792 16.0493 9.8 15.7526 9.8H13.6576Z"
      fill={isActive ? "white" : "#29AB87"}
    />
  </svg>
);

const BuildingIcon = ({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.85 18.6958V10.5583C3.85 10.3104 3.93439 10.1026 4.10317 9.93475C4.27175 9.76714 4.48078 9.68333 4.73025 9.68333C4.97953 9.68333 5.18681 9.76714 5.35208 9.93475C5.51736 10.1026 5.6 10.3104 5.6 10.5583V18.6958C5.6 18.9437 5.51561 19.1515 5.34683 19.3191C5.17825 19.4869 4.96922 19.5708 4.71975 19.5708C4.47047 19.5708 4.26319 19.4869 4.09792 19.3191C3.93264 19.1515 3.85 18.9437 3.85 18.6958ZM10.9083 18.6958V10.5583C10.9083 10.3104 10.9927 10.1026 11.1615 9.93475C11.3301 9.76714 11.5391 9.68333 11.7886 9.68333C12.0379 9.68333 12.2451 9.76714 12.4104 9.93475C12.5757 10.1026 12.6583 10.3104 12.6583 10.5583V18.6958C12.6583 18.9437 12.5739 19.1515 12.4052 19.3191C12.2366 19.4869 12.0276 19.5708 11.7781 19.5708C11.5288 19.5708 11.3215 19.4869 11.1563 19.3191C10.991 19.1515 10.9083 18.9437 10.9083 18.6958ZM0.875 23.0708C0.627083 23.0708 0.419319 22.9864 0.251708 22.8177C0.0839027 22.6491 0 22.4401 0 22.1906C0 21.9413 0.0839027 21.734 0.251708 21.5688C0.419319 21.4035 0.627083 21.3208 0.875 21.3208H22.4583C22.7063 21.3208 22.9141 21.4052 23.0819 21.574C23.2495 21.7426 23.3333 21.9516 23.3333 22.2011C23.3333 22.4504 23.2495 22.6576 23.0819 22.8229C22.9141 22.9882 22.7063 23.0708 22.4583 23.0708H0.875ZM17.7333 18.6958V10.5583C17.7333 10.3104 17.8177 10.1026 17.9865 9.93475C18.1551 9.76714 18.3641 9.68333 18.6136 9.68333C18.8629 9.68333 19.0701 9.76714 19.2354 9.93475C19.4007 10.1026 19.4833 10.3104 19.4833 10.5583V18.6958C19.4833 18.9437 19.3989 19.1515 19.2302 19.3191C19.0616 19.4869 18.8526 19.5708 18.6031 19.5708C18.3538 19.5708 18.1465 19.4869 17.9813 19.3191C17.816 19.1515 17.7333 18.9437 17.7333 18.6958ZM22.575 7.93333H0.670833C0.484556 7.93333 0.326181 7.8681 0.195708 7.73762C0.0652361 7.60715 0 7.44878 0 7.2625V6.76667C0 6.65 0.0340278 6.53819 0.102083 6.43125C0.170139 6.32431 0.252778 6.24167 0.35 6.18333L10.7917 0.233333C11.0672 0.0777778 11.3589 0 11.6667 0C11.9745 0 12.2661 0.0777778 12.5417 0.233333L22.9542 6.15417C23.0708 6.23194 23.1632 6.32917 23.2313 6.44583C23.2993 6.5625 23.3333 6.69375 23.3333 6.83958V7.13796C23.3333 7.36332 23.2607 7.55222 23.1155 7.70467C22.97 7.85711 22.7899 7.93333 22.575 7.93333Z"
      fill={isActive ? "white" : "#29AB87"}
    />
  </svg>
);

// Map icon names to components
const iconComponents = {
  document: DocumentIcon,
  book: BookIcon,
  chart: ChartIcon,
  building: BuildingIcon,
};

// Duration for each slide in milliseconds
const SLIDE_DURATION = 5000;

// --- Features Data ---
const features = [
  {
    id: "sec-reporting",
    title: "For SEC Reporting",
    shortDescription: "Manual cross-checks and version control nightmares",
    description:
      "SEC filings combine roll forwards, new guidance, peer alignment, and reviewer feedback under tight deadlines. Fragmented research and drafting create rework and late stage risk.",
    cta: "See how Finrep makes SEC easy",
    iconKey: "document" as const,
    statValue: "95 hours /wk",
    statLabel: "Saved with Finrep",
    rightHeading: "Faster roll forwards with fewer reviewer escalations",
  },
  {
    id: "technical-accounting",
    title: "For Technical Accounting",
    shortDescription: "Complex guidance interpretation challenges",
    description:
      "Accounting decisions require interpreting evolving guidance and defending conclusions under audit scrutiny. Scattered research across handbooks and filings slows resolution.",
    cta: "See Technical Accounting workflows",
    iconKey: "book" as const,
    statValue: "60% faster",
    statLabel: "Research completion",
    rightHeading: "More defensible accounting disclosures",
  },
  {
    id: "investor-relations",
    title: "For Investor Relations",
    shortDescription: "Last minute coordination and peer analysis",
    description:
      "Investor messaging must align with disclosures while reflecting peer and market context. Manual peer analysis and last minute coordination slow preparation.",
    cta: "See IR workflows",
    ctaDesktop: "See IR workflows",
    iconKey: "chart" as const,
    statValue: "3x faster",
    statLabel: "Earnings prep",
    rightHeading: "Sharper & more consistent earnings narratives",
  },
  {
    id: "corporate-counsel",
    title: "For Corporate Counsel",
    shortDescription: "Deadline pressure and filing status tracking",
    description:
      "Insider reporting carries strict deadlines and high visibility. Manual tracking of ownership changes and filing status increases compliance risk.",
    cta: "See Legal workflows",
    ctaDesktop: "See Legal workflows",
    iconKey: "building" as const,
    statValue: "Zero",
    statLabel: "Missed deadlines",
    rightHeading: "Clearer oversight with fewer compliance gaps",
  },
];

export default function BuiltForCFO() {
  const [activeTab, setActiveTab] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Auto-advance to next slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
      setAnimationKey((k) => k + 1);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeTab, animationKey]);

  // Handle manual tab change
  const handleTabClick = useCallback(
    (index: number) => {
      if (index === activeTab) return;
      setActiveTab(index);
      setAnimationKey((k) => k + 1);
    },
    [activeTab],
  );

  return (
    <div
      id="white-section-start"
      className="w-full bg-white pt-[150px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Mobile Header - Centered & Stacked */}
        <div className="lg:hidden flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          <h2 className="text-[#0E0F10] text-[28px] sm:text-[30px] md:text-[32px] font-medium font-articulat leading-tight text-center">
            Built for the
          </h2>
          <div className="px-6 py-3 rounded-lg border border-[#D9DBDD]">
            <span className="text-[#FFAF42] text-3xl sm:text-4xl font-medium font-bricolage leading-tight">
              Office of the CFO
            </span>
          </div>
          <p className="text-[#5E6469] text-base sm:text-lg font-normal font-articulat leading-relaxed text-center max-w-[372px] sm:max-w-[500px] md:max-w-[600px]">
            <span className="font-semibold">CFO teams need a system</span> - not
            just software - that ensures consistency, traceability, and control
            across every disclosure touchpoint.
          </p>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex w-full flex-col gap-12">
          <div className="flex items-center gap-4">
            <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-[50.4px]">
              Built for the
            </h2>
            <div className="px-6 py-3 rounded-lg border border-[#D9DBDD]">
              <span className="text-[#FFAF42] text-[36px] font-medium font-bricolage leading-[50.4px]">
                office of the CFO
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-12 items-center">
            <div className="w-[712px]">
              <p className="text-[#5E6469] text-xl font-articulat leading-7">
                <span className="font-semibold">CFO teams need a system</span>
                <span className="font-normal">
                  {" "}
                  - not just software - that ensures consistency, traceability,
                  and control across every disclosure workflow
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Accordion Style with layout containment */}
        <div
          className="lg:hidden flex flex-col w-full"
          style={{ contain: "layout" }}
        >
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.iconKey];
            const isActive = activeTab === index;

            return (
              <div
                key={feature.id}
                className={cn(
                  "border-b transition-colors duration-300",
                  isActive ? "border-[#269C7B]" : "border-[#D9DBDD]",
                )}
              >
                <button
                  onClick={() => handleTabClick(index)}
                  className="w-full py-4 flex items-center gap-4 text-left"
                >
                  <motion.div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                    )}
                    animate={{
                      backgroundColor: isActive ? "#29AB87" : "#E8F5F1",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <IconComponent className="w-5 h-5" isActive={isActive} />
                  </motion.div>
                  <span className="text-xl font-medium font-articulat leading-8 tracking-[0.4px] text-[#0E0F10]">
                    {feature.title}
                  </span>
                </button>

                {/* Expanded Content with smooth slide-in animation */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.05,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="pb-4 flex flex-col gap-4"
                      >
                        <p className="text-[#3F4346] text-base font-normal font-articulat leading-[25.6px] tracking-[0.32px]">
                          {feature.description}
                        </p>

                        {/* Mobile Card with slide-up animation */}
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="w-full rounded-[20px] p-6 flex flex-col relative overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(297deg, #29AB87 0%, rgba(0, 0, 0, 0) 100%), #0D352A",
                            boxShadow: "inset 0px 0px 34px rgba(0, 0, 0, 0.08)",
                          }}
                        >
                          <div className="relative z-10 flex flex-col gap-2">
                            <span className="text-[#9FA4A9] text-sm font-medium font-articulat leading-[22.4px] tracking-[0.28px]">
                              With Finrep
                            </span>
                            <h3 className="text-white text-xl font-medium font-articulat leading-[28px] tracking-[0.4px]">
                              {feature.rightHeading}
                            </h3>
                          </div>

                          <div className="relative z-10 flex items-center justify-center mt-4">
                            <Image
                              src="/assets/images/BuiltForCFO.webp"
                              alt="Finrep Features"
                              width={400}
                              height={280}
                              className="object-contain w-full"
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout - min-height prevents layout shift when accordion changes */}
        <div className="hidden lg:flex w-full min-h-[620px] flex-row gap-7 items-start">
          {/* Left Column: Accordion items with fixed min-height to prevent jitter */}
          <div className="w-1/2 flex flex-col min-h-[580px]">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.id}
                feature={feature}
                isActive={activeTab === index}
                animationKey={animationKey}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>

          {/* Right Column: Card with fixed height */}
          <div className="w-1/2 h-[580px]">
            <RightSideCard activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  feature: {
    id: string;
    title: string;
    description: string;
    iconKey: keyof typeof iconComponents;
    rightHeading: string;
  };
  isActive: boolean;
  animationKey: number;
  onClick: () => void;
}

function FeatureItem({
  feature,
  isActive,
  animationKey,
  onClick,
}: FeatureItemProps) {
  const IconComponent = iconComponents[feature.iconKey];

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={cn(
        "relative text-left w-full cursor-pointer select-none border-b border-[#D9DBDD]",
        "transition-opacity duration-300",
        isActive ? "opacity-100" : "opacity-50 hover:opacity-70",
      )}
    >
      {/* Trigger section - constant height */}
      <div className="py-5 flex items-center gap-4">
        {/* Icon Circle */}
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
            isActive
              ? "bg-[#29AB87] shadow-[inset_0px_-8px_16px_rgba(0,0,0,0.25)]"
              : "bg-[#E8F5F1]",
          )}
        >
          <IconComponent className="w-6 h-6" isActive={isActive} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium font-articulat text-[#0E0F10] leading-8 tracking-[0.4px]">
          {feature.title}
        </h3>
      </div>

      {/* Expanded Content - smooth slide-in animation */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="pb-5 pl-16"
            >
              <p className="text-[#3F4346] text-base font-normal leading-[25.6px] tracking-[0.32px]">
                {feature.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
        {isActive && (
          <motion.div
            key={`progress-${feature.id}-${animationKey}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            className="h-full bg-[#269C7B]"
          />
        )}
      </div>
    </div>
  );
}

// --- Right Side Component ---
function RightSideCard({ activeTab }: { activeTab: number }) {
  const activeFeature = features[activeTab];

  // Determine slide direction based on tab change
  const slideVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <div
      className="w-full h-full rounded-[20px] p-10 flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(297deg, #29AB87 0%, rgba(0, 0, 0, 0) 100%), #0D352A",
        boxShadow: "inset 0px 0px 34px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* With Finrep Label */}
        <span className="text-[#9FA4A9] text-base font-medium font-articulat leading-[25.6px] tracking-[0.32px]">
          With Finrep
        </span>

        {/* Dynamic Heading with slide-in animation */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeFeature.id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="text-white text-[36px] font-medium font-articulat leading-[43.2px] tracking-[0.72px]"
          >
            {activeFeature.rightHeading}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* BuiltForCFO Image with subtle animation */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-[60px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full"
          >
            <Image
              src="/assets/images/BuiltForCFO.webp"
              alt="Finrep Features"
              width={586}
              height={400}
              className="object-contain w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
