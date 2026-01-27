import Image from "next/image";

const companyLogosMobile = [
  {
    src: "/assets/icons/company_logo/circle-logo.svg",
    alt: "Circle",
    width: 164,
    height: 42,
  },
  {
    src: "/assets/icons/company_logo/infosys-logo.svg",
    alt: "Infosys",
    width: 114,
    height: 42,
  },
  {
    src: "/assets/icons/company_logo/exl-logo.svg",
    alt: "EXL",
    width: 99,
    height: 36,
  },
  {
    src: "/assets/icons/company_logo/hp-logo.svg",
    alt: "HP",
    width: 48,
    height: 48,
  },
  {
    src: "/assets/icons/company_logo/wells-fargo-logo.svg",
    alt: "Wells Fargo",
    width: 248,
    height: 25,
  },
  {
    src: "/assets/icons/company_logo/ringcentral-logo.svg",
    alt: "RingCentral",
    width: 226,
    height: 32,
  },
];

const companyLogosDesktop = [
  [
    {
      src: "/assets/icons/company_logo/circle-logo.svg",
      alt: "Circle",
      width: 164,
      height: 42,
    },
    {
      src: "/assets/icons/company_logo/infosys-logo.svg",
      alt: "Infosys",
      width: 114,
      height: 42,
    },
    {
      src: "/assets/icons/company_logo/exl-logo.svg",
      alt: "EXL",
      width: 99,
      height: 36,
    },
  ],
  [
    {
      src: "/assets/icons/company_logo/hp-logo.svg",
      alt: "HP",
      width: 48,
      height: 48,
    },
    {
      src: "/assets/icons/company_logo/wells-fargo-logo.svg",
      alt: "Wells Fargo",
      width: 248,
      height: 25,
    },
    {
      src: "/assets/icons/company_logo/ringcentral-logo.svg",
      alt: "RingCentral",
      width: 226,
      height: 32,
    },
  ],
];

export default function TrustedCompanies() {
  return (
    <div className="w-full bg-white border-b border-[#ECEDEE]">
      <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-10 py-12 lg:py-20">
        <div className="w-full max-w-[372px] lg:max-w-none mx-auto lg:mx-0 flex flex-col justify-center items-start gap-8 lg:gap-[42px]">
          {/* Header - Mobile */}
          <div className="w-full flex flex-col justify-start items-start gap-2 lg:hidden">
            <h2 className="w-full text-[#0E0F10] text-[42px] font-medium font-articulat leading-[58.80px]">
              Trusted by teams operating at scale
            </h2>
            <p className="w-full text-[#3F4346] text-xl font-medium font-articulat leading-8">
              Leading enterprises rely on Finrep for accuracy, speed, and
              defensibility.
            </p>
          </div>

          {/* Header - Desktop */}
          <div className="hidden lg:flex w-full flex-col justify-start items-start gap-2">
            <h2 className="w-full text-[#0E0F10] text-[36px] font-medium font-articulat mb-6 leading-[43.20px]">
              Trusted by teams operating at scale
            </h2>
            <p className="w-full text-[#3F4346] text-xl font-normal font-articulat leading-[30px]">
              Leading enterprises rely on Finrep for accuracy, speed, and
              defensibility.
            </p>
          </div>

          {/* Mobile: Single column */}
          <div className="w-full flex flex-col gap-6 lg:hidden">
            {companyLogosMobile.map((logo, index) => (
              <div
                key={index}
                className="w-full h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-[48px] max-w-[70%]"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:flex lg:flex-col lg:gap-6 w-full">
            {companyLogosDesktop.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full flex justify-start items-stretch gap-6"
              >
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
                      className="object-contain max-h-[48px] max-w-[70%]"
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
