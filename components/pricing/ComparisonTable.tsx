import Image from "next/image";

interface ComparisonFeature {
    name: string;
    finrep: boolean;
    others: boolean;
    longText?: boolean;
}

interface ComparisonCategoryProps {
    title: string;
    features: ComparisonFeature[];
}

function ComparisonCategory({ title, features }: ComparisonCategoryProps) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* Header Row */}
            <div className="w-full bg-white flex flex-col md:flex-row justify-start items-stretch">
                <div className="flex-1 h-auto md:h-12 px-2.5 py-2 md:py-[9px] flex justify-start items-center">
                    <h3 className="flex-1 text-[#0E0F10] text-xl md:text-[24px] lg:text-[28px] font-medium font-articulat leading-tight lg:leading-[33.60px]">
                        {title}
                    </h3>
                </div>
                <div className="flex-1 flex flex-row justify-start items-center">
                    <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                        <div className="flex-1 text-center text-[#269C7B] text-sm md:text-base font-medium font-articulat leading-[19.20px] tracking-[0.64px]">
                            FINREP
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                        <div className="flex-1 text-center text-[#5E6469] text-sm md:text-base font-medium font-articulat leading-[19.20px] tracking-[0.64px]">
                            OTHER PLAYERS
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Rows */}
            <div className="w-full flex flex-col justify-start items-start">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-full bg-white border-b border-black/10 flex flex-col md:flex-row justify-start items-stretch"
                    >
                        <div className={`flex-1 ${feature.longText ? 'h-auto py-2' : 'h-auto md:h-12'} px-2.5 py-2 md:py-[9px] flex justify-start items-center gap-2.5`}>
                            <Image
                                src="/assets/icons/Vector copy 3.svg"
                                alt="Arrow"
                                width={12}
                                height={12}
                                className="shrink-0 opacity-30"
                            />
                            <div className="flex-1 text-black text-base md:text-lg font-medium font-articulat">
                                {feature.name}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row justify-start items-center">
                            <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                                <Image
                                    src={feature.finrep ? "/assets/icons/Compare cell-1.svg" : "/assets/icons/Compare cell.svg"}
                                    alt={feature.finrep ? "Supported" : "Not supported"}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                                <Image
                                    src={feature.others ? "/assets/icons/Compare cell-1.svg" : "/assets/icons/Compare cell.svg"}
                                    alt={feature.others ? "Supported" : "Not supported"}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const comparisonData = [
    {
        title: "Research and evidence",
        features: [
            { name: "SEC filings research", finrep: true, others: true },
            { name: "SEC comment letters access", finrep: true, others: true },
            { name: "Evidence-backed answers with citations", finrep: true, others: false },
            { name: "Source inspection for every answer", finrep: true, others: false },
            { name: "Chat across filings, guidance, peers, comment letters", finrep: true, others: true },
            { name: "True boolean keyword search + advanced filters", finrep: true, others: true },
            { name: "Save searches, watchlists, repeatable workflows", finrep: true, others: false },
            { name: "Chat with your private uploads in the same workflow", finrep: true, others: false },
        ]
    },
    {
        title: "Benchmarking and comparisons",
        features: [
            { name: "Peer benchmarking workflows", finrep: true, others: true },
            { name: "Structured benchmarking grids (matrix style)", finrep: true, others: true },
            { name: "Verbatim excerpts plus AI crux summaries toggle", finrep: true, others: false },
            { name: "Side-by-side disclosure comparison across peers and periods", finrep: true, others: true },
            { name: "Evidence links embedded in comparison outputs", finrep: true, others: false },
            { name: "Share-for-review flows built into the workflow", finrep: true, others: false },
        ]
    },
    {
        title: "Drafting and disclosure quality",
        features: [
            { name: "Guidance-aware drafting grounded in precedent", finrep: true, others: false },
            { name: "Draft companion integrated with research and benchmarking", finrep: true, others: false },
            { name: "Checklist benchmarking mapped to evidence (FASB-aligned review)", finrep: true, others: false },
            { name: "Roll-forward disclosure workflows (reuse with control)", finrep: true, others: false },
        ]
    },
    {
        title: "SEC readiness and risk prevention",
        features: [
            { name: "Comment letter analytics and focus-area reporting", finrep: true, others: false },
            { name: "Proactive monitoring layer (alerts + dashboard)", finrep: true, others: false },
            { name: "Central command center for ongoing reporting work", finrep: true, others: false },
        ]
    },
    {
        title: "Section 16 operations and filing control",
        features: [
            { name: "Prepare Forms 3, 4, 5", finrep: true, others: true },
            { name: "Electronic filing to SEC EDGAR (test + live)", finrep: true, others: true },
            { name: "One-click filing and status retrieval from EDGAR", finrep: true, others: true },
            { name: "File for multiple reporting owners", finrep: true, others: true },
            { name: "Footnote capability / footnote library", finrep: true, others: true },
            { name: "Central registry for securities and instruments", finrep: true, others: true },
            { name: "Unified transaction ledger with states (unreported, in draft, filed)", finrep: true, others: false },
            { name: "Unreported transactions queue with resolution paths", finrep: true, others: false },
            { name: "Predictive triggers from vesting schedules", finrep: true, others: false },
            { name: "Deterministic validations (math, table rules, XML compliance) before filing", finrep: true, others: false, longText: true },
            { name: "Role-based permissions (admin file rights, editor, viewer)", finrep: true, others: false },
            { name: "Audit trail: who changed what, when, and why", finrep: true, others: true },
            { name: "Store accession numbers and archive filed history (draft + filed)", finrep: true, others: false },
        ]
    },
    {
        title: "Security and enterprise readiness",
        features: [
            { name: "Security and enterprise readiness", finrep: true, others: true },
            { name: "ISO 27001", finrep: true, others: true },
            { name: "Enterprise security documentation (trust center)", finrep: true, others: true },
            { name: "Expert support and guided onboarding", finrep: true, others: true },
        ]
    }
];

export default function ComparisonTable() {
    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                <div className="w-full flex flex-col justify-start items-start gap-8 md:gap-10 lg:gap-[42px]">
                    {/* Header */}
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h2 className="w-full text-[#0E0F10] text-2xl md:text-[32px] lg:text-[36px] font-medium font-articulat leading-tight lg:leading-[43.20px]">
                            Built for finance teams who cannot afford uncertainty
                        </h2>
                        <p className="w-full text-[#3F4346] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                            Here is what you get with Finrep compared to traditional tools and generic AI platforms.
                        </p>
                    </div>

                    {/* Comparison Categories */}
                    {comparisonData.map((category, index) => (
                        <ComparisonCategory
                            key={index}
                            title={category.title}
                            features={category.features}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
