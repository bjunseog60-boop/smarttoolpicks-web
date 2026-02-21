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
