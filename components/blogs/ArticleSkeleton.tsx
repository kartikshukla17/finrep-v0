export default function ArticleSkeleton() {
    return (
        <div className="flex gap-8 lg:gap-12 animate-pulse">
            {/* Sidebar Skeleton */}
            <aside className="hidden lg:flex w-[200px] flex-col gap-4 shrink-0">
                <div className="flex flex-col items-center gap-3">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gray-200" />
                    {/* Name */}
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                    {/* Role */}
                    <div className="h-3 w-32 bg-gray-200 rounded" />
                </div>
            </aside>

            {/* Main Content Skeleton */}
            <div className="flex-1 min-w-0 max-w-[800px]">
                {/* Categories */}
                <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                    <div className="h-6 w-20 bg-gray-200 rounded-full" />
                </div>

                {/* Title */}
                <div className="space-y-3 mb-4">
                    <div className="h-8 w-full bg-gray-200 rounded" />
                    <div className="h-8 w-3/4 bg-gray-200 rounded" />
                </div>

                {/* Date */}
                <div className="h-4 w-32 bg-gray-200 rounded mb-8" />

                {/* Featured Image */}
                <div className="w-full aspect-video bg-gray-200 rounded-lg mb-12" />

                {/* Content paragraphs */}
                <div className="space-y-4">
                    {/* Heading */}
                    <div className="h-6 w-1/2 bg-gray-200 rounded mt-8" />

                    {/* Paragraph */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    </div>

                    {/* Another heading */}
                    <div className="h-6 w-2/5 bg-gray-200 rounded mt-8" />

                    {/* Another paragraph */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-4/5 bg-gray-200 rounded" />
                    </div>

                    {/* List items */}
                    <div className="space-y-2 pl-6 mt-4">
                        <div className="h-4 w-3/4 bg-gray-200 rounded" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded" />
                        <div className="h-4 w-4/5 bg-gray-200 rounded" />
                    </div>

                    {/* Another heading */}
                    <div className="h-6 w-1/3 bg-gray-200 rounded mt-8" />

                    {/* Another paragraph */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>

            {/* TOC Skeleton */}
            <aside className="hidden xl:flex w-[200px] flex-col gap-4 shrink-0">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="space-y-3">
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                    <div className="h-3 w-24 bg-gray-200 rounded ml-4" />
                    <div className="h-3 w-20 bg-gray-200 rounded ml-4" />
                    <div className="h-3 w-24 bg-gray-200 rounded ml-4" />
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
            </aside>
        </div>
    );
}
