import { IconCard, defaultGreenFilter } from "../shared";

const platformItems = [
    {
        icon: "/assets/icons/mingcute_flash-fill.svg",
        title: "Research, instantly",
        description: "Ask complex accounting and disclosure questions and get clear, cited answers across filings, guidance, and peer data."
    },
    {
        icon: "/assets/icons/ri_pencil-ai-fill.svg",
        title: "Draft disclosures faster",
        description: "Generate structured, review-ready disclosures grounded in real filings and authoritative guidance."
    },
    {
        icon: "/assets/icons/material-symbols_text-compare-rounded.svg",
        title: "Benchmark with confidence",
        description: "See how peers disclose, what they emphasize, and what they avoid without manual comparison."
    },
    {
        icon: "/assets/icons/zondicons_book-reference.svg",
        title: "Always referenced",
        description: "Every number, statement, and insight comes with traceable sources. No black boxes."
    }
];

export default function PlatformSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                    The platform
                </h2>
                <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                    A full-blown AI-powered CFO office.
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-black text-lg font-semibold font-articulat">
                    What Finrep enables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ gridAutoRows: '1fr' }}>
                    {platformItems.map((item, index) => (
                        <IconCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            variant="compact"
                            iconFilter={defaultGreenFilter}
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
