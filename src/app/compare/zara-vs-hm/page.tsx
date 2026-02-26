import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'HubSpot vs Salesforce 2026: CRM Comparison for Growing Businesses',
  description: 'HubSpot vs Salesforce: we compare pricing, ease of use, features, and scalability to help you choose the right CRM. See which wins for small and mid-size businesses.',
  keywords: ['hubspot vs salesforce', 'hubspot review 2026', 'salesforce review', 'best crm 2026', 'hubspot salesforce comparison'],
  alternates: { canonical: `${SITE_URL}/compare/hubspot-vs-salesforce` },
};

const data = [
  { feature: 'Free CRM Tier', hubspot: 'Yes (very generous)', salesforce: 'No (30-day trial only)', winner: 'hubspot' },
  { feature: 'Starting Price', hubspot: '$15/mo (Starter)', salesforce: '$25/user/mo (Starter)', winner: 'hubspot' },
  { feature: 'Ease of Setup', hubspot: 'Excellent (self-serve)', salesforce: 'Complex (often needs consultant)', winner: 'hubspot' },
  { feature: 'Customization', hubspot: 'Good', salesforce: 'Best-in-class', winner: 'salesforce' },
  { feature: 'Sales Pipeline Management', hubspot: 'Excellent', salesforce: 'Excellent', winner: 'tie' },
  { feature: 'Marketing Automation', hubspot: 'Best-in-class (native)', salesforce: 'Via Marketing Cloud ($$)', winner: 'hubspot' },
  { feature: 'Reporting & Analytics', hubspot: 'Very Good', salesforce: 'Best-in-class', winner: 'salesforce' },
  { feature: 'Integrations', hubspot: '1,000+ native', salesforce: '3,000+ (AppExchange)', winner: 'salesforce' },
  { feature: 'Enterprise Scalability', hubspot: 'Good (up to mid-market)', salesforce: 'Best-in-class', winner: 'salesforce' },
  { feature: 'Support Quality', hubspot: 'Good (email/chat)', salesforce: 'Variable (plan-dependent)', winner: 'hubspot' },
];

