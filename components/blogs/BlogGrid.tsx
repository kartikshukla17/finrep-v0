import BlogCard from "./BlogCard";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    image: string;
}

interface BlogGridProps {
    posts: BlogPost[];
    showViewMore?: boolean;
    onViewMore?: () => void;
}

export default function BlogGrid({ posts, showViewMore = true, onViewMore }: BlogGridProps) {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
                {posts.map((post) => (
                    <BlogCard
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        date={post.date}
                        image={post.image}
                    />
                ))}
            </div>

            {showViewMore && (
                <div className="w-full flex flex-col justify-center items-center gap-2.5">
                    <button
                        onClick={onViewMore}
                        className="px-[19px] py-2 bg-white rounded-[60px] border border-[#D9DBDD] flex justify-center items-center gap-2.5 hover:bg-[#F9F9FA] transition-colors"
                    >
                        <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px]">
                            View More
                        </div>
                    </button>
                </div>
            )}
        </>
    );
}
