import Image from "next/image";

export default function CustomAI() {
    return (
        <div
            className="relative w-full px-6 md:px-[60px] lg:px-[120px] py-12 flex flex-col justify-center items-center gap-[49px]"
            style={{
                backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/assets/images/Frame 2147207769.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Title and Subtitle */}
            <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-4">
                <div className="text-[#F4FBF8] text-3xl md:text-[36px] font-normal font-articulat leading-tight md:leading-[50.40px] text-center">
                    Custom AI built for CFO offices who can Trust
                </div>
                <div className="text-[#F4FBF8] text-lg md:text-xl font-normal font-articulat leading-snug md:leading-7 text-center">
                    Enterprise grade architecture with first class auditability,
                    governance, and security
                </div>
            </div>

            {/* Three Feature Cards */}
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-4">
                {/* Cited Outputs Card */}
                <div className="w-full lg:flex-1 h-auto min-h-[448px] p-6 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-6">
                    <div className="w-full h-20 p-1 rounded-lg border border-white/24">
                        <div className="w-full h-full relative">
                            <Image
                                src="/assets/customai/Group 1814106621.svg"
                                alt="Cited Outputs"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                        Cited Outputs
                    </div>
                    <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                        Every response is reproducible, reviewable, and attributable to
                        underlying source disclosures and logic.
                    </div>
                    <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                        No stochastic reasoning in regulated workflows.
                    </div>
                </div>

                {/* Zero Data Residency Card */}
                <div className="w-full lg:flex-1 h-auto min-h-[448px] p-6 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-6">
                    <div className="w-full h-20 p-1 rounded-lg border border-white/24">
                        <div className="w-full h-full relative">
                            <Image
                                src="/assets/customai/Group 1814106618.svg"
                                alt="Zero Data Residency"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                        Zero Data Residency
                    </div>
                    <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                        Customer filings and queries are not retained, reused, or used to
                        train foundation models.
                    </div>
                    <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                        Your data remains yours. Always.
                    </div>
                </div>

                {/* EDGAR Native Card */}
                <div className="w-full lg:flex-1 h-auto min-h-[448px] p-6 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-6">
                    <div className="w-full h-20 p-1 rounded-lg border border-white/24">
                        <div className="w-full h-full flex justify-center items-center gap-2">
                            <div className="w-6 h-6 relative">
                                <Image
                                    src="/assets/customai/duo-icons_bank.svg"
                                    alt="EDGAR Native"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div
                                className="text-[#D9DBDD] text-2xl font-bold leading-[33.60px]"
                                style={{ fontFamily: "Roboto Slab" }}
                            >
                                EDGAR
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                        EDGAR Native
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                            Built directly on SEC EDGAR filings. Finrep does not rely on
                            scraped summaries or third party interpretations.
                        </div>
                        <div className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]">
                            All outputs trace back to primary source disclosures.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
