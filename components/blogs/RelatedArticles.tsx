import BlogCard from "./BlogCard";

interface RelatedArticle {
    slug: string;
    title: string;
    date: string;
    image: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    if (articles.length === 0) return null;

    return (
        <section className="w-full bg-white py-16 md:py-[120px]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] lg:px-[120px] xl:px-0 flex flex-col gap-9">
                <h2 className="text-center text-black text-2xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                    You might also like
                </h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <BlogCard
                            key={article.slug}
                            slug={article.slug}
                            title={article.title}
                            date={article.date}
                            image={article.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
