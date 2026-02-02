import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "../layout/Header";

export default function AboutHero() {
  return (
    <div className="relative w-full min-h-screen bg-[#0D352A] overflow-hidden flex flex-col">
      {/* Capitol Building Image - Mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1843px] lg:hidden">
        <div className="relative w-full h-[400px]">
          <Image
            src="/assets/images/image copy 2.webp"
            alt="US Capitol Building"
            fill
            className="object-cover"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </div>
      </div>
      {/* Capitol Building Image - Desktop */}
      <div className="absolute bottom-0 left-0 right-0 w-full hidden lg:block">
        <div className="relative w-full" style={{ paddingBottom: "35.54%" }}>
          <Image
            src="/assets/images/image copy 2.webp"
            alt="US Capitol Building"
            fill
            className="object-cover"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </div>
      </div>

      {/* Fixed Header */}
      <Header variant="light" />

      {/* Hero Content - Mobile */}
      <div className="relative z-10 flex-1 flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 pt-[140px] sm:pt-[160px] md:pt-[180px] pb-16 sm:pb-20 lg:hidden">
        <div className="w-full max-w-[372px] sm:max-w-[480px] md:max-w-[560px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-9">
          <h1 className="text-white text-[28px] sm:text-[32px] md:text-[40px] font-medium font-articulat leading-tight text-center">
            Everything a CFO office does. Now powered by AI.
          </h1>
          <button className="px-5 sm:px-6 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2 sm:gap-2.5 hover:bg-[#238f73] transition-colors">
            <span className="text-[#F4FBF8] text-base sm:text-lg font-medium font-articulat">
              Explore open roles
            </span>
            <ArrowRight
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#F9F9FA]"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      {/* Hero Content - Desktop */}
      <div className="relative z-10 flex-1 hidden lg:flex flex-col justify-center items-center px-6 py-20 pt-[92px]">
        <div className="max-w-[736px] flex flex-col justify-start items-center gap-6">
          <h1 className="text-white text-[52px] font-normal font-articulat leading-[72px] text-center">
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
