import Image from "next/image";
import Header from "@/components/layout/Header";

export default function BlogHero() {
    return (
        <div className="relative w-full bg-[#0D352A]">
            {/* Fixed Header */}
            <Header variant="light" />

            {/* Main Content */}
            <div className="w-full flex flex-col justify-start items-center gap-12 lg:gap-24 pt-[128px] lg:pt-[140px] pb-24 px-5 lg:px-[120px]">
                {/* Title and Subtitle Section */}
                <div className="w-full max-w-[372px] lg:max-w-[822px] flex flex-col justify-start items-center gap-6 text-center">
                    <h1 className="text-white text-[36px] lg:text-[64px] font-normal font-articulat leading-[50.40px] lg:leading-[89.60px]">
                        Blogs
                    </h1>
                    <p className="text-[#F4FBF8] text-base lg:text-xl font-normal font-articulat leading-[25.60px] lg:leading-8">
                        Expert insights on financial disclosure, compliance, and the future
                        of CFO operations
                    </p>
                </div>

                {/* Featured Blog Cards Section */}
                <div className="w-full max-w-[372px] lg:max-w-[1200px] flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12">
                    {/* Mobile: Image first, then text */}
                    {/* Desktop: Text first, then image */}

                    {/* Mobile Order: Image (order-1), Text (order-2) */}
                    {/* Desktop Order: Text (order-1), Image (order-2) */}

                    {/* Image */}
                    <div className="w-full lg:w-[768px] h-[240px] lg:h-[496px] relative rounded-lg lg:rounded-[16px] border border-[#269C7B] lg:border-2 overflow-hidden box-border shrink-0 order-1 lg:order-2">
                        <Image
                            src="/assets/images/articleimage.png"
                            alt="How OFAC Violations Create Immediate SEC Disclosure Triggers"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-start items-start gap-3 lg:gap-6 w-full lg:w-1/2 order-2 lg:order-1">
                        <h2 className="w-full text-[#F9F9FA] text-xl lg:text-3xl font-medium font-articulat leading-7 lg:leading-[33.60px]">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </h2>
                        <button className="w-full lg:w-auto px-9 py-3 rounded-lg border border-[#29AB87] flex justify-center items-center gap-2 hover:bg-[#29AB87]/10 transition-colors">
                            <div className="w-6 h-6 relative shrink-0">
                                <Image
                                    src="/assets/icons/pdf.svg"
                                    alt="PDF icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-[#F4FBF8] text-base font-medium font-articulat">
                                Free Download
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
