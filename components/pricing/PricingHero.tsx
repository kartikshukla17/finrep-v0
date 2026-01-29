import Header from "@/components/layout/Header";
import PricingForm from "./PricingForm";

export default function PricingHero() {
    return (
        <div className="relative w-full min-h-screen bg-[#0D352A] overflow-hidden">
            {/* Fixed Header */}
            <Header variant="light" />

            <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-[100px] sm:pt-[110px] md:pt-[120px] lg:pt-[127px] pb-12 sm:pb-14 md:pb-16">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 sm:gap-10 md:gap-12">
                    {/* Left Side - Content */}
                    <div className="w-full max-w-[372px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-none lg:w-[564px] flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-[42px]">
                        <div className="flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6">
                            <h1 className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-normal font-articulat leading-tight">
                                Custom, scalable pricing for modern finance teams
                            </h1>
                            <p className="text-[#F4FBF8] text-base sm:text-lg lg:text-xl font-normal font-articulat leading-relaxed">
                                Our pricing adapts to your organization&apos;s needs, based on the modules you use, the scope you operate at, and the level of support you require.
                            </p>
                        </div>

                        {/* Security Badges */}
                        <div className="flex justify-start items-start gap-4">
                            <SecurityBadge src="/assets/images/SOC2.png" alt="SOC II badge" />
                            <SecurityBadge src="/assets/images/iso.png" alt="ISO 27001 badge" />
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <PricingForm />
                </div>
            </div>
        </div>
    );
}

function SecurityBadge({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center shrink-0">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain rounded-full"
            />
        </div>
    );
}
