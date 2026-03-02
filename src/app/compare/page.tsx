import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Comparisons 2026: Head-to-Head Software Reviews | SmartToolPicks',
  description: 'Side-by-side SaaS and software tool comparisons with real test data. Pricing, features, and honest verdicts to help you choose the right tool.',
};

const comparisons = [
  {
    slug: 'notion-vs-asana',
    title: 'Notion vs Asana',
    subtitle: 'All-in-one workspace vs pure project management -- which fits your workflow?',
    verdict: 'Notion wins for docs-heavy teams',
    tags: ['Productivity', 'Project Management'],
  },
  {
    slug: 'notion-vs-clickup',
    title: 'Notion vs ClickUp',
    subtitle: 'Docs-first vs task-first -- which all-in-one workspace actually wins?',
    verdict: 'ClickUp edges ahead',
    tags: ['Productivity', 'Project Management'],
  },
  {
    slug: 'clickup-vs-monday',
    title: 'ClickUp vs Monday.com',
    subtitle: 'Feature-packed powerhouse vs visual simplicity -- tested side by side',
    verdict: 'ClickUp edges ahead on features',
    tags: ['Project Management', 'Productivity'],
  },
  {
    slug: 'monday-vs-asana',
    title: 'Monday.com vs Asana',
    subtitle: 'Visual workflows vs structured task clarity -- tested head-to-head',
    verdict: 'Monday.com wins on flexibility',
    tags: ['Project Management', 'Productivity'],
  },
  {
    slug: 'slack-vs-microsoft-teams',
    title: 'Slack vs Microsoft Teams',
    subtitle: 'Startup favorite vs enterprise standard -- honest comparison after daily use',
    verdict: 'Slack wins on integrations',
    tags: ['Communication', 'Productivity'],
  },
  {
    slug: 'canva-vs-figma',
    title: 'Canva vs Figma',
    subtitle: 'Quick design tool vs professional UI platform -- which one do you need?',
    verdict: 'Depends on your skill level',
    tags: ['Design', 'Creative Tools'],
  },
  {
    slug: 'hubspot-vs-mailchimp',
    title: 'HubSpot vs Mailchimp',
    subtitle: 'Full CRM suite vs email marketing specialist -- where should you invest?',
    verdict: 'HubSpot wins for growth teams',
    tags: ['CRM', 'Marketing'],
  },
  {
    slug: 'hubspot-vs-salesforce',
    title: 'HubSpot vs Salesforce',
    subtitle: 'Free all-in-one CRM vs enterprise powerhouse -- which fits your business?',
    verdict: 'HubSpot wins for most',
    tags: ['CRM', 'Sales'],
  },
  {
    slug: 'zapier-vs-make',
    title: 'Zapier vs Make',
    subtitle: 'Simple automations vs complex workflows -- which saves more time?',
    verdict: 'Zapier wins on ease of use',
    tags: ['Automation', 'Productivity'],
  },
];

export default function ComparePage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Compare</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          SaaS Tool Head-to-Head Comparisons
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Real test data. No paid placements. Honest breakdowns of which software tools actually win for your use case.
        </p>
      </header>

      <div className="grid gap-4">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="card-hover p-6 flex items-center justify-between group"
          >
            <div>
              <div className="flex gap-2 mb-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full border border-indigo-100">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-display font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">
                {c.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>
            </div>
            <div className="text-right ml-4 shrink-0">
              <span className="text-xs text-indigo-600 font-semibold">{c.verdict}</span>
              <p className="text-gray-400 text-sm mt-1">Read comparison</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
