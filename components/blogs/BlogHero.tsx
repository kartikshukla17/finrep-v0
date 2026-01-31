import Header from "@/components/layout/Header";
import Image from "next/image";

export default function BlogHero() {
  return (
    <div className="relative w-full bg-[#0D352A] overflow-hidden">
      {/* Fixed Header */}
      <Header variant="light" />

      {/* Desktop Layout - exact design specs */}
      <div className="hidden lg:flex w-full max-w-[1440px] mx-auto flex-col justify-start items-center gap-24 pt-[128px] pb-24 px-10">
        {/* Title and Subtitle Section */}
        <div className="flex flex-col justify-start items-center gap-6 text-center">
          <h1 className="w-[900px] text-white text-[64px] font-normal font-articulat leading-[89.60px]">
            Blogs
          </h1>
          <p className="w-[822px] text-[#F4FBF8] text-xl font-normal font-articulat leading-8">
            Expert insights on financial disclosure, compliance, and the future
            of CFO operations
          </p>
        </div>

        {/* Featured Blog Section - space-between layout */}
        {/* <div className="w-full flex flex-row justify-between items-center">
                    {/* Text Content - 544px width */}
        {/* <div className="w-[544px] flex flex-col justify-start items-start gap-12">
                        <h2 className="w-full text-[#F9F9FA] text-[36px] font-medium font-articulat leading-[43.20px]">
                            From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                            SEC Disclosure Triggers
                        </h2>
                        <button className="px-9 py-4 rounded-lg border border-[#29AB87] flex justify-center items-center gap-2 hover:bg-[#29AB87]/10 transition-colors">
                            <div className="w-6 h-6 relative shrink-0">
                                <Image
                                    src="/assets/icons/pdf.svg"
                                    alt="PDF icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#F4FBF8] text-xl font-medium font-articulat">
                                Free Download
                            </span>
                        </button>
                    </div> */}

        {/* Image - 768px x 496px */}
        {/* <div className="w-[768px] h-[496px] relative rounded-2xl border-2 border-[#269C7B] overflow-hidden shrink-0">
                        <Image
                            src="/assets/images/articleimage.png"
                            alt="How OFAC Violations Create Immediate SEC Disclosure Triggers"
                            fill
                            className="object-cover"
                        />
                    </div> */}
        {/* </div> */}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col justify-start items-center gap-12 pt-[128px] pb-24 px-5">
        {/* Title and Subtitle Section */}
        <div className="w-full max-w-[372px] flex flex-col justify-start items-center gap-6 text-center">
          <h1 className="text-white text-[36px] font-normal font-articulat leading-[50.40px]">
            Blogs
          </h1>
          <p className="text-[#F4FBF8] text-base font-normal font-articulat leading-[25.60px]">
            Expert insights on financial disclosure, compliance, and the future
            of CFO operations
          </p>
        </div>

        {/* Featured Blog Cards Section */}
        <div className="w-full max-w-[372px] flex flex-col justify-start items-center gap-4">
          {/* Image */}
          <div className="w-full h-[240px] relative rounded-lg border border-[#269C7B] overflow-hidden">
            <Image
              src="/assets/images/articleimage.png"
              alt="How OFAC Violations Create Immediate SEC Disclosure Triggers"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          {/* <div className="flex flex-col justify-start items-start gap-3 w-full">
            <h2 className="w-full text-[#F9F9FA] text-xl font-medium font-articulat leading-7">
              From Sanctions to Scrutiny: How OFAC Violations Create Immediate
              SEC Disclosure Triggers
            </h2>
            <button className="w-full px-9 py-3 rounded-lg border border-[#29AB87] flex justify-center items-center gap-2 hover:bg-[#29AB87]/10 transition-colors">
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/assets/icons/pdf.svg"
                  alt="PDF icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                Free Download
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
