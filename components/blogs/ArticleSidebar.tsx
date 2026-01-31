import Image from "next/image";
import ArticleShareButtons from "./ArticleShareButtons";

interface Author {
    name: string;
    role?: string;
    avatar?: string;
}

interface ArticleSidebarProps {
    author?: Author;
    slug?: string;
    title?: string;
}

export default function ArticleSidebar({ author, slug, title }: ArticleSidebarProps) {
    return (
        <aside className="hidden lg:flex w-[200px] flex-col gap-12 shrink-0 sticky top-[100px] self-start">
            {/* Authors Section */}
            {author && (
                <div className="flex flex-col gap-4">
                    <div className="text-[#0E0F10] text-sm font-medium font-articulat leading-[22.40px]">
                        Authors
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="px-2 py-2 bg-[#ECEDEE] rounded-[40px] flex items-center gap-1.5 w-fit">
                            {author.avatar && (
                                <div className="w-5 h-5 relative rounded-full overflow-hidden">
                                    <Image
                                        src={author.avatar}
                                        alt={author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-5">
                                {author.name}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Share Section */}
            <div className="flex flex-col gap-4">
                <div className="text-[#0E0F10] text-sm font-medium font-articulat leading-[22.40px]">
                    Share
                </div>
                {slug && title ? (
                    <ArticleShareButtons slug={slug} title={title} />
                ) : (
                    <div className="flex gap-4">
                        <ShareButton
                            icon="/assets/icons/pajamas_linkedin.svg"
                            alt="Share on LinkedIn"
                            href="#"
                        />
                        <ShareButton
                            icon="/assets/icons/bi_twitter-x.svg"
                            alt="Share on Twitter"
                            href="#"
                        />
                    </div>
                )}
            </div>
        </aside>
    );
}

interface ShareButtonProps {
    icon: string;
    alt: string;
    href: string;
}

function ShareButton({ icon, alt, href }: ShareButtonProps) {
    return (
        <a
            href={href}
            className="w-6 h-6 relative hover:opacity-70 transition-opacity"
            aria-label={alt}
        >
            <Image
                src={icon}
                alt={alt}
                width={24}
                height={24}
                className="object-contain opacity-60"
            />
        </a>
    );
}
