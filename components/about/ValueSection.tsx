import Image from "next/image";
import { SectionHeader } from "../shared";

interface ValueCardProps {
    title: string;
    description: string;
    icon: string;
}

function ValueCard({ title, description, icon }: ValueCardProps) {
    return (
        <div
            className="relative h-[379px] p-6 rounded-lg overflow-hidden flex flex-col gap-3"
            style={{
                background: 'radial-gradient(ellipse 100% 100% at 100.09% 100%, #1B6651 0%, #134E3D 100%)'
            }}
        >
            <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-white text-[28px] font-medium font-articulat leading-[39.20px]">
                    {title}
                </h3>
                <p className="text-white text-xl font-normal font-articulat leading-7">
                    {description}
                </p>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden">
                <div className="absolute left-[18px] bottom-[18px] w-[180px] h-[180px]">
                    <Image
                        src={icon}
                        alt=""
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

const valueCards = [
    {
        title: "Accuracy over hype",
        description: "Every insight must be defensible. Every answer must be traceable.",
        icon: "/assets/icons/value/mingcute_target-fill.svg"
    },
    {
        title: "Speed with accountability",
        description: "Fast matters. But never at the cost of trust.",
        icon: "/assets/icons/value/material-symbols_speed-rounded.svg"
    },
    {
        title: "Judgment stays human",
        description: "Every insight must be defensible. Every answer must be traceable.",
        icon: "/assets/icons/value/fluent_people-28-filled.svg"
    }
];

export default function ValueSection() {
    return (
        <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
                <SectionHeader
                    title="The value"
                    subtitle="We don't replace professionals. We amplify them."
                    className="max-w-[462px]"
                />

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[13px]">
                    {valueCards.map((card, index) => (
                        <ValueCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
