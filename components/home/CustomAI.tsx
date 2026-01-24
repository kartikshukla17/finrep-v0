interface FeatureCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    descriptions: string[];
    className?: string;
}

function FeatureCard({ imageSrc, imageAlt, title, descriptions, className = "" }: FeatureCardProps) {
    return (
        <div className={`p-3 lg:p-6 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-3 lg:gap-6 ${className}`}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className="object-contain rounded-[6px] w-full"
            />

            <h3 className="text-white text-base lg:text-2xl font-medium font-articulat leading-[22.40px] lg:leading-[33.60px]">
                {title}
            </h3>

            {descriptions.map((desc, index) => (
                <p
                    key={index}
                    className="w-full text-[#B1B5B9] text-xs lg:text-base font-normal font-articulat leading-[16.80px] lg:leading-[22.40px]"
                >
                    {desc}
                </p>
            ))}
        </div>
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
        imageSrc: "/assets/images/Edgar.png",
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
            className="relative w-full px-4 lg:px-[120px] py-6 lg:py-12 flex flex-col justify-center items-center gap-6 lg:gap-[49px] overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/assets/images/gradientbg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Title and Subtitle */}
            <div className="w-full max-w-[372px] lg:max-w-[900px] flex flex-col justify-center items-center gap-4">
                <h2 className="text-[#F4FBF8] text-[28px] lg:text-[36px] font-medium lg:font-normal font-articulat leading-[39.20px] lg:leading-[50.40px] text-center">
                    Custom AI built for CFO offices who can Trust
                </h2>
                <p className="text-[#F4FBF8] text-base lg:text-xl font-normal font-articulat leading-[22.40px] lg:leading-7 text-center">
                    Enterprise grade architecture with first class auditability,
                    governance, and security
                </p>
            </div>

            {/* Feature Cards - Mobile: 1 full + 2 half, Desktop: 3 equal */}
            <div className="w-full max-w-[372px] lg:max-w-[1200px] flex flex-col gap-3 lg:gap-4">
                {/* Desktop: All three in a row */}
                <div className="hidden lg:flex flex-row justify-start items-stretch gap-4">
                    {featureCards.map((card, index) => (
                        <FeatureCard
                            key={index}
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                            title={card.title}
                            descriptions={card.descriptions}
                            className="flex-1 h-[448px]"
                        />
                    ))}
                </div>

                {/* Mobile: First card full width */}
                <div className="lg:hidden">
                    <FeatureCard
                        imageSrc={featureCards[0].imageSrc}
                        imageAlt={featureCards[0].imageAlt}
                        title={featureCards[0].title}
                        descriptions={featureCards[0].descriptions}
                        className="w-full"
                    />
                </div>

                {/* Mobile: Second and third cards side by side */}
                <div className="lg:hidden flex flex-row gap-3">
                    <FeatureCard
                        imageSrc={featureCards[1].imageSrc}
                        imageAlt={featureCards[1].imageAlt}
                        title={featureCards[1].title}
                        descriptions={featureCards[1].descriptions}
                        className="flex-1"
                    />
                    <FeatureCard
                        imageSrc={featureCards[2].imageSrc}
                        imageAlt={featureCards[2].imageAlt}
                        title={featureCards[2].title}
                        descriptions={featureCards[2].descriptions}
                        className="flex-1"
                    />
                </div>
            </div>
        </div>
    );
}
