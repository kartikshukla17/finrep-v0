interface ArticleHeaderProps {
    title: string;
    date: string;
    categories?: string[];
}

export default function ArticleHeader({ title, date, categories }: ArticleHeaderProps) {
    return (
        <div className="w-full pb-8 md:pb-12 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <div className="text-[#5E6469] text-base font-normal font-articulat leading-[25.60px]">
                    {date}
                </div>
                <h1 className="text-[#0E0F10] text-2xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[43.20px]">
                    {title}
                </h1>
            </div>
            {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-2 bg-[#ECEDEE] rounded-[64px] text-[#5E6469] text-sm font-medium font-articulat leading-4"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
