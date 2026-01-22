import Image from "next/image";

interface FeatureItemProps {
    icon: string;
    text: string;
}

function FeatureItem({ icon, text }: FeatureItemProps) {
    return (
        <div className="w-full px-3 md:px-4 py-3 bg-[#134E3D] rounded-lg flex justify-start items-center gap-3">
            <Image
                src={icon}
                alt=""
                width={24}
                height={24}
                className="shrink-0"
                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
            />
            <div className="flex-1 text-white text-sm font-semibold font-articulat leading-tight lg:leading-[19.60px]">
                {text}
            </div>
        </div>
    );
}

interface FeatureGroupProps {
    title: string;
    subtitle: string;
    features: { icon: string; text: string }[];
}

function FeatureGroup({ title, subtitle, features }: FeatureGroupProps) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-5">
            <div className="w-full flex flex-col justify-start items-start gap-2">
                <h3 className="w-full text-white text-xl md:text-2xl font-medium font-articulat leading-tight lg:leading-[28.80px]">
                    {title}
                </h3>
                <p className="w-full text-[#C7C7C7] text-sm md:text-base font-medium font-articulat leading-tight lg:leading-[19.20px]">
                    {subtitle}
                </p>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-3">
                {features.map((feature, index) => (
                    <FeatureItem key={index} icon={feature.icon} text={feature.text} />
                ))}
            </div>
        </div>
    );
}

const featureGroups = [
    {
        title: "Expert-led onboarding",
        subtitle: "We do not just provide software access. We guide adoption.",
        features: [
            { icon: "/assets/icons/category_search.svg", text: "Initial workshops for each enabled module" },
            { icon: "/assets/icons/animated_images.svg", text: "Walkthrough videos and documentation" },
            { icon: "/assets/icons/circles_ext.svg", text: "Dedicated customer success manager during onboarding" }
        ]
    },
    {
        title: "Implementation and support",
        subtitle: "Finrep stays with you beyond go-live.",
        features: [
            { icon: "/assets/icons/acute.svg", text: "Go-live within 7 business days post-contract" },
            { icon: "/assets/icons/video_label.svg", text: "Optional 4-week production pilot at no additional cost" },
            { icon: "/assets/icons/event_repeat.svg", text: "Weekly check-ins during early adoption" },
            { icon: "/assets/icons/support_agent.svg", text: "Same business-day support response" }
        ]
    },
    {
        title: "Finrep-trained AI and enterprise-grade security",
        subtitle: "Built specifically for finance, designed for trust.",
        features: [
            { icon: "/assets/icons/grid_view.svg", text: "AI trained on filings, guidance, and regulatory precedent" },
            { icon: "/assets/icons/attach_file.svg", text: "Evidence-first responses with inspectable sources" },
            { icon: "/assets/icons/lock.svg", text: "SOC 2 Type II & ISO 27001 certified" },
            { icon: "/assets/icons/password.svg", text: "Secure data isolation and access controls" }
        ]
    }
];

export default function CFOOfficeSection() {
    return (
        <div className="w-full bg-[#0D352A]">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
                    {/* Left Side - Header */}
                    <div className="w-full lg:w-[533px] flex flex-col justify-start items-start gap-6">
                        <h2 className="w-full text-white text-3xl md:text-[38px] lg:text-[42px] font-medium font-articulat leading-tight lg:leading-[58.80px]">
                            A complete CFO office, powered by AI
                        </h2>
                        <p className="w-full text-[#C7C7C7] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                            One platform that brings research, benchmarking, drafting, and review into a single, intelligent workflow.
                        </p>
                    </div>

                    {/* Right Side - Features */}
                    <div className="flex-1 flex flex-col justify-center items-start gap-10 lg:gap-[52px]">
                        {featureGroups.map((group, index) => (
                            <FeatureGroup
                                key={index}
                                title={group.title}
                                subtitle={group.subtitle}
                                features={group.features}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
