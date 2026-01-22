import { CompanyLogoGrid } from "../shared";

const experienceLogos = [
    [
        { src: "/assets/company_logos/Vector.svg", alt: "JPMorgan Chase", width: 182, height: 26, opacity: "opacity-80", mixBlendMode: true },
        { src: "/assets/company_logos/images 2.png", alt: "Sixt", width: 96, height: 54, opacity: "opacity-70", mixBlendMode: true },
        { src: "/assets/company_logos/image 3681.png", alt: "Strive", width: 140, height: 73, opacity: "opacity-70", mixBlendMode: true }
    ],
    [
        { src: "/assets/company_logos/YC.png", alt: "Y Combinator", width: 194, height: 37, mixBlendMode: true },
        { src: "/assets/company_logos/Meeso.png", alt: "Meesho", width: 114, height: 40, opacity: "opacity-70", mixBlendMode: true },
        { src: "/assets/company_logos/flipkart-logo 1.png", alt: "Flipkart", width: 212, height: 84, mixBlendMode: true }
    ]
];

export default function ExperienceSection() {
    return (
        <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <div className="flex flex-col text-center">
                    <h2 className="text-black text-[42px] font-medium font-articulat">
                        Built with experience
                    </h2>
                    <p className="text-[#3F4346] text-xl font-medium font-articulat">
                        Shaped by teams operating in complex, high-stakes environments
                    </p>
                </div>

                <CompanyLogoGrid logos={experienceLogos} />
            </div>
        </div>
    );
}
