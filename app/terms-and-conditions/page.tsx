import ArticleHeader from "@/components/blogs/ArticleHeader";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = pageMetadata.terms;

// Custom components for ReactMarkdown
const markdownComponents: Components = {
  h1: ({ children, id }) => (
    <h1
      id={id}
      className="text-3xl md:text-4xl font-semibold text-[#0E0F10] mt-10 mb-6 font-articulat scroll-mt-28"
    >
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="text-2xl md:text-[28px] font-medium text-[#0E0F10] mt-10 mb-4 font-articulat leading-tight scroll-mt-28"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="text-xl md:text-2xl font-medium text-[#0E0F10] mt-8 mb-3 font-articulat scroll-mt-28"
    >
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4
      id={id}
      className="text-lg md:text-xl font-medium text-[#0E0F10] mt-6 mb-2 font-articulat scroll-mt-28"
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-base leading-7 text-[#0E0F10] mb-4 font-articulat">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-[#0E0F10] font-articulat">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 my-4 space-y-2 text-[#0E0F10] font-articulat">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-7 text-[#0E0F10]">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#17453E] pl-4 my-6 italic text-[#5E6469] font-articulat">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#17453E] underline hover:text-[#0D352A] transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-[#F5F5F5] text-[#17453E] px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    return <code className={`${className} block`}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-[#E5E7EB]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#F9FAFB]">{children}</thead>,
  th: ({ children }) => (
    <th className="border border-[#E5E7EB] px-4 py-2 text-left font-medium text-[#0E0F10]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[#E5E7EB] px-4 py-2 text-[#0E0F10]">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-t border-[#E5E7EB]" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-[#0E0F10]">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};

const termsContent = `Effective Date: June 24, 2025

### Introduction

Please read these Terms of Service (these "Terms") carefully as they govern your access to and use of [www.finrep.ai](http://www.finrep.ai/) and any related web applications, platforms, or services owned and operated by Finrep Inc. (collectively, the "Finrep Services" or "Services").

These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity, "you") and Finrep Inc. ("Finrep," "we," "our," or "us") regarding your use of the Services. If you are accessing or using the Services on behalf of an organization, you represent and warrant that you are authorized to bind that organization to these Terms, and "you" includes both you individually and the organization.

By accessing or using the Finrep Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any provision herein, you must not access or use the Services.

We reserve the right to update these Terms at any time by posting the revised version to our website. You waive any right to receive specific notice of each such change. Your continued use of the Services following any changes constitutes acceptance of those changes.

### Eligibility & Representations

By accessing or using the Services, you represent and warrant that:

- All information you provide to us is accurate, current, and complete.

- You have legal capacity to agree to these Terms.

- You are at least 18 years of age or the age of majority in your jurisdiction.

- You are not prohibited from using the Services under applicable law.

- You are not accessing the Services through automated means without authorization.

- Your use of the Services complies with all applicable laws and regulations.

If you provide any information that is false, misleading, outdated, or incomplete, we reserve the right to suspend or terminate your access.

### Prohibited Uses

You agree not to use the Services to:

- Collect or harvest data or materials without authorization.

- Misrepresent your identity or affiliation.

- Circumvent any security or access controls.

- Transmit malicious software or code.

- Infringe on the intellectual property rights of others.

- Interfere with the performance or functionality of the Services.

- Reverse-engineer, decompile, or attempt to extract the source code of our software.

- Violate any applicable law or regulation.

Unauthorized use may result in termination of your access and legal action.

### Intellectual Property

All content, materials, software, code, data, designs, trademarks, and other intellectual property within or related to the Services ("Materials") are owned by Finrep or its licensors and are protected under applicable intellectual property laws.

Except as expressly authorized, you may not use, reproduce, modify, distribute, or create derivative works based on the Services or Materials. All rights not expressly granted to you under these Terms are reserved by Finrep.

### Feedback

You may provide comments, suggestions, or other feedback related to the Services ("Feedback"). You agree that all Feedback becomes the exclusive property of Finrep, and we may use it without restriction or compensation to you.

### License & Access

Subject to compliance with these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Services solely for your internal business or personal purposes.

You may not:

- Reproduce or redistribute the Services or Materials.

- Use the Services to build a competitive product.

- Sub-license or transfer access to another party without permission.

### Privacy

Your use of the Services is subject to our [Privacy Policy](https://finrep.ai/pages/privacy), which governs how we collect, use, and share your information. By using the Services, you consent to the practices described in our Privacy Policy.

### Service Availability

We reserve the right to modify, suspend, or discontinue the Services (or any part thereof) at any time with or without notice. We are not liable for any modification, suspension, or discontinuance.

We do not guarantee continuous availability of the Services and are not responsible for outages or interruptions caused by factors beyond our control, including third-party services or internet providers.

### Third-Party Links

The Services may contain links to third-party websites or services. We are not responsible for the content, availability, or practices of such third parties. Your use of third-party websites is at your own risk and subject to their respective terms.

### DISCLAIMERS

THE SERVICES AND ALL MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.

We do not warrant that the Services will be uninterrupted, secure, or error-free.

### LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL FINREP, ITS AFFILIATES, OR ITS LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS OR REVENUE, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.

OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THE SERVICES WILL NOT EXCEED ONE HUNDRED DOLLARS ($100) OR THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, WHICHEVER IS GREATER.

### Indemnification

You agree to defend, indemnify, and hold harmless Finrep and its affiliates, officers, directors, employees, and agents from and against any third-party claims, damages, liabilities, losses, and expenses (including legal fees) arising out of or related to your use of the Services, your violation of these Terms, or your violation of any law or third-party right.

### Governing Law & Jurisdiction

These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the state and federal courts located in Delaware for the resolution of any disputes arising from these Terms or your use of the Services.

### General Terms

These Terms, along with any additional agreements expressly incorporated herein (such as our Privacy Policy), constitute the entire agreement between you and Finrep regarding your use of the Services.

If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right or provision will not constitute a waiver of such right or provision.

You may not assign these Terms without our prior written consent. We may assign these Terms freely.

### Contact

If you have questions or concerns about these Terms, please contact us at:

**Email:** [support@finrep.ai](mailto:legal@finrep.ai)

**Mailing Address:** FINREP INC, 8 THE GREEN, STE A, DOVER, Delaware (19901)`;

export default function TermsAndConditionsPage() {
  return (
    <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
      <Header variant="dark" />

      <main className="flex-1 w-full pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-10 py-8 md:py-12">
          <div className="flex gap-8 lg:gap-12 justify-center">
            <div className="flex-1 min-w-0 max-w-[800px]">
              <ArticleHeader title="Terms and Conditions" date="" />

              <article className="w-full max-w-none text-[#0E0F10] font-articulat">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[
                    rehypeRaw,
                    rehypeSlug,
                    rehypeAutolinkHeadings,
                  ]}
                  components={markdownComponents}
                >
                  {termsContent}
                </ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
