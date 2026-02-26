import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Notion vs ClickUp 2026: Which Wins for Teams?',
  description: 'We compared Notion and ClickUp across 9 key categories. Find out which productivity tool fits your workflow -- and which is worth paying for in 2026.',
  keywords: ['notion vs clickup', 'notion review 2026', 'clickup review', 'best project management tool', 'notion clickup comparison 2026'],
  alternates: { canonical: `${SITE_URL}/compare/notion-vs-clickup` },
};

const data = [
  { feature: 'Starting Price (per user)', notion: '$10/mo (Plus)', clickup: '$7/mo (Unlimited)', winner: 'clickup' },
  { feature: 'Free Tier', notion: 'Yes (limited)', clickup: 'Yes (unlimited members)', winner: 'clickup' },
  { feature: 'Customization', notion: 'High (pages/databases)', clickup: 'Very High (100+ features)', winner: 'clickup' },
  { feature: 'Ease of Use', notion: 'Moderate', clickup: 'Steeper learning curve', winner: 'notion' },
  { feature: 'Database/Kanban Views', notion: 'Excellent', clickup: 'Excellent', winner: 'tie' },
  { feature: 'Task Management', notion: 'Good (via databases)', clickup: 'Best-in-class', winner: 'clickup' },
  { feature: 'AI Features', notion: 'Notion AI ($10/mo add-on)', clickup: 'ClickUp Brain (included)', winner: 'clickup' },
  { feature: 'API & Integrations', notion: 'Good (official API)', clickup: 'Extensive (1,000+ apps)', winner: 'clickup' },
  { feature: 'Docs & Wikis', notion: 'Best-in-class', clickup: 'Good', winner: 'notion' },
  { feature: 'Guest Access', notion: 'Limited on free tier', clickup: 'Generous free tier', winner: 'clickup' },
];

export default function NotionVsClickUp() {
  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/compare" className="hover:text-gray-600">Compare</Link>
        <span>/</span>
        <span className="text-gray-600">Notion vs ClickUp</span>
      </nav>

      <header className="mb-8">
        <span className="text-xs font-medium text-indigo-600 border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">Updated Feb 2026</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Notion vs ClickUp 2026: Which Productivity Tool Actually Wins?
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Both claim to be "the one app to replace them all." We spent weeks running real projects through both to find out which actually delivers for modern teams.
        </p>
        <p className="text-xs text-gray-400 mt-3">Affiliate Disclosure: Some links below may earn us a commission at no extra cost to you. Prices may vary -- check official sites.</p>
      </header>

      {/* Quick Verdict */}
      <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-gray-50">
        <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-xl bg-white">
            <p className="font-display text-xl font-bold text-gray-900 mb-1">Notion</p>
            <p className="text-sm text-gray-500 mb-2">Best for: docs, wikis, and knowledge management</p>
            <p className="font-mono text-2xl font-bold text-indigo-600">4.4<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Try Notion Free</a>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-xl bg-white">
            <p className="font-display text-xl font-bold text-gray-900 mb-1">ClickUp</p>
            <p className="text-sm text-gray-500 mb-2">Best for: task management and team productivity</p>
            <p className="font-mono text-2xl font-bold text-indigo-600">4.6<span className="text-sm text-gray-400">/5</span></p>
            <a href="https://clickup.com" target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Try ClickUp Free</a>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center"><strong className="text-gray-900">Our pick:</strong> ClickUp edges ahead for task-heavy teams. Notion wins for document-centric workflows.</p>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-100 rounded-xl overflow-hidden mb-8 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Feature</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Notion</th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">ClickUp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t border-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'notion' ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>{r.notion}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'clickup' ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>{r.clickup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">The Core Difference: Docs vs. Tasks</h2>
          <p>Notion was built as a flexible document and wiki tool that later added project management. ClickUp started as a task manager and grew into an all-in-one workspace. That origin still shapes both tools today.</p>
          <p className="mt-3">Notion's block-based editor is excellent for interconnected docs, wikis, and databases. Teams managing knowledge, product documentation, and SOPs genuinely love it. ClickUp's task management -- subtasks, dependencies, time tracking, sprints, and goals -- is hard to beat. If tracking who's doing what by when is your core job, ClickUp is the natural choice.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Pricing: ClickUp's Free Tier Wins</h2>
          <p>ClickUp's free tier includes unlimited members and unlimited tasks. Notion's free plan caps workspace features significantly. For growing teams watching budgets, this difference matters from day one.</p>
          <p className="mt-3">On paid plans, ClickUp Unlimited at $7/user/month beats Notion Plus at $10/user/month. Notion AI costs an extra $10/mo per member; ClickUp Brain is bundled into Business plans -- another point for ClickUp if AI-powered workflows are part of your plans.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Ease of Use: Notion Has the Edge</h2>
          <p>ClickUp is powerful, but new users frequently report feeling overwhelmed by the sheer number of features and configuration options. It rewards patience. Notion's cleaner interface is more intuitive for most people, though setting up linked databases still requires some experimentation.</p>
          <p className="mt-3">For teams without a dedicated ops person to configure things properly, Notion's gentler learning curve usually leads to better adoption. ClickUp shines brightest when someone owns the setup.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Our Recommendation</h2>
          <p><strong className="text-gray-900">Choose Notion</strong> if your team's primary need is documentation, knowledge management, and flexible databases. Great for product teams, content teams, and startups that need a company wiki first.</p>
          <p className="mt-2"><strong className="text-gray-900">Choose ClickUp</strong> if task management is the core workflow. Better for engineering teams, agencies, and operations-heavy teams where structured task tracking is non-negotiable.</p>
          <p className="mt-2"><strong className="text-gray-900">Both offer free tiers.</strong> Start there. The right tool is the one your team actually opens every day.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">FAQ</h2>
          {[
            { q: 'Can I use Notion and ClickUp together?', a: 'Yes. Many teams use Notion for docs/wikis and ClickUp for task management. There is a native integration. That said, managing two tools adds complexity and cost -- evaluate whether you actually need both before committing.' },
            { q: 'Which is better for a small team?', a: "ClickUp's free tier supports unlimited members and unlimited tasks, making it the stronger choice for budget-conscious small teams. Notion's free plan is more limited but excels if documentation is your primary need." },
            { q: 'Does ClickUp replace Jira for engineers?', a: "For smaller engineering teams, yes. ClickUp's sprint management and issue tracking cover most Jira use cases at a lower price. Very large orgs with complex Jira configurations may still prefer Jira for its depth and integrations." },
            { q: 'Is Notion good for project management?', a: "Notion works for simpler projects managed via databases and kanban views. But for task-heavy workflows with dependencies, time tracking, and recurring tasks, ClickUp or a dedicated PM tool like Asana is the stronger choice." },
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
          <Link href="/compare/shein-vs-asos" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors group">
            <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">Monday.com vs Asana</p>
            <p className="text-xs text-gray-400 mt-1">Which PM tool wins for teams in 2026?</p>
          </Link>
          <Link href="/compare/zara-vs-hm" className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors group">
            <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">HubSpot vs Salesforce</p>
            <p className="text-xs text-gray-400 mt-1">CRM showdown for growing businesses</p>
          </Link>
        </div>
      </div>

      <NewsletterCTA />
    </article>
  );
}
