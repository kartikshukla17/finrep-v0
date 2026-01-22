import Image from "next/image";

interface ArticleContentProps {
    featuredImage: string;
    title: string;
}

export default function ArticleContent({ featuredImage, title }: ArticleContentProps) {
    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            {/* Featured Image */}
            <div className="w-full aspect-video md:h-[540px] relative rounded-lg overflow-hidden">
                <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Article Body */}
            <article className="w-full flex flex-col gap-6 text-[#0E0F10] text-base font-normal font-articulat leading-6">
                <p className="text-justify">
                    Navigating the New Era of Regulatory Oversight
                </p>
                <p className="text-justify">
                    If you&apos;re a CFO, audit committee member, or financial controller
                    preparing for your annual 10-K or 20-F filing, there&apos;s an
                    elephant in the room that&apos;s getting harder to ignore: the SEC
                    isn&apos;t just watching your financial statements anymore—they&apos;re
                    watching the watchers.
                </p>
                <p className="text-justify">
                    The Securities and Exchange Commission has dramatically
                    intensified its scrutiny of auditors, audit firms, and other
                    financial gatekeepers over the past few years. And this
                    heightened oversight isn&apos;t just causing headaches for the Big
                    Four—it&apos;s fundamentally changing how your next audit will unfold.
                </p>

                {/* Content Image */}
                <div className="w-full aspect-[4/3] relative my-4">
                    <Image
                        src="/assets/images/article-content-image.png"
                        alt="Article content"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Section: Why the Sudden Spotlight */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-[#0E0F10] text-xl md:text-[28px] font-medium font-articulat leading-tight md:leading-[33.60px]">
                        Why the Sudden Spotlight on Auditors?
                    </h2>
                    <p className="text-justify">
                        The SEC&apos;s renewed focus on gatekeepers didn&apos;t emerge in a
                        vacuum. A perfect storm of accounting scandals, high-profile
                        audit failures, and the increasing complexity of financial
                        instruments has pushed regulators to take a harder line. From the
                        Luckin Coffee fraud to concerns about SPAC audits and
                        cryptocurrency valuations, the message from Washington is clear:
                        trust, but verify—especially when it comes to those we trust to
                        verify.
                    </p>
                    <p className="text-justify">
                        SEC Chair Gary Gensler has been particularly vocal about
                        strengthening the &quot;three lines of defense&quot; in corporate
                        governance, with auditors firmly in the crosshairs as the
                        critical external check on financial reporting.
                    </p>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-[#0E0F10] text-lg md:text-2xl font-medium font-articulat leading-tight md:leading-[28.80px]">
                            What Does This Mean for You?
                        </h3>
                        <p className="text-justify">
                            Your auditors are under more pressure than ever before. They&apos;re
                            being second-guessed on methodology, documentation standards,
                            and professional skepticism. And guess what? That pressure flows
                            downhill—directly to your finance team and your audit
                            preparation process.
                        </p>
                    </div>
                </section>

                {/* Section: The New Audit Landscape */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-[#0E0F10] text-xl md:text-[28px] font-medium font-articulat leading-tight md:leading-[33.60px]">
                        The New Audit Landscape: What&apos;s Changed
                    </h2>

                    {/* Chart Image */}
                    <div className="w-full aspect-[16/9] relative">
                        <Image
                            src="/assets/images/article-chart.png"
                            alt="Audit landscape chart"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-[#0E0F10] text-lg md:text-2xl font-medium font-articulat leading-tight md:leading-[28.80px]">
                            1. Heightened Professional Skepticism
                        </h3>
                        <p className="text-justify">
                            Gone are the days when a friendly relationship with your
                            auditors meant smooth sailing. Today&apos;s auditors are applying
                            what the PCAOB calls &quot;enhanced skepticism&quot;—essentially, they&apos;re
                            questioning everything, even items that sailed through in prior
                            years. Management representations? Expect them to be tested more
                            rigorously. Historical precedents? Not as persuasive as they
                            used to be.
                        </p>

                        <h3 className="text-[#0E0F10] text-lg md:text-2xl font-medium font-articulat leading-tight md:leading-[28.80px]">
                            2. Documentation, Documentation, Documentation
                        </h3>
                        <p className="text-justify">
                            If you thought your audit file was detailed before, buckle up.
                            Auditors are now documenting their thought processes, decision
                            trees, and alternative considerations in exhaustive
                            detail—because they know the SEC or PCAOB might come knocking.
                            For you, this means more information requests, more follow-up
                            questions, and more time spent explaining the &quot;why&quot; behind your
                            accounting judgments.
                        </p>

                        <h3 className="text-[#0E0F10] text-lg md:text-2xl font-medium font-articulat leading-tight md:leading-[28.80px]">
                            3. Technology and Data Analytics
                        </h3>
                        <p className="text-justify">
                            Your auditors are deploying sophisticated data analytics tools
                            to test entire populations of transactions rather than samples.
                            This is generally good news for audit quality, but it means
                            anomalies and outliers that might have slipped through
                            traditional sampling methods are now getting flagged for
                            investigation.
                        </p>
                    </div>
                </section>

                {/* Section: Red Flags */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-[#0E0F10] text-xl md:text-[28px] font-medium font-articulat leading-tight md:leading-[33.60px]">
                        Red Flags That Will Trigger Extra Scrutiny
                    </h2>
                    <p className="text-justify">
                        Be especially mindful of these areas that are likely to draw
                        heightened attention:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-justify">
                        <li>Late adjustments to financial statements, especially in material areas</li>
                        <li className="font-semibold">Complex or unusual transactions in the fourth quarter</li>
                        <li className="font-semibold">Significant management estimates without robust supporting documentation</li>
                        <li className="font-semibold">Related party transactions that lack clear business purpose</li>
                        <li>Revenue recognition patterns that deviate from industry norms</li>
                        <li>Changes in accounting policies or estimates without clear justification</li>
                    </ul>
                </section>

                {/* Section: How to Prepare */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-[#0E0F10] text-xl md:text-[28px] font-medium font-articulat leading-tight md:leading-[33.60px]">
                        How to Prepare for Your Next Audit in This New Environment
                    </h2>
                    <h3 className="text-[#0E0F10] text-lg md:text-2xl font-medium font-articulat leading-tight md:leading-[28.80px]">
                        Proactive Steps for Finance Teams
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-justify">
                        <li>
                            <strong>Start earlier:</strong> The days of cramming audit prep into the final
                            weeks are over. Begin documentation and analysis well before year-end.
                        </li>
                        <li>
                            <strong>Strengthen internal controls:</strong> The SEC is heavily focused on ICFR
                            (Internal Control over Financial Reporting). Any material weaknesses will draw extra scrutiny.
                        </li>
                        <li>
                            <strong>Document your judgments:</strong> For any significant accounting judgment
                            or estimate, create contemporaneous documentation of your analysis, alternatives considered, and rationale.
                        </li>
                        <li>
                            <strong>Pre-clear complex transactions:</strong> Don&apos;t surprise your auditors with
                            novel structures or unusual transactions. Involve them early in the accounting assessment.
                        </li>
                        <li>
                            <strong>Invest in your technical accounting team:</strong> Having deep expertise
                            in-house for complex areas (revenue recognition, leases, derivatives) pays dividends.
                        </li>
                        <li>
                            <strong>Enhance communication:</strong> Schedule regular touchpoints with your
                            auditors throughout the year, not just during the audit period.
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
}
