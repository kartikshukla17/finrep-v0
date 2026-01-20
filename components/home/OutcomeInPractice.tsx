import Image from "next/image";
import { ArrowDown, SquareArrowOutUpRight } from "lucide-react";

export default function OutcomeInPractice() {
    return (
        <div className="relative w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 flex flex-col justify-start items-center gap-12">
                {/* Top Section - Title and CTA */}
                <div className="w-full max-w-[462px] flex flex-col justify-center items-center gap-6 text-center">
                    <div className="w-full text-[#0E0F10] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                        Finrep's Outcome In Practice
                    </div>
                    <div className="w-full md:w-auto px-6 py-2 rounded-lg border border-[#ECEDEE] flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="text-[#269C7B] text-base font-medium font-articulat text-center">
                            Book a Demo to See Finrep's ROI in Your Team
                        </div>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="w-full max-w-[804px] flex flex-col md:flex-row justify-start items-center gap-8 md:gap-12">
                    {[1, 2, 3].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-full md:flex-1 flex flex-col justify-start items-center md:items-start gap-4 relative"
                        >
                            <div className="text-[#0E0F10] text-5xl md:text-[64px] font-normal font-articulat leading-tight md:leading-[89.60px]">
                                15K+
                            </div>
                            <div className="text-[#0E0F10] text-lg md:text-xl font-normal font-articulat leading-7 text-center md:text-left">
                                Disclosures Indexed
                            </div>
                            {/* Separator - Visible only on desktop between items */}
                            {idx < 2 && <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-[100px] bg-[#ECEDEE]"></div>}
                            {/* Separator - Visible on mobile below items except last */}
                            {idx < 2 && <div className="md:hidden w-[100px] h-px bg-[#ECEDEE] mt-4"></div>}
                        </div>
                    ))}
                </div>

                {/* Outcome Cards */}
                <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-4 lg:gap-[13px]">
                    {/* Prep time Card */}
                    <div className="w-full lg:flex-1 h-auto lg:h-[379px] p-6 bg-[#134E3D] rounded-lg flex flex-col justify-between items-start">
                        <div className="w-full text-white text-lg md:text-xl font-normal font-articulat leading-7">
                            Disclosure comparison & EDGAR search cut month‑end prep from 10
                            days to 3–4 days.
                        </div>
                        <div className="flex flex-col justify-end items-start gap-4 lg:gap-6 mt-8 lg:mt-0">
                            <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                                Prep time
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden shrink-0">
                                    <ArrowDown className="w-full h-full text-[#ADEBDA]" />
                                </div>
                                <div className="text-[#F4FBF8] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                                    60–70%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review Loops Card */}
                    <div className="w-full lg:flex-1 h-auto lg:h-[379px] p-6 bg-[#134E3D] rounded-lg flex flex-col justify-between items-start">
                        <div className="w-full text-white text-lg md:text-xl font-normal font-articulat leading-7">
                            Checklist benchmarking and AI summaries reduced back‑and‑forth
                            with auditors.
                        </div>
                        <div className="flex flex-col justify-end items-start gap-4 lg:gap-6 mt-8 lg:mt-0">
                            <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                                Review Loops
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden shrink-0">
                                    <ArrowDown className="w-full h-full text-[#ADEBDA]" />
                                </div>
                                <div className="text-[#F4FBF8] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                                    60–70%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEC Pushbacks Card */}
                    <div className="w-full lg:flex-1 h-auto lg:h-[379px] p-6 bg-[#134E3D] rounded-lg flex flex-col justify-between items-start">
                        <div className="w-full text-white text-lg md:text-xl font-normal font-articulat leading-7">
                            Comment Letters Explorer highlights focus areas that previously
                            drew staff comments.
                        </div>
                        <div className="flex flex-col justify-end items-start gap-4 lg:gap-6 mt-8 lg:mt-0">
                            <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                                SEC Pushbacks
                            </div>
                            <div className="text-white text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                                Fewer Pushbacks
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="w-full md:w-auto px-6 py-4 bg-[#ADEBDA] rounded-[130px] border border-[#48E3B9] flex justify-center md:justify-start items-center gap-2 cursor-pointer hover:bg-[#9bddcd] transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                        <Image
                            src="/assets/images/image.png"
                            alt="Icon"
                            width={48}
                            height={48}
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div className="text-center text-[#134E3D] text-sm md:text-base font-medium font-articulat leading-[22.40px]">
                        See our latest benchmarking results
                    </div>
                    <div className="w-6 h-6 relative overflow-hidden shrink-0">
                        <SquareArrowOutUpRight className="w-full h-full text-[#134E3D]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
