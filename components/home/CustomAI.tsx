interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  descriptions: string[];
  className?: string;
}

function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  descriptions,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-6 ${className}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-contain rounded-lg w-full"
      />

      <h3 className="text-white text-2xl font-medium font-articulat leading-[33.60px]">
        {title}
      </h3>

      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="w-full text-[#B1B5B9] text-base font-normal font-articulat leading-[22.40px]"
        >
          {desc}
        </p>
      ))}
    </div>
  );
}

// Mobile version of the card with smaller sizes
function MobileFeatureCard({
  imageSrc,
  imageAlt,
  title,
  descriptions,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-3 bg-black/20 rounded-lg backdrop-blur-[6px] flex flex-col justify-start items-start gap-3 ${className}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-contain rounded-[6px] w-full"
      />

      <h3 className="text-white text-base font-medium font-articulat leading-[22.40px]">
        {title}
      </h3>

      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="w-full text-[#B1B5B9] text-xs font-normal font-articulat leading-[16.80px]"
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
      "No stochastic reasoning in regulated workflows.",
    ],
  },
  {
    imageSrc: "/assets/images/zerodata.png",
    imageAlt: "Zero Data Residency",
    title: "Zero Data Residency",
    descriptions: [
      "Customer filings and queries are not retained, reused, or used to train foundation models.",
      "Your data remains yours. Always.",
    ],
  },
  {
    imageSrc: "/assets/images/Edgar.png",
    imageAlt: "EDGAR Native",
    title: "EDGAR Native",
    descriptions: [
      "Built directly on SEC EDGAR filings. Finrep does not rely on scraped summaries or third party interpretations.",
      "All outputs trace back to primary source disclosures.",
    ],
  },
];

export default function CustomAI() {
  return (
    <div
      className="relative w-full overflow-hidden section-screen"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/assets/images/gradientbg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Desktop Layout - exact specs from design */}
      <div className="hidden lg:flex w-full px-[120px] py-12 flex-col justify-center items-center gap-[49px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-[#F4FBF8] text-[36px] font-normal font-articulat leading-[50.40px] text-center">
            Custom AI built for CFO offices
          </h2>
          <p className="text-[#F4FBF8] text-xl font-normal font-articulat leading-7 text-center">
            Enterprise grade architecture with first class auditability,
            governance, and security
          </p>
        </div>

        {/* Feature Cards - 1360px width, 16px gap */}
        <div className="w-[1360px] flex flex-row justify-start items-center gap-4">
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
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 py-6 flex flex-col justify-center items-center gap-6">
        {/* Title and Subtitle */}
        <div className="w-full max-w-[372px] flex flex-col justify-center items-center gap-4">
          <h2 className="text-[#F4FBF8] text-[28px] font-medium font-articulat leading-[39.20px] text-center">
            Custom AI built for CFO offices
          </h2>
          <p className="text-[#F4FBF8] text-base font-normal font-articulat leading-[22.40px] text-center">
            Enterprise grade architecture with first class auditability,
            governance, and security
          </p>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-[372px] flex flex-col gap-3">
          {/* First card full width */}
          <MobileFeatureCard
            imageSrc={featureCards[0].imageSrc}
            imageAlt={featureCards[0].imageAlt}
            title={featureCards[0].title}
            descriptions={featureCards[0].descriptions}
            className="w-full"
          />

          {/* Second and third cards side by side */}
          <div className="flex flex-row gap-3">
            <MobileFeatureCard
              imageSrc={featureCards[1].imageSrc}
              imageAlt={featureCards[1].imageAlt}
              title={featureCards[1].title}
              descriptions={featureCards[1].descriptions}
              className="flex-1"
            />
            <MobileFeatureCard
              imageSrc={featureCards[2].imageSrc}
              imageAlt={featureCards[2].imageAlt}
              title={featureCards[2].title}
              descriptions={featureCards[2].descriptions}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
