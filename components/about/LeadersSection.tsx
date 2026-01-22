import Image from "next/image";
import { SectionHeader } from "../shared";

interface Leader {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    twitter?: string;
}

interface LeaderCardProps {
    leader: Leader;
}

function LeaderCard({ leader }: LeaderCardProps) {
    return (
        <div className="flex-1 flex flex-col md:flex-row items-end gap-8">
            <div className="w-[240px] h-[240px] relative overflow-hidden rounded-xl shrink-0">
                <Image
                    src={leader.image}
                    alt={leader.name}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col gap-[42px]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-[43.20px]">
                        {leader.name}
                    </h3>
                    <p className="text-[#3F4346] text-xl font-normal font-articulat leading-[30px]">
                        {leader.role}
                    </p>
                </div>
                <div className="flex items-center gap-[7px]">
                    {leader.linkedin && (
                        <a
                            href={leader.linkedin}
                            className="w-8 h-8 relative overflow-hidden flex items-center justify-center"
                            aria-label={`${leader.name}'s LinkedIn`}
                        >
                            <Image
                                src="/assets/icons/pajamas_linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </a>
                    )}
                    {leader.twitter && (
                        <a
                            href={leader.twitter}
                            className="w-8 h-8 relative overflow-hidden flex items-center justify-center"
                            aria-label={`${leader.name}'s Twitter`}
                        >
                            <Image
                                src="/assets/icons/bi_twitter-x.svg"
                                alt="Twitter/X"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

const leaders: Leader[] = [
    {
        name: "Gana Misra",
        role: "CEO & Co-founder",
        image: "/assets/images/gana.png",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Tushar Varshney",
        role: "CTO & Co-founder",
        image: "/assets/images/tushar.png",
        linkedin: "#",
        twitter: "#"
    }
];

export default function LeadersSection() {
    return (
        <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
                <SectionHeader
                    title="Our leaders"
                    subtitle="Built by people who've lived the problem."
                    className="max-w-[462px]"
                />

                <div className="w-full flex flex-col md:flex-row gap-6">
                    {leaders.map((leader, index) => (
                        <LeaderCard key={index} leader={leader} />
                    ))}
                </div>
            </div>
        </div>
    );
}
