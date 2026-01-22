import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
    width: number;
    height: number;
    opacity?: string;
    mixBlendMode?: boolean;
}

interface CompanyLogoGridProps {
    logos: Logo[][];
    className?: string;
}

export default function CompanyLogoGrid({ logos, className = '' }: CompanyLogoGridProps) {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {logos.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-3">
                    {row.map((logo, logoIndex) => (
                        <div
                            key={logoIndex}
                            className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className={logo.opacity || ''}
                                style={logo.mixBlendMode ? { mixBlendMode: 'luminosity' } : undefined}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
