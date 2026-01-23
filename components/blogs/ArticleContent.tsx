import Image from "next/image";

interface ArticleContentProps {
    featuredImage: string;
    title: string;
    children?: React.ReactNode;
}

export default function ArticleContent({ featuredImage, title, children }: ArticleContentProps) {
    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            {/* Featured Image - preserves original dimensions */}
            <div className="w-full rounded-lg overflow-hidden">
                <Image
                    src={featuredImage}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* Article Body - Content comes from CMS via children or markdown */}
            {children && (
                <article className="w-full max-w-none text-[#0E0F10] font-articulat">
                    {children}
                </article>
            )}
        </div>
    );
}
