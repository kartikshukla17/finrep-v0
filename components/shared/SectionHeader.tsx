interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    align = 'center',
    className = ''
}: SectionHeaderProps) {
    const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

    return (
        <div className={`flex flex-col ${alignmentClass} gap-0.5 ${className}`}>
            <h2 className="text-black text-[42px] font-medium font-articulat">
                {title}
            </h2>
            {subtitle && (
                <p className="text-[#3F4346] text-xl font-medium font-articulat">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
