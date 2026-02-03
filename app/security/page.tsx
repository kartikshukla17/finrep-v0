import ArticleHeader from "@/components/blogs/ArticleHeader";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = pageMetadata.security;

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

const securityContent = `**Enterprise-grade protection for financial intelligence**

At Finrep, security is not a compliance checkbox. It is the foundation on which the platform is built.

Finrep.ai is an enterprise AI system for SEC reporting and technical accounting, which means we handle some of the most sensitive financial and corporate data in the world. Our security architecture is designed around a single principle: **customer data must never be exposed, leaked, or repurposed under any circumstances.**

We operate under internationally recognized security frameworks, implement defense-in-depth across infrastructure and AI layers, and maintain strict governance over how data is accessed, processed, and retained.

---

## Compliance & Certifications

Finrep maintains independent third-party certifications that validate both the design and operational effectiveness of our security controls.

**SOC 2 Type II (AICPA)**

Our SOC 2 Type II report confirms that our controls operate effectively over time across Security, Availability, and Confidentiality trust principles.

**ISO 27001:2022**

We operate a full Information Security Management System (ISMS) aligned with ISO 27001, including risk assessments, access governance, incident management, and continuous improvement cycles.

These certifications are audited by independent firms and renewed through ongoing surveillance audits.

Security governance includes:

- Dedicated security leadership
- Quarterly risk assessments
- Annual third-party penetration testing
- Mandatory security training for all employees
- Documented incident response and escalation procedures

---

## Cloud Infrastructure Security

Finrep runs on enterprise cloud infrastructure across **AWS and Azure**, both operating SOC 2 certified data centers.

Our infrastructure architecture includes:

- Private network segmentation using VPCs
- Web Application Firewalls and DDoS protection
- Encrypted inter-service communication using TLS 1.3
- Continuous vulnerability scanning and patching

All production environments are isolated from development systems, with strict access boundaries enforced at the network and identity layers.

---

## Access Controls & Identity

We enforce **least-privilege access** across all systems.

Production access:

- Requires multi-factor authentication
- Is fully role-based
- Is logged and audited
- Reviewed quarterly

Customer data is accessible only to explicitly authorized personnel, and only when operationally required. All access is time-bound, logged, and reviewed.

---

## Data Encryption & Isolation

Finrep uses industry-standard cryptographic controls across the entire data lifecycle.

| Data State | Protection |
| --- | --- |
| At Rest | AES-256 encryption |
| In Transit | TLS 1.3 |
| Databases | Field-level encryption |
| Backups | Encrypted and geo-redundant |

For enterprise customers, **dedicated tenant isolation** is available:

- Separate encryption keys
- Isolated database instances
- Hard tenant boundaries enforced at infrastructure level

Cross-tenant data access is architecturally impossible.

---

## AI Security Architecture

**Hybrid by design. Secure by default.**

Finrep operates a hybrid AI architecture specifically designed for financial data protection.

Every user query passes through a **classification engine** that determines whether the content contains sensitive information such as:

- Financial metrics
- Company identifiers
- PII
- Material non-public information
- Proprietary documents

Based on classification, queries follow one of two paths.

---

### Sensitive Data Processing

**In-house models only**

All sensitive queries are processed exclusively on **Finrep-hosted LLMs** running inside our private cloud.

These models:

- Have no external internet access
- Run on dedicated GPU instances
- Never transmit data outside our infrastructure
- Generate full audit logs

This ensures that confidential financial data **never leaves Finrep's controlled environment.**

---

### Non-Sensitive Processing

**Redacted third-party models**

For non-sensitive use cases, Finrep may use external LLM providers. Before any data is sent:

1. Sensitive entities are detected
2. Values are tokenized
3. Token mappings are stored locally
4. Only redacted content is transmitted
5. Responses are reconstructed internally

External providers never see real company names, numbers, or documents.

Even then, Finrep integrates only with providers that:

- Are SOC 2 Type II compliant
- Enforce zero data retention
- Do not train on customer data
- Use encrypted APIs

---

## Data Retention & Deletion

Finrep follows strict data lifecycle policies.

- Data is encrypted in managed databases
- Daily encrypted backups are stored across regions
- Recovery procedures are tested quarterly
- RTO: 4 hours
- RPO: 1 hour

Upon contract termination:

- Primary data is deleted within 30 days
- Backups are purged within 90 days
- Deletion certificates available on request

---

## Application Security

All application code passes through:

- Static security analysis
- Dependency vulnerability scanning
- Container image scanning
- Manual security review

High or critical vulnerabilities block deployment automatically.

Authentication supports:

- SAML 2.0 and OIDC SSO
- Multi-factor authentication
- Session expiration and concurrency limits

APIs use OAuth 2.0 or rotating API keys with IP allow-listing and full audit logging.

---

## Monitoring & Incident Response

Finrep operates continuous security monitoring across infrastructure and application layers.

We use centralized SIEM systems to detect:

- Anomalous access patterns
- Network intrusion attempts
- Data exfiltration risks

All incidents follow a documented response framework with:

- Defined severity levels
- Containment and remediation procedures
- Customer notification obligations
- Post-incident reports

---

## High Availability & Resilience

Finrep is built for operational continuity even during major cloud or AI provider outages.

Our system maintains:

- 3 to 4 AI provider fallbacks
- Automatic real-time routing
- Health monitoring and failover
- Self-hosted in-house models as final fallback

This architecture allows Finrep to remain available even when major providers such as Azure, OpenAI, Anthropic, or Cloudflare experience downtime.

---

## Our Security Philosophy

We believe security must be:

- **Architectural**, not cosmetic
- **Proactive**, not reactive
- **Auditable**, not assumed

Finrep is built for regulated financial environments where mistakes are expensive and trust is everything. Our systems are designed so that even in worst-case scenarios, customer data remains isolated, encrypted, and inaccessible.

Security is not a feature at Finrep.

It is the system.

---

## Security Reviews & Documentation

Enterprise customers can request:

- SOC 2 Type II report
- ISO 27001 certificate
- Penetration testing summary
- Data flow architecture
- Security questionnaires

Contact: **security@finrep.ai**`;

export default function SecurityPage() {
  return (
    <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
      <Header variant="dark" />

      <main className="flex-1 w-full pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-10 py-8 md:py-12">
          <div className="flex gap-8 lg:gap-12 justify-center">
            <div className="flex-1 min-w-0 max-w-[800px]">
              <ArticleHeader title="Security at Finrep" date="" />

              <div className="w-full my-8 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/security.png"
                  alt="Security at Finrep"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

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
                  {securityContent}
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
