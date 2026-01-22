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
    const paddingClass = variant === 'compact' ? 'py-3 pl-3 pr-4' : 'py-4 pl-3 pr-4';

    return (
        <div className={`inline-flex items-start gap-3 ${paddingClass} bg-white rounded-lg border border-[#D9DBDD] ${className}`}>
            <div className="w-6 h-6 relative shrink-0 overflow-hidden">
                <Image
                    src={icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-full h-full"
                    style={{ filter: iconFilter }}
                />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
                <h4 className="self-stretch text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px] break-words">
                    {title}
                </h4>
                {description && (
                    <p className="self-stretch text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px] break-words">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export { defaultGreenFilter, orangeFilter };
