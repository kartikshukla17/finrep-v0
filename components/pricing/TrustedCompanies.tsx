import Image from "next/image";

const companyLogos = [
    [
        { src: "/assets/icons/company_logo/Circle_idESAy34no_0 1.svg", alt: "Circle", width: 164, height: 42 },
        { src: "/assets/icons/company_logo/Infosys_idxq8SaZnR_0.svg", alt: "Infosys", width: 114, height: 42 },
        { src: "/assets/icons/company_logo/Logo 1.svg", alt: "EXL", width: 99, height: 36 }
    ],
    [
        { src: "/assets/icons/company_logo/Vector.svg", alt: "HP", width: 48, height: 48 },
        { src: "/assets/icons/company_logo/idYV5M9CYu_1768336934604 1.svg", alt: "Wells Fargo", width: 248, height: 25 },
        { src: "/assets/icons/company_logo/idlzlIlh4I_logos 1.svg", alt: "RingCentral", width: 226, height: 32 }
    ]
];

export default function TrustedCompanies() {
    return (
        <div className="w-full bg-white border-b border-[#ECEDEE]">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-20">
                <div className="w-full flex flex-col justify-center items-start gap-8 md:gap-10 lg:gap-[42px]">
                    {/* Header */}
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h2 className="w-full text-[#0E0F10] text-2xl md:text-[32px] lg:text-[36px] font-medium font-articulat leading-tight lg:leading-[43.20px]">
                            Trusted by teams operating at scale
                        </h2>
                        <p className="w-full text-[#3F4346] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                            Leading enterprises rely on Finrep for accuracy, speed, and defensibility.
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
                        {companyLogos.map((row, rowIndex) => (
                            <div key={rowIndex} className="w-full flex flex-col sm:flex-row justify-start items-stretch gap-4 md:gap-6">
                                {row.map((logo, logoIndex) => (
                                    <div
                                        key={logoIndex}
                                        className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={logo.width}
                                            height={logo.height}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
