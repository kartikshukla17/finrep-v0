import Image from "next/image";
import Link from "next/link";

// Navigation data
const navigationSections = [
    {
        title: "Features",
        links: [
            "Comment Letter Explorer",
            "Smart Search",
            "Disclosure Comparison",
            "Checklist Benchmarking",
            "Checklist Benchmarking",
            "AI Powered Disclosure Writer",
        ],
    },
    {
        title: "Usecases",
        links: [
            "For SEC Reporting",
            "For Controllers",
            "For Auditors",
            "For CFOs",
            "For Investor Relations",
        ],
    },
    {
        title: "Resources",
        links: [
            "Blogs",
            "Case Studies",
            "SEC Reporting Journal",
            "Documentations",
            "Brochure",
            "Security",
            "Privacy Policy",
            "Terms of Service",
        ],
        hasBadges: true,
    },
    {
        title: "Compare",
        links: ["Intelligize", "Alphasense", "Versance", "Hebbia", "Datadog"],
    },
    {
        title: "Company",
        links: ["About", "Become a Partner", "Pricing", "Contact", "Careers"],
    },
];

export default function Footer() {
    return (
        <div className="relative w-full bg-white">
            {/* Footer Image at Start */}
            <div className="absolute left-0 top-0 w-full h-[195px] lg:h-[681px] overflow-hidden flex justify-center">
                <Image
                    src="/assets/icons/footer.svg"
                    alt="Footer background"
                    width={1440}
                    height={681}
                    className="min-w-[412px] lg:min-w-[1440px] h-auto object-cover object-top"
                />
            </div>

            {/* Content - Overlaid on Image */}
            <div className="relative w-full max-w-[1440px] mx-auto px-5 lg:px-[120px] pt-[50px] lg:pt-[202px] pb-12 flex flex-col justify-start items-center gap-20 lg:gap-[120px]">
                {/* CTA Section */}
                <div className="w-full max-w-[372px] lg:max-w-[590px] flex flex-col justify-center items-center gap-6 lg:gap-9 text-center">
                    {/* Mobile Title */}
                    <h2 className="lg:hidden w-full text-[#0E0F10] text-[36px] font-normal font-articulat leading-[50.40px] text-center">
                        Cut days off your SEC filings
                    </h2>
                    {/* Desktop Title */}
                    <h2 className="hidden lg:block w-full max-w-[634px] text-[#0E0F10] text-[48px] font-normal font-articulat leading-[57.60px] whitespace-nowrap">
                        Solve SEC reporting for good
                    </h2>

                    {/* Mobile: Two buttons side by side, centered */}
                    <div className="lg:hidden flex justify-center items-center gap-2">
                        <button className="px-6 py-4 bg-[#29AB87] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#238f73] transition-colors">
                            <span className="text-[#F4FBF8] text-base font-medium font-articulat whitespace-nowrap">
                                Book a Demo
                            </span>
                        </button>
                        <button className="px-6 py-4 bg-[#0E0F10] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#2a2c2e] transition-colors">
                            <span className="text-[#F4FBF8] text-base font-medium font-articulat whitespace-nowrap">
                                Register for a Free Trial
                            </span>
                        </button>
                    </div>

                    {/* Desktop: Single button */}
                    <div className="hidden lg:flex justify-start items-start gap-6">
                        <button className="w-[283px] px-6 py-4 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#238f73] transition-colors">
                            <span className="text-[#F4FBF8] text-[20px] font-medium font-articulat whitespace-nowrap">
                                Request Access
                            </span>
                        </button>
                    </div>
                </div>

                {/* Navigation and Footer Content */}
                <div className="flex flex-col justify-start items-center gap-6 lg:gap-12 w-full">
                    {/* Mobile Navigation - Stacked vertically */}
                    <div className="lg:hidden w-full max-w-[372px] flex flex-col justify-center items-start gap-6">
                        {navigationSections.map((section, sectionIdx) => (
                            <div
                                key={sectionIdx}
                                className="flex flex-col justify-start items-start gap-3"
                            >
                                <span className="text-[#9FA4A9] text-xs font-medium font-articulat leading-[16.80px]">
                                    {section.title}
                                </span>
                                {section.links.map((link, linkIdx) => (
                                    <Link
                                        key={linkIdx}
                                        href="#"
                                        className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px] hover:text-[#29AB87] transition-colors"
                                    >
                                        {link}
                                    </Link>
                                ))}
                                {section.hasBadges && (
                                    <div className="flex justify-start items-start gap-4 mt-2">
                                        <img
                                            src="/assets/images/SOC2.png"
                                            alt="SOC II badge"
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                        <img
                                            src="/assets/images/iso.png"
                                            alt="ISO 27001 badge"
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Navigation - Grid layout */}
                    <div className="hidden lg:grid w-full max-w-[1200px] grid-cols-5 gap-6 justify-between">
                        {navigationSections.map((section, sectionIdx) => (
                            <div
                                key={sectionIdx}
                                className="flex flex-col justify-start items-start gap-4"
                            >
                                <span className="text-[#9FA4A9] text-base font-medium font-articulat leading-[22.40px]">
                                    {section.title}
                                </span>
                                {section.links.map((link, linkIdx) => (
                                    <Link
                                        key={linkIdx}
                                        href="#"
                                        className="text-[#0E0F10] text-base font-normal font-articulat leading-[22.40px] hover:text-[#29AB87] transition-colors"
                                    >
                                        {link}
                                    </Link>
                                ))}
                                {section.hasBadges && (
                                    <div className="flex justify-start items-start gap-4 mt-2">
                                        <img
                                            src="/assets/images/SOC2.png"
                                            alt="SOC II badge"
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                        <img
                                            src="/assets/images/iso.png"
                                            alt="ISO 27001 badge"
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Separator */}
                    <div className="w-full max-w-[372px] lg:max-w-[1200px] h-px bg-[#D9DBDD]" />

                    {/* Logo Section - finrep logo */}
                    <div className="flex justify-center items-center w-full">
                        <div className="relative w-full max-w-[372px] lg:max-w-[1100px] h-auto">
                            <Image
                                src="/assets/icons/Group 14.svg"
                                alt="finrep logo"
                                width={1100}
                                height={300}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full max-w-[372px] lg:max-w-[1200px] h-px bg-[#D9DBDD]" />

                    {/* Bottom Footer Bar */}
                    <div className="w-full max-w-[327px] lg:max-w-[1200px] pb-12 flex flex-row justify-between items-start lg:items-center">
                        {/* Social Media Icons */}
                        <div className="flex justify-start items-start gap-6">
                            <Link
                                href="#"
                                className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src="/assets/icons/pajamas_linkedin.svg"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </Link>
                            <Link
                                href="#"
                                className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src="/assets/icons/bi_twitter-x.svg"
                                    alt="Twitter/X"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* Backed by Accel */}
                        <div className="flex justify-center items-center gap-1">
                            <span className="text-center text-[#9FA4A9] text-base font-normal font-articulat leading-[25.60px]">
                                Backed by
                            </span>
                            <Image
                                src="/assets/icons/Accel_logo 1.svg"
                                alt="Accel logo"
                                width={50}
                                height={16}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
