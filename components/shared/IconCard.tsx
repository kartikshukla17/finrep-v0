import Image from "next/image";

interface IconCardProps {
    icon: string;
    title: string;
    description?: string;
    iconFilter?: string;
    variant?: 'default' | 'compact';
    className?: string;
}

const defaultGreenFilter = 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)';
const orangeFilter = 'brightness(0) saturate(100%) invert(48%) sepia(73%) saturate(1849%) hue-rotate(0deg) brightness(98%) contrast(101%)';

export default function IconCard({
    icon,
    title,
    description,
    iconFilter = defaultGreenFilter,
    variant = 'default',
    className = ''
}: IconCardProps) {
    const paddingClass = variant === 'compact' ? 'py-3 px-3 pr-4' : 'py-4 px-3 pr-4';
    const alignmentClass = description ? 'items-start' : 'items-center';

    return (
        <div className={`flex ${alignmentClass} gap-3 ${paddingClass} bg-white rounded-lg border border-[#D9DBDD] ${className}`}>
            <div className="w-6 h-6 relative shrink-0">
                <Image
                    src={icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-full h-full"
                    style={{ filter: iconFilter }}
                />
            </div>
            <div className="flex-1 flex flex-col gap-1">
                <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                    {title}
                </h4>
                {description && (
                    <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export { defaultGreenFilter, orangeFilter };
