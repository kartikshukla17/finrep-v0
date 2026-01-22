import Image from "next/image";

interface ArticleContentProps {
    featuredImage: string;
    title: string;
    children?: React.ReactNode;
}

export default function ArticleContent({ featuredImage, title, children }: ArticleContentProps) {
    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            {/* Featured Image */}
            <div className="w-full aspect-video md:h-[540px] relative rounded-lg overflow-hidden">
                <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
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
