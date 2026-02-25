import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SmartToolPicks',
  description: 'SmartToolPicks participates in affiliate programs. Learn how we earn commissions and our commitment to editorial independence.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-400">Last updated: February 2026</p>
      </header>

      <div className="prose-style">
        <p>
          SmartToolPicks (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) participates in affiliate marketing programs. This means we may earn a commission when you click on certain links on our site and make a purchase, at no additional cost to you.
        </p>

        <h2>What This Means for You</h2>
        <p>
          Some of the links on SmartToolPicks are &quot;affiliate links.&quot; This means if you click on the link and purchase the item, we will receive an affiliate commission. We only recommend products or services we believe will add value to our readers.
        </p>
        <p>
          Prices shown are subject to change. Always check the official product page for the current price before purchasing.
        </p>

        <h2>Programs We Participate In</h2>
        <p>SmartToolPicks participates in the following affiliate programs:</p>
        <ul>
          <li><strong>Amazon Associates Program</strong> &mdash; We earn from qualifying purchases through Amazon links.</li>
          <li><strong>SaaS Affiliate Programs</strong> &mdash; Various software and productivity tool providers offering 20-30% commissions.</li>
          <li><strong>Technology Product Programs</strong> &mdash; Hardware, software, and digital service providers.</li>
        </ul>

        <h2>Our Editorial Independence</h2>
        <p>
          Affiliate relationships <strong>never influence</strong> our editorial decisions, rankings, or recommendations. Our team independently researches and evaluates every tool we cover. We will clearly state when a product does not meet our standards, regardless of any affiliate relationship.
        </p>

        <h2>FTC Compliance</h2>
        <p>
          In accordance with the Federal Trade Commission&apos;s guidelines (16 CFR Part 255), we disclose our affiliate relationships on every page where affiliate links appear. This disclosure appears at the top of relevant articles and in our site footer.
        </p>

        <h2>No Additional Cost to You</h2>
        <p>
          When you purchase through our affiliate links, you pay the same price as you would going directly to the retailer. SmartToolPicks receives a small commission from the retailer, which helps us continue providing free content.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any questions about our affiliate relationships, please contact us at{' '}
          <a href="mailto:contact@smarttoolpicks.net" className="text-indigo-600 hover:underline">
            contact@smarttoolpicks.net
          </a>.
        </p>
      </div>
    </div>
  );
}
