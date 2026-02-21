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
];
