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
  { slug: 'all', name: 'All', icon: '✨' },
  { slug: 'productivity', name: 'Productivity', icon: '⚡' },
  { slug: 'ai-tools', name: 'AI Tools', icon: '🤖' },
  { slug: 'marketing', name: 'Marketing', icon: '📈' },
  { slug: 'development', name: 'Development', icon: '💻' },
  { slug: 'hardware', name: 'Hardware & Gear', icon: '⌨️' },
];

export const guides: StyleGuide[] = [  {
    slug: 'best-crm-for-small-business-2026',
    title: 'The 4 Best CRM Software for Small Business in 2026 (Tried & Tested)',
    category: 'productivity',
    description: 'Tired of messy spreadsheets? We tested the top CRMs for small businesses. Find the perfect tool to boost sales and manage customer relationships in 2026.',
    readTime: '14 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '📈',
    image: '/images/guides/best-crm-for-small-business-2026-hero.jpg',
    affiliateProducts: [
      { name: 'HubSpot CRM', brand: 'HubSpot', price: '$0+', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-crm-for-small-business-2026-prod0.jpg' },
      { name: 'Salesforce Essentials', brand: 'Salesforce', price: '$25', url: 'https://amzn.to/example', tag: 'Best for Scaling', image: '/images/guides/best-crm-for-small-business-2026-prod1.jpg' },
      { name: 'Zoho CRM', brand: 'Zoho', price: '$14', url: 'https://amzn.to/example', tag: 'Best Value', image: '/images/guides/best-crm-for-small-business-2026-prod2.jpg' },
      { name: 'monday.com Sales CRM', brand: 'monday.com', price: '$10', url: 'https://amzn.to/example', tag: 'Best User Interface', image: '/images/guides/best-crm-for-small-business-2026-prod3.jpg' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}

export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
    }
  }
  return products;
}

export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
    }
  }
  return products.slice(0, count);
}

export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'productivity', name: 'Productivity' },
  { slug: 'ai-tools', name: 'AI Tools' },
  { slug: 'marketing', name: 'Marketing' },
  { slug: 'development', name: 'Development' },
  { slug: 'hardware', name: 'Hardware & Gear' },
];