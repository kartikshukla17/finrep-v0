import Image from "next/image";
import { Plus, Globe, Paperclip, ArrowRight, Grid2X2Check } from "lucide-react";

export default function CommentLetterExplorer() {
    return (
        <div className="w-full bg-white">
            <div className="w-full flex items-start gap-7">
                {/* Left Section - Content */}
                <div className="flex-1 pt-[60px] pb-[60px] pl-[120px] flex flex-col justify-start items-start gap-12">
                    {/* Navigation Tags */}
                    <div className="self-stretch rounded-[50px] flex justify-start items-center gap-2 flex-wrap">
                        <div className="px-[19px] py-2 bg-[#D6F5EC] shadow-[0px_0px_8px_rgba(0,135,67,0.09)_inset] rounded-[60px] border border-[#21886B] flex flex-col justify-center items-center gap-2.5">
                            <div className="text-[#134E3D] text-sm font-medium font-articulat leading-[19.60px]">
                                SEC Reporting
                            </div>
                        </div>
                        <div className="px-[19px] py-2 bg-white rounded-[60px] border border-[#D9DBDD] flex flex-col justify-center items-center gap-2.5">
                            <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px]">
                                Investor Relations
                            </div>
                        </div>
                        <div className="px-[19px] py-2 bg-white rounded-[60px] border border-[#D9DBDD] flex flex-col justify-center items-center gap-2.5">
                            <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px]">
                                Legal
                            </div>
                        </div>
                        <div className="px-[19px] py-2 bg-white rounded-[60px] border border-[#D9DBDD] flex flex-col justify-center items-center gap-2.5">
                            <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px]">
                                Technical Accounting
                            </div>
                        </div>
                    </div>

                    {/* Main Content with Numbered List */}
                    <div className="self-stretch flex justify-start items-start gap-[60px]">
                        {/* Numbered List */}
                        <div className="flex flex-col justify-start items-start">
                            <div className="flex justify-start items-center gap-1">
                                <div className="w-px h-20 bg-[#29AB87]"></div>
                                <div className="text-[#29AB87] text-xs font-normal font-articulat">1</div>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <div className="w-px h-20 bg-[#ECEDEE]"></div>
                                <div className="text-[#0E0F10] text-xs font-normal font-articulat">2</div>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <div className="w-px h-20 bg-[#ECEDEE]"></div>
                                <div className="text-[#0E0F10] text-xs font-normal font-articulat">3</div>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <div className="w-px h-20 bg-[#ECEDEE]"></div>
                                <div className="text-[#0E0F10] text-xs font-normal font-articulat">4</div>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <div className="w-px h-20 bg-[#ECEDEE]"></div>
                                <div className="text-[#0E0F10] text-xs font-normal font-articulat">5</div>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="flex-1 flex flex-col justify-start items-start gap-24">
                            {/* Title and Description Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-9">
                                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                    <div className="self-stretch text-[#0E0F10] text-4xl font-medium font-articulat leading-[43.20px]">
                                        Minimize Scrutiny with Comment Letter Explorer
                                    </div>
                                    <div className="self-stretch text-[#5E6469] text-xl font-normal font-articulat leading-7">
                                        Leverage our AI to get insights, summaries, conclusion, and focus areas-tagged, so you know what triggers scrutiny.
                                    </div>
                                </div>

                                {/* Benefits List */}
                                <div className="flex flex-col justify-start items-start gap-3">
                                    <div className="flex justify-center items-center gap-2.5">
                                        <div className="w-5 h-5 relative bg-[#0E0F10] rounded">
                                            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-b from-[#F9F9FA] to-[#F9F9FA] rounded-[12.64px]"></div>
                                        </div>
                                        <div className="text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                                            Early SEC focus visiblity
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-2.5">
                                        <div className="w-5 h-5 relative bg-[#0E0F10] rounded">
                                            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-b from-[#F9F9FA] to-[#F9F9FA] rounded-[12.64px]"></div>
                                        </div>
                                        <div className="text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                                            Fewer Late Replies
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-2.5">
                                        <div className="w-5 h-5 relative bg-[#0E0F10] rounded">
                                            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-b from-[#F9F9FA] to-[#F9F9FA] rounded-[12.64px]"></div>
                                        </div>
                                        <div className="text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                                            Reduced Comment Risk
                                        </div>
                                        <div className="p-1 bg-gradient-to-br from-[#CC1C0F] to-[#FFAF42] rounded-lg flex justify-center items-center gap-1">
                                            <Image src="/assets/icons/solar_star-fall-2-bold-duotone.svg" alt="Most Liked" width={16} height={16} />
                                            <div className="text-white text-xs font-semibold font-articulat leading-[16.80px]">
                                                Most Liked
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex justify-start items-center gap-4">
                                <button className="px-6 py-2 rounded-lg border border-[#29AB87] flex justify-center items-center gap-1 hover:bg-gray-50 transition-colors">
                                    <span className="text-[#269C7B] text-base font-medium font-articulat">
                                        Try Now
                                    </span>
                                    <ArrowRight className="w-6 h-6 text-[#29AB87]" strokeWidth={2} />
                                </button>
                                <button className="px-6 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                                    <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                                        Request Access
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Interface Mockup */}
                <div className="flex-1 h-[800px] relative shadow-[7px_0px_30px_rgba(0,0,0,0.10)_inset] overflow-hidden rounded-tl-[20px] rounded-bl-[20px]">
                    {/* Background Gradient */}
                    <div className="w-full h-full absolute inset-0">
                        <Image
                            src="/assets/illustrations/gradient.svg"
                            alt="Background gradient"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Chat Interface */}
                    <div className="w-[720.03px] absolute left-[97px] top-[286px] flex flex-col justify-start items-center gap-[22.15px]">
                        {/* Tabs */}
                        <div className="self-stretch flex justify-center items-center gap-[11.08px] flex-wrap">
                            <div className="pt-[8.31px] pb-[8.31px] pl-[11.08px] pr-[16.62px] bg-gradient-to-br from-[rgba(6.66,196.88,144.20,0.16)] via-[rgba(19.09,151,114.47,0.16)] to-[rgba(11.74,184.74,136.83,0.16)] bg-white rounded-[58.16px] flex justify-start items-center gap-[8.31px]">
                                <div className="w-[22.15px] h-[22.15px] relative overflow-hidden flex items-center justify-center">
                                    <Image src="/assets/icons/lucide-3.svg" alt="Chat" width={22} height={22} />
                                </div>
                                <div className="flex justify-center flex-col text-[#134E3D] text-[16.62px] font-semibold font-articulat leading-[22.15px] tracking-[0.33px]">
                                    Chat
                                </div>
                            </div>
                            <div className="pt-[8.31px] pb-[8.31px] pl-[11.08px] pr-[16.62px] bg-white rounded-[27.69px] border border-[#ECEDEE] flex justify-start items-center gap-[8.31px]">
                                <Image src="/assets/images/image 3625.png" alt="Search" width={22} height={22} />
                                <div className="flex justify-center flex-col text-[#5E6469] text-[16.62px] font-medium font-articulat leading-[22.15px] tracking-[0.33px]">
                                    Search
                                </div>
                            </div>
                            <div className="pt-[8.31px] pb-[8.31px] pl-[11.08px] pr-[16.62px] bg-white rounded-[27.69px] border border-[#ECEDEE] flex justify-start items-center gap-[8.31px]">
                                <Grid2X2Check className="w-[22.15px] h-[22.15px] text-[#5E6469]" strokeWidth={1.5} />
                                <div className="flex justify-center flex-col text-[#5E6469] text-[16.62px] font-medium font-articulat leading-[22.15px] tracking-[0.33px]">
                                    Compare
                                </div>
                            </div>
                            <div className="pt-[8.31px] pb-[8.31px] pl-[11.08px] pr-[16.62px] bg-white rounded-[27.69px] border border-[#ECEDEE] flex justify-start items-center gap-[8.31px]">
                                <Image src="/assets/icons/Group 2.svg" alt="Draft" width={22} height={22} />
                                <div className="flex justify-center flex-col text-[#5E6469] text-[16.62px] font-medium font-articulat leading-[22.15px] tracking-[0.33px]">
                                    Draft
                                </div>
                            </div>
                        </div>

                        {/* Chat Input Card */}
                        <div className="self-stretch bg-white shadow-[0px_2.769px_5.539px_rgba(0,0,0,0.05)] overflow-hidden rounded-[22.15px] border border-[#ECEDEE] flex flex-col justify-start items-start">
                            <div className="self-stretch p-[11.08px] bg-white overflow-hidden rounded-t-[22.15px] flex flex-col justify-start items-start gap-[11.08px]">
                                <div className="self-stretch flex flex-col justify-start items-end gap-[5.54px]">
                                    <div className="self-stretch p-[5.54px] flex justify-start items-start">
                                        <div className="flex-1 flex justify-center flex-col text-[#9FA4A9] text-[19.39px] font-medium font-articulat leading-[27.69px] tracking-[0.39px]">
                                            Type / to use assistant...
                                        </div>
                                    </div>
                                    <div className="self-stretch flex justify-between items-end">
                                        <div className="w-[461.10px] flex justify-start items-center gap-[5.54px]">
                                            <div className="pt-[8.31px] pb-[8.31px] pl-[8.31px] pr-[11.08px] rounded-[11.08px] border border-[#D9DBDD] flex justify-start items-center gap-[5.54px]">
                                                <Plus className="w-[22.15px] h-[22.15px] text-[#5E6469]" strokeWidth={1.85} />
                                                <div className="flex justify-center flex-col text-[#5E6469] text-[16.62px] font-medium font-articulat leading-[22.15px] tracking-[0.33px]">
                                                    Add file
                                                </div>
                                            </div>
                                            <div className="w-[139.85px] pt-[8.31px] pb-[8.31px] pl-[8.31px] pr-[11.08px] bg-white rounded-[11.08px] flex justify-start items-center gap-[5.54px]" style={{ outline: '1.38px solid #D9DBDD', outlineOffset: '-1.38px' }}>
                                                <div className="w-[22.15px] h-[22.15px] relative overflow-hidden">
                                                    <Globe className="w-[18.46px] h-[18.46px] absolute left-[1.85px] top-[1.85px] text-[#5E6469]" strokeWidth={1.85} />
                                                </div>
                                                <div className="flex justify-center flex-col text-[#5E6469] text-[16.62px] font-medium font-articulat leading-[22.15px] tracking-[0.33px]">
                                                    Web search
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center gap-[11.08px]">
                                            <div className="p-[11.08px] overflow-hidden rounded-[8.31px] flex justify-center items-center gap-[8.31px]">
                                                <Paperclip className="w-[22.15px] h-[22.15px] text-[#1C735A]" strokeWidth={1.2} />
                                            </div>
                                            <div className="p-[11.08px] bg-gradient-to-b from-[#18B98C] from-[30%] to-[#1D7C62] overflow-hidden rounded-[8.31px] border border-[#21886B] flex justify-center items-center gap-[8.31px]">
                                                <ArrowRight className="w-[22.15px] h-[22.15px] text-[#F9F9FA]" strokeWidth={1.85} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
