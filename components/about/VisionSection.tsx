import { IconCard, defaultGreenFilter } from "../shared";

const visionItems = [
    {
        icon: "/assets/icons/uil_arrow-growth.svg",
        title: "A CFO office that scales with intelligence, not headcount"
    },
    {
        icon: "/assets/icons/mingcute_flash-fill.svg",
        title: "A world where financial reporting happens in minutes, not weeks"
    },
    {
        icon: "/assets/icons/ri_target-fill.svg",
        title: "A future where accuracy is assumed, not double-checked"
    },
    {
        icon: "/assets/icons/ic_round-star.svg",
        title: "Finance professionals empowered to do their best work, every day"
    }
];

export default function VisionSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                    The vision
                </h2>
                <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                    Finance professionals should think bigger. Not work longer.
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-[29px]">
                <div className="flex flex-col gap-3">
                    <h3 className="text-black text-lg font-semibold font-articulat">
                        What we&apos;re building toward
                    </h3>
                    <div className="flex flex-col gap-3">
                        {visionItems.map((item, index) => (
                            <IconCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                variant="compact"
                                iconFilter={defaultGreenFilter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
