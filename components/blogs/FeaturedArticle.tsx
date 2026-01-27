import Link from "next/link";

interface FeaturedArticleProps {
    slug: string;
    title: string;
    date: string;
    videoUrl?: string;
}

export default function FeaturedArticle({ slug, title, date, videoUrl }: FeaturedArticleProps) {
    return (
        <Link
            href={`/blogs/${slug}`}
            className="w-full max-w-[372px] lg:max-w-none mx-auto lg:mx-0 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4 lg:gap-12 hover:opacity-90 transition-opacity"
        >
            {/* Featured Video/Image */}
            <div className="w-full lg:flex-1 h-[250px] lg:h-[396px] relative rounded-lg overflow-hidden">
                {videoUrl ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                    />
                ) : null}
            </div>

            {/* Featured Article Info */}
            <div className="w-full lg:w-auto flex flex-col justify-start items-start gap-2 lg:gap-4">
                <h3 className="lg:max-w-md text-[#0E0F10] text-xl lg:text-2xl font-medium font-articulat leading-7 lg:leading-[33.60px]">
                    {title}
                </h3>
                <div className="text-[#5E6469] text-sm lg:text-base font-normal font-articulat leading-[19.60px] lg:leading-[22.40px]">
                    {date}
                </div>
            </div>
        </Link>
    );
}
