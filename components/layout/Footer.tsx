import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="relative w-full bg-white">
            {/* Footer Image at Start */}
            <div className="absolute left-0 top-0 w-full h-full lg:h-[681px]">
                <Image
                    src="/assets/images/image 3627.png"
                    alt="Footer background"
                    fill
                // className="object-cover opacity-10"
                />
            </div>

            {/* Content - Overlaid on Image */}
            <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] pt-12 md:pt-[100px] lg:pt-[202px] pb-12 flex flex-col justify-start items-center gap-12 md:gap-[80px] lg:gap-[120px]">
                {/* CTA Section */}
                <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-9 text-center">
                    <div className="w-full max-w-[634px] text-[#0E0F10] text-3xl md:text-[40px] lg:text-[48px] font-normal font-articulat leading-tight md:leading-[1.2] lg:leading-[57.60px] break-words">
                        Solve SEC reporting for good
                    </div>
                    <div className="flex justify-start items-start gap-6">
                        <div className="px-6 py-4 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#238f73] transition-colors">
                            <div className="text-[#F4FBF8] text-lg md:text-[20px] font-medium font-articulat break-words whitespace-nowrap">
                                Request Access
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation and Footer Content */}
                <div className="flex flex-col justify-start items-center gap-12 w-full">

                    {/* Navigation Columns - Grid on desktop, Flex-col on mobile */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-12 items-start justify-between">
                        {/* Resources Column */}
                        <div className="flex flex-col justify-start items-start gap-4 relative">
                            <div className="text-[#9FA4A9] text-base font-medium font-articulat leading-[22.40px] break-words">
                                Resources
                            </div>
                            {[
                                { name: "Blogs", href: "/blogs" },
                                { name: "Pricing", href: "/pricing" },
                                { name: "About", href: "/about" },
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-[#0E0F10] text-base font-normal font-articulat leading-[22.40px] break-words hover:text-[#29AB87] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* Security Badges */}
                            <div className="flex justify-start items-start gap-4 mt-2 relative z-10">
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shrink-0" style={{
                                    boxShadow: "4.29px 5.71px 11.43px rgba(0, 0, 0, 0.10)",
                                    overflow: "visible"
                                }}>
                                    <img
                                        src="/assets/images/image 305.png"
                                        alt="SOC II badge"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center border border-white shrink-0" style={{
                                    background: "linear-gradient(135deg, white 35%, #D7D7D7 77%)",
                                    boxShadow: "4.29px 5.71px 11.43px rgba(0, 0, 0, 0.10)",
                                    overflow: "visible"
                                }}>
                                    <img
                                        src="/assets/images/image 3628.png"
                                        alt="ISO 27001 badge"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Compare Column */}
                        <div className="flex flex-col justify-start items-start gap-4">
                            <div className="text-[#9FA4A9] text-base font-medium font-articulat leading-[22.40px] break-words">
                                Compare
                            </div>
                            {[
                                "Intelligize",
                                "Alphasense",
                                "Versance",
                                "Hebbia",
                                "Datadog",
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="text-[#0E0F10] text-base font-normal font-articulat leading-[22.40px] break-words hover:text-[#29AB87] transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Company Column */}
                        <div className="flex flex-col justify-start items-start gap-4">
                            <div className="text-[#9FA4A9] text-base font-medium font-articulat leading-[22.40px] break-words">
                                Company
                            </div>
                            {[
                                "About",
                                "Become a Partner",
                                "Pricing",
                                "Contact",
                                "Careers",
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="text-[#0E0F10] text-base font-normal font-articulat leading-[22.40px] break-words hover:text-[#29AB87] transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-px bg-[#D9DBDD]"></div>

                    {/* Logo Section - finrep logo */}
                    <div className="flex justify-center items-center w-full">
                        <div className="relative w-full max-w-[1100px] h-auto">
                            <Image
                                src="/assets/icons/Group 14.svg"
                                alt="finrep logo"
                                width={1100}
                                height={300}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Bottom Footer Bar */}
                    <div className="w-full pb-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                        {/* Social Media Icons */}
                        <div className="flex justify-start items-start gap-6">
                            <Link href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity">
                                <Image
                                    src="/assets/icons/pajamas_linkedin.svg"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </Link>
                            <Link href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity">
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
                            <div className="text-center text-[#9FA4A9] text-base font-normal font-articulat leading-[25.60px] break-words">
                                Backed by
                            </div>
                            <div className="w-[49.90px] h-4 relative overflow-hidden">
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
        </div>
    );
}
