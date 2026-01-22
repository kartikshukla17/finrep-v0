import { IconCard, orangeFilter } from "../shared";

const problemItems = [
    {
        icon: "/assets/icons/mdi_puzzle.svg",
        title: "Fragmented Workflows",
        description: "5–7 tools used to answer a single reporting question"
    },
    {
        icon: "/assets/icons/pepicons-pop_repeat-circle-filled.svg",
        title: "Repetitive Disclosures",
        description: "70–80% of disclosure content reused every quarter"
    },
    {
        icon: "/assets/icons/mingcute_time-fill.svg",
        title: "Manual Research",
        description: "20+ hours spent per cycle on filings and guidance review"
    },
    {
        icon: "/assets/icons/ion_warning.svg",
        title: "Compliance Risk",
        description: "100% manual verification across numbers and references"
    }
];

export default function ProblemSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                    The problem
                </h2>
                <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                    Finance work hasn&apos;t changed.<br />
                    The world around it has.
                </p>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {problemItems.map((item, index) => (
                        <IconCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            iconFilter={orangeFilter}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
