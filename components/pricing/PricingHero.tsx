import Header from "@/components/layout/Header";
import PricingForm from "./PricingForm";

export default function PricingHero() {
    return (
        <div className="relative w-full bg-[#0D352A] overflow-hidden">
            {/* Fixed Header */}
            <Header variant="light" />

            <div className="relative w-full max-w-[1440px] mx-auto px-5 lg:px-[120px] py-12 lg:py-16 pt-[100px]">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8">
                    {/* Left Side - Content */}
                    <div className="w-full max-w-[372px] lg:max-w-none lg:w-[564px] flex flex-col justify-start items-start gap-8 lg:gap-[42px]">
                        <div className="flex flex-col justify-start items-start gap-6">
                            <h1 className="text-white text-[36px] lg:text-[42px] font-medium font-articulat leading-[50.40px] lg:leading-[58.80px]">
                                Custom, scalable pricing for modern finance teams
                            </h1>
                            <p className="text-[#F4FBF8] text-base lg:text-xl font-normal font-articulat leading-6 lg:leading-[30px]">
                                Our pricing adapts to your organization&apos;s needs, based on the modules you use, the scope you operate at, and the level of support you require.
                            </p>
                        </div>

                        {/* Security Badges */}
                        <div className="flex justify-start items-start gap-4">
                            <SecurityBadge src="/assets/images/SOC2.png" alt="SOC II badge" />
                            <SecurityBadge src="/assets/images/image 3628.png" alt="ISO 27001 badge" />
                            <SecurityBadge src="/assets/images/image copy.png" alt="Security badge" />
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
        <div className="w-16 h-16 lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center shrink-0">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain rounded-full"
            />
        </div>
    );
}
