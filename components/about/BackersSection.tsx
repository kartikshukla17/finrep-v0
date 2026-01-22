import Image from "next/image";

const backerLogos = [
    { src: "/assets/company_logos/Accel_logo 1.svg", alt: "Accel", width: 125, height: 40 },
    { src: "/assets/company_logos/PIE.svg", alt: "PIE - Pierian Services", width: 100, height: 42 }
];

export default function BackersSection() {
    return (
        <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-black text-[42px] font-medium font-articulat">
                        Backed with conviction
                    </h2>
                    <p className="text-[#3F4346] text-xl font-medium font-articulat">
                        Partners aligned with building durable finance infrastructure
                    </p>
                </div>

                <div className="flex gap-3">
                    {backerLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
