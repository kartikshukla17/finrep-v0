import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header";

export default function AboutHero() {
    return (
        <div className="relative w-full min-h-screen bg-[#0D352A] overflow-hidden flex flex-col">
            {/* Capitol Building Image - Full width at bottom */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <div className="relative w-full" style={{ paddingBottom: '35.54%' }}>
                    <Image
                        src="/assets/images/image copy 2.png"
                        alt="US Capitol Building"
                        fill
                        className="object-cover"
                        style={{ mixBlendMode: 'multiply' }}
                        priority
                    />
                </div>
            </div>

            {/* Fixed Header */}
            <Header variant="light" />

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 py-20 pt-[92px]">
                <div className="max-w-[736px] flex flex-col justify-start items-center gap-6">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-[52px] font-normal font-articulat leading-tight md:leading-[60px] lg:leading-[72px] text-center">
                        Everything a CFO office does. Now powered by AI.
                    </h1>
                    <button className="px-6 pr-4 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                        <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                            Explore open roles
                        </span>
                        <ArrowRight className="w-6 h-6 text-[#F9F9FA]" strokeWidth={2} />
                    </button>
                </div>
            </div>
        </div>
    );
}
