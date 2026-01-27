import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
    width: number;
    height: number;
    opacity?: string;
    mixBlendMode?: boolean;
}

const experienceLogos: Logo[] = [
    { src: "/assets/company_logos/jpmorgan-logo.svg", alt: "JPMorgan Chase", width: 182, height: 26, opacity: "opacity-80", mixBlendMode: true },
    { src: "/assets/company_logos/sixt-logo.png", alt: "Sixt", width: 96, height: 54, opacity: "opacity-70", mixBlendMode: true },
    { src: "/assets/company_logos/strive-logo.png", alt: "Strive", width: 140, height: 73, opacity: "opacity-70", mixBlendMode: true },
    { src: "/assets/company_logos/y-combinator-logo.png", alt: "Y Combinator", width: 194, height: 37, mixBlendMode: true },
    { src: "/assets/company_logos/meesho-logo.png", alt: "Meesho", width: 114, height: 40, opacity: "opacity-70", mixBlendMode: true },
    { src: "/assets/company_logos/flipkart-logo.png", alt: "Flipkart", width: 212, height: 84, mixBlendMode: true }
];

const experienceLogosDesktop = [
    [
        { src: "/assets/company_logos/jpmorgan-logo.svg", alt: "JPMorgan Chase", width: 182, height: 26, opacity: "opacity-80", mixBlendMode: true },
        { src: "/assets/company_logos/sixt-logo.png", alt: "Sixt", width: 96, height: 54, opacity: "opacity-70", mixBlendMode: true },
        { src: "/assets/company_logos/strive-logo.png", alt: "Strive", width: 140, height: 73, opacity: "opacity-70", mixBlendMode: true }
    ],
    [
        { src: "/assets/company_logos/y-combinator-logo.png", alt: "Y Combinator", width: 194, height: 37, mixBlendMode: true },
        { src: "/assets/company_logos/meesho-logo.png", alt: "Meesho", width: 114, height: 40, opacity: "opacity-70", mixBlendMode: true },
        { src: "/assets/company_logos/flipkart-logo.png", alt: "Flipkart", width: 212, height: 84, mixBlendMode: true }
    ]
];

export default function ExperienceSection() {
    return (
        <>
            {/* Mobile */}
            <div className="w-full bg-white py-12 px-5 lg:hidden ">
                <div className="max-w-[372px] mx-auto flex flex-col gap-12">
                    <div className="flex flex-col items-center text-center gap-1">
                        <h2 className="text-black text-[42px] font-medium font-articulat leading-normal">
                            Built with experience
                        </h2>
                        <p className="text-[#3F4346] text-xl font-normal font-articulat leading-8">
                            Shaped by teams operating in complex, high-stakes environments
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {experienceLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="group w-full h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center cursor-pointer"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className={`transition-all duration-300 ${logo.opacity || ''} ${logo.mixBlendMode ? 'grayscale group-hover:grayscale-0 group-hover:opacity-100' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="w-full bg-white p-30 hidden lg:block ">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                    <div className="flex flex-col text-center">
                        <h2 className="text-black text-[42px] font-medium font-articulat">
                            Built with experience
                        </h2>
                        <p className="text-[#3F4346] text-xl font-medium font-articulat">
                            Shaped by teams operating in complex, high-stakes environments
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {experienceLogosDesktop.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex gap-3">
                                {row.map((logo, logoIndex) => (
                                    <div
                                        key={logoIndex}
                                        className="group flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center cursor-pointer"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={logo.width}
                                            height={logo.height}
                                            className={`transition-all duration-300 ${logo.opacity || ''} ${logo.mixBlendMode ? 'grayscale group-hover:grayscale-0 group-hover:opacity-100' : ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
