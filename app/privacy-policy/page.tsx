import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleHeader from "@/components/blogs/ArticleHeader";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.privacy;

// Custom components for ReactMarkdown
const markdownComponents: Components = {
  h1: ({ children, id }) => (
    <h1 id={id} className="text-3xl md:text-4xl font-semibold text-[#0E0F10] mt-10 mb-6 font-articulat scroll-mt-28">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="text-2xl md:text-[28px] font-medium text-[#0E0F10] mt-10 mb-4 font-articulat leading-tight scroll-mt-28">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-xl md:text-2xl font-medium text-[#0E0F10] mt-8 mb-3 font-articulat scroll-mt-28">
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 id={id} className="text-lg md:text-xl font-medium text-[#0E0F10] mt-6 mb-2 font-articulat scroll-mt-28">
      {children}
    </h4>
  ),
  h5: ({ children, id }) => (
    <h5 id={id} className="text-base md:text-lg font-medium text-[#0E0F10] mt-6 mb-2 font-articulat scroll-mt-28">
      {children}
    </h5>
  ),
  h6: ({ children, id }) => (
    <h6 id={id} className="text-sm md:text-base font-medium text-[#0E0F10] mt-6 mb-2 font-articulat scroll-mt-28">
      {children}
    </h6>
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
    <li className="text-base leading-7 text-[#0E0F10]">
      {children}
    </li>
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
    return (
      <code className={`${className} block`}>
        {children}
      </code>
    );
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
  thead: ({ children }) => (
    <thead className="bg-[#F9FAFB]">
      {children}
    </thead>
  ),
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
  hr: () => (
    <hr className="my-8 border-t border-[#E5E7EB]" />
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#0E0F10]">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
};

const privacyContent = `Effective Date: June 24, 2025

Welcome to Finrep Inc. ("Finrep"). This is the privacy policy (the "Privacy Policy") that applies to our websites at [**finrep.ai**](http://finrep.ai/) and any associated platforms hosted thereon (collectively, the "Site"). This Site is operated by Finrep Inc. and its affiliates (collectively, "we," "us," or "our").

This Privacy Policy describes the types of personal information we collect in connection with your use of the Site, how we process that information, and to whom it may be disclosed. It also outlines your rights and choices regarding your personal information.

This Privacy Policy may be updated or modified at any time to reflect changes in our practices or applicable law. The effective date of the latest version will be posted at the top of this document.

### Table of Contents

1. Personal Information Collected

2. How Personal Information is Used

3. Online Tracking

4. How Personal Information is Disclosed

5. Children's Personal Information

6. Links to Other Websites and Apps

7. How We Protect Personal Information

8. Retention of Personal Information

9. Your Rights and Choices

10. General Data Protection Regulation (GDPR)

11. California Privacy Rights

12. Updates to the Privacy Policy

13. How to Contact Us

### Personal Information Collected

We may collect the following categories of personal information through your interaction with the Site:

- Contact information (e.g., name, email address, phone number, and postal address)

- Login credentials (e.g., username and password)

- Payment information

- Commercial information (e.g., product usage and customer service interactions)

- Internet or other electronic activity (e.g., IP address, browser data)

- Location data (general and precise, where permitted)

- Inferences drawn from other collected data

- Content provided by you, including media shared via communications or social platforms

Information may be collected directly from you, from service providers acting on our behalf, or from public sources. We also collect data automatically via cookies, web beacons, and other tracking technologies, including "clickstream data" and local storage.

### How Personal Information is Used

We use your personal information to:

- Set up and manage your account

- Authenticate your identity

- Provide products and services

- Communicate with you about events, surveys, promotions, and product updates

- Customize content and functionality

- Conduct research and data analysis

- Prevent fraud and ensure platform security

- Meet legal and regulatory obligations

We also use third-party services such as Google Analytics to evaluate Site performance and user engagement.

### Online Tracking

Our Site does not respond to browser "Do Not Track" signals. We participate in ad networks that may collect data about your visits to our Site and others to personalize advertisements. To opt out of interest-based advertising, visit:

- [www.aboutads.info/choices](http://www.aboutads.info/choices)

- [www.networkadvertising.org/choices](http://www.networkadvertising.org/choices)

- <http://preferences-mgr.truste.com/>

### How Personal Information is Disclosed

We may share personal information with:

- Vendors and service providers performing tasks on our behalf

- Our affiliates, customers, and third-party business partners

- Law enforcement or regulatory authorities if required by law

- Successors in the event of a merger, acquisition, or sale

We may also share aggregated or anonymized data that does not identify individuals.

### Children's Personal Information

Our Site is not intended for children under 13 (or under the applicable minimum age in your jurisdiction). We do not knowingly collect personal information from such individuals. If you believe we may have collected information from a child, please contact us.

### Links to Other Websites and Apps

Our Site may contain links to third-party websites and applications. This Privacy Policy does not apply to those sites. We encourage you to review the privacy practices of those platforms separately.

### How We Protect Personal Information

We implement reasonable administrative, technical, and physical safeguards to protect your data from unauthorized access or use.

### Retention of Personal Information

We retain personal information as long as necessary to fulfill the purposes for which it was collected or as required by law, including to resolve disputes and enforce our agreements.

### Your Rights and Choices

Subject to applicable law, you may have the right to:

- Access your personal information

- Correct or delete your information

- Restrict or object to processing

- Request data portability

- Learn about the categories and sources of data we collect and how it's used

- Not receive discriminatory treatment for exercising these rights

To make a request, please contact us at <support@finrep.ai>. Please include your name, email, physical address, and the nature of your request. You may also authorize an agent to make a request on your behalf with appropriate documentation.

### General Data Protection Regulation (GDPR)

When Finrep acts as a **processor**, we handle data solely in accordance with customer instructions and applicable law. As a **controller**, we rely on various legal bases for data processing, including consent, contract performance, legal obligations, and legitimate interests.

If your personal data is transferred outside of the EU/EEA (e.g., to the U.S.), it will be safeguarded in accordance with applicable legal standards.

You may withdraw your consent at any time by contacting us, and you may file complaints with your local data protection authority if necessary.

### California Privacy Rights

Under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), California residents have specific rights, including:

- Knowing what personal information is collected and how it is used

- Accessing or deleting personal data

- Opting out of the sale of personal information (note: Finrep does not sell personal information)

- Non-discrimination for exercising CCPA rights

You may exercise your rights by contacting us at <support@finrep.ai>

### Updates to the Privacy Policy

We may update this Privacy Policy from time to time. Any significant changes will be communicated via a notice on the Site, and the latest version will always be available here.

### How to Contact Us

If you have any questions or comments about this Privacy Policy or our data practices, please contact:

**Email**: <support@finrep.ai>

**Company**: Finrep Inc.`;

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
      <Header variant="dark" />

      <main className="flex-1 w-full pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-10 py-8 md:py-12">
          <div className="flex gap-8 lg:gap-12 justify-center">
            <div className="flex-1 min-w-0 max-w-[800px]">
              <ArticleHeader
                title="Privacy Policy"
                date=""
              />

              <article className="w-full max-w-none text-[#0E0F10] font-articulat">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                  components={markdownComponents}
                >
                  {privacyContent}
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
