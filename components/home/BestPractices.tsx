import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BestPractices() {
    return (
        <div className="relative w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 flex flex-col justify-start items-center gap-12">
                {/* Header Section */}
                <div className="w-full flex flex-col justify-start items-start gap-8 md:gap-12">
                    <div className="text-center md:text-left text-[#0E0F10] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                        Best Practices & Insights
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="w-full md:max-w-[501px] text-[#5E6469] text-lg md:text-xl font-normal font-articulat leading-7">
                            Expert insights on financial disclosure, compliance, and the
                            future of CFO operations
                        </div>
                        <div className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="text-[#29AB87] text-base font-medium font-articulat leading-[25.60px] tracking-[0.32px]">
                                View All Articles
                            </div>
                            <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-[#29AB87]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content - Video and Article */}
                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12">
                    {/* Video/Image */}
                    <div className="w-full lg:flex-1 h-[250px] md:h-[396px] rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    {/* Article Text */}
                    <div className="w-full lg:w-auto flex flex-col justify-start items-start gap-4">
                        <div className="w-full lg:max-w-[384px] text-[#0E0F10] text-xl md:text-2xl font-medium font-articulat leading-tight md:leading-[33.60px]">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </div>
                        <div className="w-full lg:max-w-[384px] text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                            Jan 2, 2026
                        </div>
                    </div>
                </div>

                {/* Article Cards */}
                <div className="w-full flex flex-col md:flex-row justify-start items-start gap-8 md:gap-6 flex-wrap lg:flex-nowrap">
                    {[1, 2, 3].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[384px] flex flex-col justify-start items-start gap-6"
                        >
                            <div className="w-full h-[200px] md:h-[248px] rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/images/articleimage.png"
                                    alt="Article image"
                                    width={384}
                                    height={248}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="w-full text-[#0E0F10] text-lg md:text-xl font-medium font-articulat leading-7">
                                    From Sanctions to Scrutiny: How OFAC Violations Create
                                    Immediate SEC Disclosure Triggers
                                </div>
                                <div className="w-full text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                                    Jan 2, 2026
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