export default function HubSpotVsSalesforce() {
  notFound();
  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/compare" className="hover:text-gray-600">Compare</Link>
        <span>/</span>
        <span className="text-gray-600">HubSpot vs Salesforce</span>
      </nav>

      <header className="mb-8">
        <span className="text-xs font-medium text-indigo-600 border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">Updated Feb 2026</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          HubSpot vs Salesforce 2026: Which CRM Should You Choose?
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Two of the most-used CRMs in the world, built for very different buyers. Here's an honest breakdown to help you choose -- without the sales pitch.
        </p>
        <p className="text-xs text-gray-400 mt-3">Affiliate Disclosure: Some links below may earn us a commission at no extra cost to you. Prices may vary -- check official sites.</p>
      </header>

      {/* Quick Verdict */}
      <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-gray-50">
        <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-xl bg-white">
            <p className="font-display text-xl font-bold text-gray-900 mb-1">HubSpot</p>
            <p className="text-sm text-gray-500 mb-2">Best for: SMBs, startups, and teams new to CRM</p>
            <p className="font-mono text-2xl font-bold text-indigo-600">4.6<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://hubspot.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Try HubSpot Free</a>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-xl bg-white">
            <p className="font-display text-xl font-bold text-gray-900 mb-1">Salesforce</p>
            <p className="text-sm text-gray-500 mb-2">Best for: mid-to-large enterprises needing deep customization</p>
            <p className="font-mono text-2xl font-bold text-indigo-600">4.4<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://salesforce.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">See Salesforce Plans</a>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center"><strong className="text-gray-900">Our pick for most businesses:</strong> HubSpot. Salesforce is better once you're at scale and need enterprise-level customization.</p>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-100 rounded-xl overflow-hidden mb-8 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Feature</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">HubSpot</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Salesforce</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t border-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'hubspot' ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>{r.hubspot}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'salesforce' ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>{r.salesforce}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">The Honest Positioning</h2>
          <p>HubSpot is built for businesses that want an all-in-one platform to manage marketing, sales, and service with minimal setup friction. Its free CRM is genuinely powerful -- contact management, deal pipelines, email tracking, and meeting scheduling all included at zero cost. For most businesses under 500 employees, HubSpot is more than enough.</p>
          <p className="mt-3">Salesforce is the enterprise standard for a reason. Its depth of customization -- custom objects, complex workflow rules, territory management, and the AppExchange ecosystem -- is unmatched. But that power comes with a steep implementation cost. Many Salesforce deployments require consultants or dedicated Salesforce admins. If you don't have those resources, you'll end up paying for features you never use.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Pricing Reality Check</h2>
          <p>The Salesforce Starter Suite at $25/user/month sounds competitive, but the price climbs sharply as you add features. Most real Salesforce deployments land at $75-$300/user/month once you add the features you actually need. HubSpot's pricing is more transparent, though it also scales up. The key difference: HubSpot's free tier is genuinely useful; Salesforce's 30-day trial ends with a hard paywall.</p>
          <p className="mt-3">For a team of 10 people, HubSpot Starter costs roughly $1,800/year. A comparable Salesforce setup could run $9,000-$30,000/year once you factor in licenses, implementation, and add-ons. That gap matters for smaller businesses.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">When to Choose Salesforce Instead</h2>
          <p>Salesforce becomes the right choice when you need custom objects and data models that HubSpot can't support, when you're in a regulated industry with specific compliance requirements, or when your sales team is 50+ reps with complex territory and commission structures. The AppExchange has over 3,000 integrations for niche industry needs that HubSpot simply doesn't cover.</p>
          <p className="mt-3">For companies growing toward IPO or managing $100M+ in pipeline, Salesforce's reporting, forecasting, and enterprise security features are worth the premium. But for most readers evaluating their first CRM or upgrading from spreadsheets: start with HubSpot.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Our Recommendation</h2>
          <p><strong className="text-gray-900">Choose HubSpot</strong> for most small to mid-size businesses. The free tier removes the risk, setup is fast, and the native marketing automation is genuinely best-in-class without add-ons.</p>
          <p className="mt-2"><strong className="text-gray-900">Choose Salesforce</strong> if you're an enterprise with complex sales processes, multiple business units, or need deep customization that HubSpot's opinionated structure can't support.</p>
          <p className="mt-2">If you're unsure, start with HubSpot's free tier. Many companies run on HubSpot indefinitely. You can always migrate to Salesforce later if you genuinely need it.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">FAQ</h2>
          {[
            { q: 'Can I migrate from HubSpot to Salesforce later?', a: "Yes. Both platforms support CSV export and there are dedicated migration tools. It's more complex than starting fresh, but very doable. Most companies who migrate do so after Series B or when their sales team exceeds 50 reps." },
            { q: 'Is Salesforce worth it for a 10-person team?', a: 'Rarely. The implementation complexity and cost rarely justifies itself for small teams. HubSpot, Pipedrive, or Zoho CRM provide 90% of the functionality at a fraction of the cost.' },
            { q: 'Does HubSpot replace Salesforce for email marketing?', a: "HubSpot's Marketing Hub is more powerful for email marketing than anything native in Salesforce. For email + CRM in one, HubSpot is the clear winner. Salesforce's Pardot/Marketing Cloud is expensive and complex to configure." },
            { q: 'Which is easier to learn?', a: "HubSpot is significantly easier to learn. Most sales reps can be productive in HubSpot within a week. Salesforce typically requires formal training, a dedicated admin, and several weeks of onboarding to use effectively." },
          ].map((f, i) => (
            <div key={i} className="mb-4 border border-gray-100 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">{f.q}</h3>
              <p className="text-sm text-gray-500">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More Comparisons */}
      <div className="my-8">
        <h3 className="font-display font-bold text-gray-900 mb-4">More Software Comparisons</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/compare/nordstrom-vs-asos" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors group">
            <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">Notion vs ClickUp</p>
            <p className="text-xs text-gray-400 mt-1">Which all-in-one workspace wins in 2026?</p>
          </Link>
          <Link href="/compare/shein-vs-asos" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors group">
            <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">Monday.com vs Asana</p>
            <p className="text-xs text-gray-400 mt-1">Best project management tool comparison 2026</p>
          </Link>
        </div>
      </div>

      <NewsletterCTA />
    </article>
  );
}
