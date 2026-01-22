import Image from "next/image";
import Header from "@/components/layout/Header";

export default function BlogHero() {
    return (
        <div className="relative w-full bg-[#0D352A]">
            {/* Fixed Header */}
            <Header variant="light" />

            {/* Main Content */}
            <div className="w-full flex flex-col justify-start items-center gap-12 md:gap-24 pt-[100px] md:pt-[140px] pb-24 px-6 md:px-[60px] lg:px-[120px]">
                {/* Title and Subtitle Section */}
                <div className="flex flex-col justify-start items-center gap-6 text-center">
                    <h1 className="text-white text-4xl md:text-[64px] font-normal font-articulat leading-tight md:leading-[89.60px]">
                        Blogs
                    </h1>
                    <p className="max-w-[822px] text-[#F4FBF8] text-lg md:text-xl font-normal font-articulat leading-8">
                        Expert insights on financial disclosure, compliance, and the future
                        of CFO operations
                    </p>
                </div>

                {/* Featured Blog Cards Section */}
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Left Blog Card */}
                    <div className="flex flex-col justify-start items-start gap-6 w-full lg:w-1/2">
                        <h2 className="w-full text-[#F9F9FA] text-2xl md:text-3xl font-medium font-articulat leading-tight md:leading-[33.60px]">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </h2>
                        <button className="px-9 py-3 rounded-lg border border-[#29AB87] flex justify-center items-center gap-2 hover:bg-[#29AB87]/10 transition-colors">
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

                    {/* Right Blog Card - Image */}
                    <div className="w-full lg:w-[768px] h-[300px] md:h-[400px] lg:h-[496px] relative rounded-[16px] border-2 border-[#269C7B] overflow-hidden box-border shrink-0">
                        <Image
                            src="/assets/images/articleimage.png"
                            alt="How OFAC Violations Create Immediate SEC Disclosure Triggers"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
