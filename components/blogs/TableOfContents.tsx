interface TableOfContentsSection {
    title: string;
    sections?: string[];
}

interface TableOfContentsProps {
    sections: TableOfContentsSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
    return (
        <aside className="hidden xl:flex w-[200px] flex-col gap-4 shrink-0">
            <div className="text-[#9FA4A9] text-sm font-normal font-articulat leading-[22.40px]">
                On this page
            </div>
            <div className="text-[#0E0F10] text-base font-normal font-articulat leading-[25.60px]">
                TL;DR
            </div>
            {sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                    <a
                        href={`#section-${idx}`}
                        className="text-[#269C7B] text-base font-medium font-articulat leading-[25.60px] hover:underline"
                    >
                        {section.title}
                    </a>
                    {section.sections?.map((subSection, subIdx) => (
                        <a
                            key={subIdx}
                            href={`#section-${idx}-${subIdx}`}
                            className="px-4 text-[#0E0F10] text-sm font-normal font-articulat leading-[22.40px] hover:text-[#269C7B] transition-colors"
                        >
                            {subSection}
                        </a>
                    ))}
                </div>
            ))}
        </aside>
    );
}
