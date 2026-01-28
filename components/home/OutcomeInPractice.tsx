import { ArrowDown, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

// Stats data
const stats = [
  { value: "15K+", label: "Disclosures Indexed" },
  { value: "15K+", label: "Disclosures Indexed" },
  { value: "15K+", label: "Disclosures Indexed" },
];

// Outcome cards data
const outcomeCards = [
  {
    description:
      "Disclosure comparison & EDGAR search cut month‑end prep from 10 days to 3–4 days.",
    title: "Prep time",
    stat: "60–70%",
    hasArrow: true,
  },
  {
    description:
      "Checklist benchmarking and AI summaries reduced back‑and‑forth with auditors.",
    title: "Review Loops",
    stat: "60–70%",
    hasArrow: true,
  },
  {
    description:
      "Comment Letters Explorer highlights focus areas that previously drew staff comments.",
    title: "SEC Pushbacks",
    stat: "Fewer Pushbacks",
    hasArrow: false,
  },
];

export default function OutcomeInPractice() {
  return (
    <div className="relative w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8 lg:pb-0 flex flex-col justify-start items-center gap-6 lg:gap-12">
        {/* Top Section - Title and CTA */}
        <div className="w-full flex flex-col justify-center items-center gap-4 lg:gap-6 text-center">
          <h2 className="text-[#0E0F10] text-[28px] lg:text-[36px] font-medium font-articulat leading-[39.20px] lg:leading-[50.40px] whitespace-nowrap">
            Finrep&apos;s Outcome In Practice
          </h2>
          <button className="px-6 py-3 rounded-lg border border-[#ECEDEE] flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[#269C7B] text-base font-medium font-articulat text-center">
              Request Access to See Finrep&apos;s ROI in Your Team
            </span>
          </button>
        </div>

        {/* Outcome Cards */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-3 lg:gap-[13px]">
          {outcomeCards.map((card, idx) => (
            <div
              key={idx}
              className="w-full lg:flex-1 h-[249px] lg:h-[379px] p-6 bg-[#134E3D] rounded-lg flex flex-col justify-between items-start"
            >
              <p className="w-full text-white text-base lg:text-xl font-normal font-articulat leading-[22.40px] lg:leading-7">
                {card.description}
              </p>
              <div className="flex flex-col justify-end items-start gap-6">
                <h3 className="text-white text-xl lg:text-2xl font-medium font-articulat leading-7 lg:leading-[33.60px]">
                  {card.title}
                </h3>
                <div className="flex justify-start items-center gap-2">
                  {card.hasArrow && (
                    <div className="w-9 h-9 lg:w-12 lg:h-12 relative overflow-hidden shrink-0">
                      <ArrowDown className="w-full h-full text-[#ADEBDA]" />
                    </div>
                  )}
                  <span className="text-[#F4FBF8] text-[28px] lg:text-[36px] font-medium font-articulat leading-[39.20px] lg:leading-[50.40px]">
                    {card.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <button className="px-6 py-4 bg-[#ADEBDA] rounded-[130px] border border-[#48E3B9] inline-flex justify-start items-center gap-2 cursor-pointer hover:bg-[#9bddcd] transition-colors">
          <Image
            src="/assets/images/Rectangle 12.png"
            alt="Icon"
            width={36}
            height={36}
            className="w-9 h-9 lg:w-12 lg:h-12 object-contain rounded-full shrink-0"
          />
          <span className="text-center text-[#134E3D] text-sm lg:text-base font-medium font-articulat leading-[19.60px] lg:leading-[22.40px] whitespace-nowrap">
            See our latest benchmarking results
          </span>
          <SquareArrowOutUpRight className="w-6 h-6 text-[#134E3D] shrink-0" />
        </button>
      </div>
    </div>
  );
}
