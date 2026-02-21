export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  image?: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
  image?: string;
}

export const categories = [
  { slug: 'all', name: 'All', icon: '' },
  { slug: 'project-management', name: 'Project Management', icon: '' },
  { slug: 'crm-sales', name: 'CRM & Sales', icon: '' },
  { slug: 'design-tools', name: 'Design Tools', icon: '' },
  { slug: 'marketing-tools', name: 'Marketing Tools', icon: '' },
  { slug: 'ai-tools', name: 'AI & Automation', icon: '' },
  { slug: 'productivity', name: 'Productivity', icon: '' },
  { slug: 'collaboration', name: 'Team Collaboration', icon: '' },
];

export const guides: StyleGuide[] = [

  {
    slug: 'ai-powered-marketing-automation-strategies-platforms',
    title: 'AI-Powered Marketing Automation: Strategies & Top Platforms',
    category: 'marketing-tools',
    description: 'Discover how AI marketing automation drives hyper-personalization and predictive insights. Hands-on review of Salesforce Einstein, Jasper AI, and Adobe Sensei.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🧠',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Salesforce Einstein', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Salesforce+Einstein&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Jasper AI', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Jasper+AI&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Adobe Sensei', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Adobe+Sensei&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'HubSpot AI Tools', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=HubSpot+AI+Tools&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Oracle Eloqua', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Oracle+Eloqua&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'future-proof-your-work-best-productivity-saas-tools-2026',
    title: 'Future-Proof Your Work: Best Productivity SaaS Tools for 2026',
    category: 'productivity',
    description: 'Unlock peak work efficiency in 2026 with our hands-on review of top SaaS tools: ClickUp, Coda, and Superhuman. Future-proof your workflow!',
    readTime: '7 min',
    date: '2026-02-21',
    tag: 'Trending',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ClickUp', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ClickUp&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Coda', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Coda&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Superhuman', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Superhuman&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Jira', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Jira&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Asana', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Asana&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'asana-vs-jira-project-management-tool-comparison',
    title: 'Asana vs. Jira: Choosing the Right Project Management Tool',
    category: 'project-management',
    description: 'Hands-on review of Asana vs Jira for project management. Discover which tool best fits your team\'s workflow, from agile to simple task tracking.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '📊',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Asana', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Asana&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Jira', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Jira&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Trello', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Trello&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Monday.com', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Monday.com&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ClickUp', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ClickUp&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'best-team-collaboration-tools-remote-hybrid-workspaces',
    title: 'Best Team Collaboration Tools for Remote & Hybrid Workspaces',
    category: 'collaboration',
    description: 'Unlock seamless communication and project execution for your remote and hybrid teams with our hands-on review of top team collaboration tools.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🤝',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Slack', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Slack&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Microsoft Teams', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Microsoft+Teams&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Asana', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Asana&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Google Chat', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Google+Chat&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Discord', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Discord&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'best-productivity-apps-hybrid-teams-2024',
    title: 'The Best Productivity Apps for Hybrid Teams in 2024',
    category: 'productivity',
    description: 'Find the ultimate productivity applications for hybrid teams. Our hands-on review covers Notion, Todoist, and ClickUp to boost collaboration and task management.',
    readTime: '7 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Notion', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Notion&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Todoist', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Todoist&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'ClickUp', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ClickUp&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Asana', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Asana&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Jira', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Jira&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'boost-your-productivity-top-ai-tools-for-business-personal-use',
    title: 'Boost Your Productivity: Top AI Tools for Business & Personal Use',
    category: 'ai-tools',
    description: 'Unlock peak productivity with top AI tools for business and personal use. Hands-on reviews of Notion AI, ChatGPT, and Grammarly AI.',
    readTime: '8 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Notion AI', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Notion+AI&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'ChatGPT', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ChatGPT&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Grammarly AI', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Grammarly+AI&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'top-marketing-automation-tools-2024',
    title: 'Top Marketing Automation Tools to Scale Your Business in 2024',
    category: 'marketing-tools',
    description: 'Discover the best marketing automation tools like ActiveCampaign, Mailchimp, and HubSpot to streamline campaigns, nurture leads, and drive growth in 2024.',
    readTime: '8 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ActiveCampaign', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ActiveCampaign&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Mailchimp', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Mailchimp&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'HubSpot Marketing Hub', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=HubSpot+Marketing+Hub&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'GetResponse', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=GetResponse&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Drip', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Drip&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'essential-design-software-ui-ux-professionals-beginners',
    title: 'Essential Design Software for UI/UX Professionals & Beginners',
    category: 'design-tools',
    description: 'Uncover the must-have design software for UI/UX. Hands-on reviews of Figma, Adobe XD, and Sketch for pros and beginners. Find your perfect tool!',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Guide',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Figma', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Figma&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Adobe XD', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Adobe+XD&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Sketch', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Sketch&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'InVision Studio', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=InVision+Studio&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ProtoPie', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ProtoPie&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'the-best-crm-for-small-business-boost-sales-customer-growth',
    title: 'The Best CRM for Small Business: Boost Sales & Customer Growth',
    category: 'crm-sales',
    description: 'Hands-on review of the best CRM for small business: HubSpot, Zoho, and Salesforce. Manage leads, automate sales, and drive customer relationship growth.',
    readTime: '6 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '📈',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'HubSpot CRM', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=HubSpot+CRM&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Zoho CRM', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Zoho+CRM&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Salesforce Essentials', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Salesforce+Essentials&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Pipedrive', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Pipedrive&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ActiveCampaign', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ActiveCampaign&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'best-project-management-software-agile-teams-2024',
    title: 'Top 10 Project Management Software for Agile Teams in 2024',
    category: 'project-management',
    description: 'Discover the best project management software for agile teams in 2024. Our hands-on review compares Jira, Asana, Monday.com and more.',
    readTime: '9 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Jira', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Jira&tag=smarttoolp-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Asana', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Asana&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Monday.com', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Monday.com&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'ClickUp', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ClickUp&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Trello', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Trello&tag=smarttoolp-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },
];
