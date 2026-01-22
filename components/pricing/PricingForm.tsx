'use client';

import Image from "next/image";
import { useState } from "react";

interface FormData {
    email: string;
    phone: string;
    company: string;
    role: string;
    subscribe: boolean;
}

export default function PricingForm() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        company: '',
        role: '',
        subscribe: false
    });

    const isFormValid = formData.email && formData.phone && formData.company && formData.subscribe;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    return (
        <div className="w-full lg:w-[564px] p-6 bg-white rounded-xl">
            <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start gap-9">
                <div className="w-full flex flex-col justify-start items-start gap-5">
                    {/* Company Logo */}
                    <div className="w-12 h-12 relative overflow-hidden rounded-[6.75px] flex items-center justify-center" style={{
                        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(150deg, #48E3B9 0%, rgba(35, 177, 138, 0.30) 73%), #23B18A",
                        backdropFilter: "blur(76.19px)"
                    }}>
                        <Image
                            src="/assets/icons/Group 1814106612.svg"
                            alt="Company logo"
                            width={18}
                            height={25}
                            className="object-contain"
                        />
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        <h2 className="text-[#0E0F10] text-2xl md:text-[32px] font-semibold font-articulat leading-tight md:leading-[44.80px]">
                            Get custom pricing
                        </h2>

                        <div className="w-full flex flex-col justify-start items-start gap-6">
                            {/* Input Fields */}
                            <div className="w-full flex flex-col justify-start items-start gap-4">
                                {/* Work Email */}
                                <FormField
                                    label="Work Email*"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(value) => setFormData({ ...formData, email: value })}
                                    placeholder="name@company.com"
                                />

                                {/* Phone */}
                                <FormField
                                    label="Phone*"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(value) => setFormData({ ...formData, phone: value })}
                                    placeholder="(XXX) XXX-XXXX"
                                />

                                {/* Company */}
                                <FormField
                                    label="Company*"
                                    type="text"
                                    required
                                    value={formData.company}
                                    onChange={(value) => setFormData({ ...formData, company: value })}
                                    placeholder="ACME Corp"
                                />

                                {/* Role Select */}
                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                    <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                                        Role
                                    </label>
                                    <div className="relative w-full">
                                        <select
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full h-9 px-3 py-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent appearance-none pr-10 cursor-pointer transition-all hover:border-[#29AB87]/30"
                                            style={{ color: formData.role ? '#525252' : '#9FA4A9' }}
                                        >
                                            <option value="" disabled>Select Role</option>
                                            <option value="cfo">CFO</option>
                                            <option value="controller">Controller</option>
                                            <option value="accountant">Accountant</option>
                                            <option value="analyst">Financial Analyst</option>
                                            <option value="director">Finance Director</option>
                                            <option value="vp">VP Finance</option>
                                            <option value="manager">Finance Manager</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                className="transition-colors"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke={formData.role ? '#29AB87' : '#9FA4A9'}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M4 6l4 4 4-4"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="w-full flex justify-start items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="subscribe"
                                    checked={formData.subscribe}
                                    onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                                    className="w-4 h-4 mt-0.5 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded border border-[#E5E5E5] text-[#29AB87] focus:ring-2 focus:ring-[#29AB87] cursor-pointer shrink-0"
                                />
                                <label htmlFor="subscribe" className="flex-1 text-[#0A2920] text-sm font-medium font-inter leading-5 cursor-pointer">
                                    I would like to receive product updates, research insights, and regulatory content from Finrep.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full px-6 py-2 rounded-lg flex justify-center items-center gap-2.5 text-[#F4FBF8] text-base font-medium font-articulat transition-all ${isFormValid
                        ? 'bg-[#29AB87] hover:bg-[#238f73] cursor-pointer'
                        : 'bg-[#9FA4A9] cursor-not-allowed opacity-50'
                        }`}
                >
                    Get Pricing
                </button>
            </form>
        </div>
    );
}

interface FormFieldProps {
    label: string;
    type: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

function FormField({ label, type, required, value, onChange, placeholder }: FormFieldProps) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-3">
            <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                {label}
            </label>
            <input
                type={type}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full h-9 px-3 py-1 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-[#525252] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent"
            />
        </div>
    );
}
