"use client";

import { useEffect, useState } from "react";

interface TableOfContentsSubSection {
    title: string;
    slug: string;
}

interface TableOfContentsSection {
    title: string;
    slug: string;
    sections?: TableOfContentsSubSection[];
}

interface TableOfContentsProps {
    sections: TableOfContentsSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
    const [activeSlug, setActiveSlug] = useState<string>("");

    // Get all slugs for intersection observer
    const allSlugs = sections.flatMap(section => [
        section.slug,
        ...(section.sections?.map(sub => sub.slug) || [])
    ]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the first visible heading
                const visibleEntries = entries.filter(entry => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    // Get the topmost visible heading
                    const topEntry = visibleEntries.reduce((prev, curr) => {
                        return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
                    });
                    setActiveSlug(topEntry.target.id);
                }
            },
            {
                rootMargin: "-100px 0px -60% 0px",
                threshold: 0
            }
        );

        // Observe all headings
        allSlugs.forEach(slug => {
            const element = document.getElementById(slug);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [allSlugs]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
        e.preventDefault();
        const element = document.getElementById(slug);

        if (element) {
            // Calculate offset for fixed header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setActiveSlug(slug);
            window.history.pushState(null, "", `#${slug}`);
        }
    };

    return (
        <aside className="hidden xl:flex w-[200px] flex-col gap-4 shrink-0 sticky top-24 self-start">
            <div className="text-[#9FA4A9] text-sm font-normal font-articulat leading-[22.40px]">
                On this page
            </div>
            {sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                    <a
                        href={`#${section.slug}`}
                        onClick={(e) => handleClick(e, section.slug)}
                        className={`text-base font-medium font-articulat leading-[25.60px] transition-colors ${
                            activeSlug === section.slug
                                ? "text-[#269C7B]"
                                : "text-[#0E0F10] hover:text-[#269C7B]"
                        }`}
                    >
                        {section.title}
                    </a>
                    {section.sections?.map((subSection, subIdx) => (
                        <a
                            key={subIdx}
                            href={`#${subSection.slug}`}
                            onClick={(e) => handleClick(e, subSection.slug)}
                            className={`pl-4 text-sm font-normal font-articulat leading-[22.40px] transition-colors ${
                                activeSlug === subSection.slug
                                    ? "text-[#269C7B] font-medium"
                                    : "text-[#0E0F10] hover:text-[#269C7B]"
                            }`}
                        >
                            {subSection.title}
                        </a>
                    ))}
                </div>
            ))}
        </aside>
    );
}
