import Image from "next/image";

const backerLogos = [
  {
    src: "/assets/company_logos/accel-logo.svg",
    alt: "Accel",
    width: 125,
    height: 40,
  },
  {
    src: "/assets/company_logos/pie-ventures-logo.svg",
    alt: "PIE - Pierian Services",
    width: 100,
    height: 42,
  },
];

export default function BackersSection() {
  return (
    <>
      {/* Mobile */}
      <div className="w-full bg-white py-12 px-5 lg:hidden ">
        <div className="max-w-[372px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-1">
            <h2 className="text-black text-[42px] font-medium font-articulat leading-normal">
              Backed with conviction
            </h2>
            <p className="text-[#3F4346] text-xl font-normal font-articulat leading-8">
              Partners aligned with building durable finance infrastructure
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {backerLogos.map((logo, index) => (
              <div
                key={index}
                className="w-full h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center"
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

      {/* Desktop */}
      <div className="w-full bg-white p-30 pb-[108px] hidden lg:block ">
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
    </>
  );
}
