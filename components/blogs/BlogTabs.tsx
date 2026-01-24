'use client';

interface BlogTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function BlogTabs({ tabs, activeTab, onTabChange }: BlogTabsProps) {
    return (
        <div className="w-full flex justify-center items-center overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 lg:gap-0 min-w-max px-5 lg:px-0">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => onTabChange(tab)}
                            className={`w-[93px] lg:px-0 lg:w-[240px] pb-2 border-b flex justify-center items-center gap-2.5 cursor-pointer transition-colors shrink-0 ${isActive
                                ? "border-[#269C7B]"
                                : "border-[#D9DBDD] hover:border-[#269C7B]/50"
                                }`}
                        >
                            <div
                                className={`text-sm lg:text-base font-medium font-articulat whitespace-nowrap ${isActive
                                    ? "text-[#269C7B]"
                                    : "text-[#5E6469] hover:text-[#269C7B]"
                                    }`}
                            >
                                {tab}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
