import Image from "next/image";

interface FeatureCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    descriptions: string[];
}

function FeatureCard({ imageSrc, imageAlt, title, descriptions }: FeatureCardProps) {
    return (
        <div className="w-full lg:flex-1 h-auto lg:h-[448px] p-6 bg-black/20 rounded-[8px] backdrop-blur-[6px] flex flex-col justify-start items-start gap-6">

            <img
                src={imageSrc}
                alt={imageAlt}
                className="object-contain rounded-[6px]"
            />



            <div className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
                {title}
            </div>


            {
                descriptions.map((desc, index) => (
                    <div
                        key={index}
                        className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]"
                    >
                        {desc}
                    </div>
                ))
            }
        </div >
    );
}

const featureCards = [
    {
        imageSrc: "/assets/images/citedoutputs.png",
        imageAlt: "Cited Outputs",
        title: "Cited Outputs",
        descriptions: [
            "Every response is reproducible, reviewable, and attributable to underlying source disclosures and logic.",
            "No stochastic reasoning in regulated workflows."
        ]
    },
    {
        imageSrc: "/assets/images/zerodata.png",
        imageAlt: "Zero Data Residency",
        title: "Zero Data Residency",
        descriptions: [
            "Customer filings and queries are not retained, reused, or used to train foundation models.",
            "Your data remains yours. Always."
        ]
    },
    {
        imageSrc: "/assets/images/edgar.png",
        imageAlt: "EDGAR Native",
        title: "EDGAR Native",
        descriptions: [
            "Built directly on SEC EDGAR filings. Finrep does not rely on scraped summaries or third party interpretations.",
            "All outputs trace back to primary source disclosures."
        ]
    }
];

export default function CustomAI() {
    return (
        <div
            className="relative w-full px-6 md:px-[60px] lg:px-[120px] py-12 flex flex-col justify-center items-center gap-[49px]"
            style={{
                backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/assets/images/gradientbg.png)",
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
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-center gap-4">
                {featureCards.map((card, index) => (
                    <FeatureCard
                        key={index}
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        descriptions={card.descriptions}
                    />
                ))}
            </div>
        </div>
    );
}
