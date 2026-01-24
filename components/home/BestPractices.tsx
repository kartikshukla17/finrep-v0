import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Article data
const articles = [
    {
        image: "/assets/images/articleimage.png",
        title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
        date: "Jan 2, 2026"
    },
    {
        image: "/assets/images/articleimage.png",
        title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
        date: "Jan 2, 2026"
    },
    {
        image: "/assets/images/articleimage.png",
        title: "From Sanctions to Scrutiny: How OFAC Violations Create Immediate SEC Disclosure Triggers",
        date: "Jan 2, 2026"
    }
];

export default function BestPractices() {
    return (
        <div className="relative w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[120px] py-8 lg:py-12 flex flex-col justify-start items-center gap-6 lg:gap-12">
                {/* Mobile Header - Centered */}
                <div className="lg:hidden w-full max-w-[372px] flex flex-col justify-center items-center gap-4">
                    <h2 className="text-center text-[#0E0F10] text-[28px] font-medium font-articulat leading-[39.20px]">
                        Best Practices & Insights
                    </h2>
                    <p className="text-center text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                        Expert insights on financial disclosure, compliance, and the
                        future of CFO operations
                    </p>
                    <button className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <span className="text-[#29AB87] text-base font-medium font-articulat leading-[25.60px] tracking-[0.32px]">
                            View All Articles
                        </span>
                        <ArrowRight className="w-6 h-6 text-[#29AB87]" />
                    </button>
                </div>

                {/* Desktop Header */}
                <div className="hidden lg:flex w-full flex-col justify-start items-start gap-12">
                    <h2 className="text-left text-[#0E0F10] text-[36px] font-medium font-articulat leading-[50.40px]">
                        Best Practices & Insights
                    </h2>
                    <div className="w-full flex flex-row justify-between items-center gap-6">
                        <p className="max-w-[501px] text-[#5E6469] text-xl font-normal font-articulat leading-7">
                            Expert insights on financial disclosure, compliance, and the
                            future of CFO operations
                        </p>
                        <button className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <span className="text-[#29AB87] text-base font-medium font-articulat leading-[25.60px] tracking-[0.32px]">
                                View All Articles
                            </span>
                            <ArrowRight className="w-6 h-6 text-[#29AB87]" />
                        </button>
                    </div>
                </div>

                {/* Featured Content - Video and Article */}
                {/* Mobile: Stacked with video on top, text below */}
                <div className="lg:hidden w-full max-w-[372px] flex flex-col justify-center items-start gap-4">
                    <div className="w-full h-[396px] rounded-lg overflow-hidden">
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
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h3 className="w-full text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </h3>
                        <p className="w-full text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                            Jan 2, 2026
                        </p>
                    </div>
                </div>

                {/* Desktop: Side by side */}
                <div className="hidden lg:flex w-full flex-row justify-start items-center gap-12">
                    <div className="flex-1 h-[396px] rounded-lg overflow-hidden">
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
                    <div className="w-auto flex flex-col justify-start items-start gap-4">
                        <h3 className="max-w-[384px] text-[#0E0F10] text-2xl font-medium font-articulat leading-[33.60px]">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </h3>
                        <p className="max-w-[384px] text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                            Jan 2, 2026
                        </p>
                    </div>
                </div>

                {/* Article Cards */}
                {/* Mobile: Stacked vertically */}
                <div className="lg:hidden w-full max-w-[372px] flex flex-col justify-start items-start gap-6">
                    {articles.map((article, idx) => (
                        <article
                            key={idx}
                            className="w-full flex flex-col justify-start items-start gap-4"
                        >
                            <div className="w-full h-[248px] rounded-lg overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt="Article image"
                                    width={372}
                                    height={248}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start items-start gap-2">
                                <h4 className="w-full text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                                    {article.title}
                                </h4>
                                <p className="w-full text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                                    {article.date}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Desktop: Three columns */}
                <div className="hidden lg:flex w-full flex-row justify-start items-start gap-6">
                    {articles.map((article, idx) => (
                        <article
                            key={idx}
                            className="w-[384px] flex flex-col justify-start items-start gap-6"
                        >
                            <div className="w-full h-[248px] rounded-lg overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt="Article image"
                                    width={384}
                                    height={248}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <h4 className="w-full text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                                    {article.title}
                                </h4>
                                <p className="w-full text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                                    {article.date}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
