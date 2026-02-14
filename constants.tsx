
import { Service, FAQItem, Testimonial, NavItem } from './types';

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DetailedPricingItem {
  label: string;
  price: string;
}

export interface DetailedPricingCategory {
  title: string;
  basePrice: string;
  imageUrl: string;
  items: DetailedPricingItem[];
}

export const INDUSTRIES: Industry[] = [
  { id: 'ind-1', title: 'E-commerce', description: 'High-volume product processing for Amazon and eBay.', icon: 'ind-ecommerce' },
  { id: 'ind-2', title: 'Fashion & Apparel', description: 'High-end retouching for clothing brands.', icon: 'ind-fashion' },
  { id: 'ind-3', title: 'Real Estate', description: 'HDR blending and sky replacement.', icon: 'ind-realestate' },
  { id: 'ind-4', title: 'Jewelry & Luxury', description: 'Extreme precision editing for diamonds.', icon: 'ind-jewelry' },
  { id: 'ind-5', title: 'Automotive', description: 'Dynamic reflections for dealerships.', icon: 'ind-automotive' },
  { id: 'ind-6', title: 'Product Photography', description: 'Studio-grade finishing for electronics.', icon: 'ind-product' }
];

export const DETAILED_PRICING: DetailedPricingCategory[] = [
  {
    title: 'Clipping Path Services',
    basePrice: '$0.49 per image',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    items: [
      { label: 'Basic (Round/Square)', price: '$0.49' },
      { label: 'Simple (Curved)', price: '$1.25' },
      { label: 'Medium (Multiple Holes)', price: '$2.49' },
      { label: 'Complex (Many Details)', price: '$6.49' },
      { label: 'Super Complex (Jewelry)', price: '$14.49' }
    ]
  },
  {
    title: 'Ghost Mannequin Services',
    basePrice: '$1.25 per image',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
    items: [
      { label: 'Neck Joint', price: '$1.75' },
      { label: '3D Ghost Effect', price: '$2.99' },
      { label: 'Sleeve Alignment', price: '$2.50' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Clipping Path',
    slug: 'clipping-path',
    description: 'Hand-drawn professional vector paths for precise object isolation.',
    fullDescription: 'Our Clipping Path service is the backbone of high-end product photography. We use 100% manual Pen-Tool paths to ensure pixel-perfect edges that look natural on any background. No AI shortcuts, just pure precision.',
    icon: 'clipping',
    features: ['100% Manual Pen Tool', 'Single/Multiple Paths', 'Print-Ready Formats', 'Bulk Discounts'],
    priceRange: 'Starting at $0.49/photo',
    imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Background Removal',
    slug: 'background-removal',
    description: 'Clean object extraction from complex backgrounds.',
    fullDescription: 'Make your products pop with transparent or pure white backgrounds optimized for Amazon and Shopify.',
    icon: 'bgremove',
    features: ['Transparent BG', 'Pure White BG', 'Amazon/eBay Ready'],
    priceRange: 'Starting at $0.45/photo',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Image Masking',
    slug: 'image-masking',
    description: 'Advanced masking for hair, fur, and transparent objects.',
    fullDescription: 'Standard paths fail where masking excels. We use alpha channels to preserve delicate details like hair and smoke.',
    icon: 'masking',
    features: ['Hair Masking', 'Translucency Preservation', 'Soft Edges'],
    priceRange: 'Starting at $1.20/photo',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  }
];

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { 
    label: 'Services', 
    path: '#',
    children: SERVICES.map(s => ({ label: s.title, path: `/${s.slug}` }))
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' }
];

export const FAQS: FAQItem[] = [
  { question: "What is your turnaround time?", answer: "Standard 24h for most orders. Bulk orders may vary." },
  { question: "Do you offer bulk discounts?", answer: "Yes! Above 100 images monthly, special rates apply." }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah Jenkins", role: "E-comm Manager", content: "Unmatched speed and quality.", avatar: "https://i.pravatar.cc/150?u=sarah" }
];

export const PRICING_PLANS = [
  { name: "Starter", price: "$99", period: "per mo", description: "50 images.", features: ["24h delivery"], cta: "Start Trial", highlight: false }
];
