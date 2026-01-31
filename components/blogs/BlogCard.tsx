import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  image: string;
  className?: string;
}

export default function BlogCard({
  slug,
  title,
  date,
  image,
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className={`flex flex-col justify-start items-start gap-4 lg:gap-6 hover:opacity-90 transition-opacity ${className}`}
    >
      <div className="w-full h-[240px] lg:h-[248px] relative rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h3 className="text-[#0E0F10] text-lg lg:text-xl font-medium font-articulat leading-7 line-clamp-2">
          {title}
        </h3>
        <div className="text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
          {date}
        </div>
      </div>
    </Link>
  );
}
