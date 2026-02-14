
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
  desc?: string;
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

export const SERVICE_PRICING_MAP: Record<string, DetailedPricingItem[]> = {
  'clipping-path': [
    { label: 'Basic Path', price: '$0.49', desc: 'Simple shapes like mobile, book, box.' },
    { label: 'Simple Path', price: '$0.95', desc: 'Slightly curved items like shoes, simple jewelry.' },
    { label: 'Medium Path', price: '$2.50', desc: 'Multiple holes items like chairs, complex bags.' },
    { label: 'Complex Path', price: '$5.00', desc: 'Bicycles, complex jewelry, engine parts.' },
    { label: 'Super Complex', price: 'Custom', desc: 'Intricate designs like bridal wear or mesh.' }
  ],
  'background-removal': [
    { label: 'Pure White BG', price: '$0.45', desc: 'Optimized for Amazon and eBay.' },
    { label: 'Transparent PNG', price: '$0.55', desc: 'Layered files for web design.' },
    { label: 'Custom Background', price: '$1.20', desc: 'Composite with realistic shadow.' }
  ],
  'photo-retouching': [
    { label: 'Basic Product', price: '$1.50', desc: 'Dust, scratch removal and brightness.' },
    { label: 'Model Retouching', price: '$3.50', desc: 'Skin smoothing and blemish removal.' },
    { label: 'Jewelry Polishing', price: '$5.00', desc: 'High-end shine and diamond enhancement.' },
    { label: 'High-End Fashion', price: '$8.00+', desc: 'Magazine quality frequency separation.' }
  ],
  'image-masking': [
    { label: 'Standard Masking', price: '$1.20', desc: 'Simple hair or fur edges.' },
    { label: 'Complex Masking', price: '$2.99', desc: 'Flying hair, smoke or translucent items.' },
    { label: 'Layer Masking', price: '$4.50', desc: 'Advanced alpha channel processing.' }
  ],
  'drop-shadow': [
    { label: 'Natural Shadow', price: '$0.60', desc: 'Preserving existing camera shadow.' },
    { label: 'Drop Shadow', price: '$0.75', desc: 'Created shadow for floating look.' },
    { label: 'Reflection Shadow', price: '$1.25', desc: 'Mirror-like 3D depth effect.' }
  ],
  'ghost-mannequin': [
    { label: 'Standard Neck Joint', price: '$1.25', desc: 'Combining front and back neck shots.' },
    { label: 'Bottom Joint', price: '$2.50', desc: 'Adding bottom details for skirts/trousers.' },
    { label: '3D Hollow Effect', price: '$4.00', desc: 'Full mannequin removal with depth.' }
  ],
  'mirror-effect': [
    { label: 'Simple Mirror', price: '$1.00', desc: 'Direct reflection on flat surface.' },
    { label: 'Perspective Mirror', price: '$2.50', desc: 'Reflection on angled or curved floor.' },
    { label: 'High Gloss Finish', price: '$4.00', desc: 'Polished look for luxury cosmetics.' }
  ],
  'color-change': [
    { label: 'Single Color Swap', price: '$1.50', desc: 'Changing one solid color to another.' },
    { label: 'Multi-Variant', price: '$1.20', desc: 'Creating multiple SKUs from one shot.' },
    { label: 'Pattern Overlay', price: '$3.50', desc: 'Applying textures and complex patterns.' }
  ]
};

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
    fullDescription: 'Make your products pop with transparent or pure white backgrounds optimized for Amazon, Shopify, and eBay. We handle hair, fur, and intricate edges with ease.',
    icon: 'bgremove',
    features: ['Transparent BG', 'Pure White BG', 'Amazon/eBay Ready', 'Bulk Processing'],
    priceRange: 'Starting at $0.45/photo',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Photo Retouching',
    slug: 'photo-retouching',
    description: 'High-end beauty and product retouching services.',
    fullDescription: 'Transform your raw shots into catalog-ready masterpieces. From skin smoothing and blemish removal to high-end jewelry polishing and product shine enhancement.',
    icon: 'retouching',
    features: ['Skin Retouching', 'Jewelry Polishing', 'Blemish Removal', 'High-End Finish'],
    priceRange: 'Starting at $1.50/photo',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Image Masking',
    slug: 'image-masking',
    description: 'Advanced masking for hair, fur, and transparent objects.',
    fullDescription: 'Standard clipping paths fail where masking excels. We use alpha channels and layer masks to preserve delicate details like flying hair, wool, smoke, and transparent fabrics.',
    icon: 'masking',
    features: ['Hair Masking', 'Translucency Preservation', 'Soft Edges', 'Alpha Channel'],
    priceRange: 'Starting at $1.20/photo',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Drop Shadow',
    slug: 'drop-shadow',
    description: 'Add depth and realism with professional shadow effects.',
    fullDescription: 'Give your products a professional 3D look. We create natural shadows, drop shadows, and reflection shadows that help your items sit perfectly on the page.',
    icon: 'shadow',
    features: ['Natural Shadow', 'Drop Shadow', 'Reflection Shadow', 'Floating Effect'],
    priceRange: 'Starting at $0.60/photo',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Ghost Mannequin',
    slug: 'ghost-mannequin',
    description: '3D invisible mannequin effect for apparel photography.',
    fullDescription: 'Create a hollow, 3D effect for your clothing items by removing the mannequin and stitching multiple shots together. Essential for fashion e-commerce.',
    icon: 'ghost',
    features: ['Neck Joint', '3D Hollow Effect', 'Sleeve Alignment', 'Natural Creases'],
    priceRange: 'Starting at $1.25/photo',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    title: 'Mirror Effect',
    slug: 'mirror-effect',
    description: 'Stunning reflection and mirror styling for luxury goods.',
    fullDescription: 'Enhance the premium feel of your products with high-quality mirror reflections. Perfect for perfume bottles, watches, and high-end tech products.',
    icon: 'mirror',
    features: ['High-Gloss Finish', 'Natural Gradience', 'Perspective Matching', 'Luxury Styling'],
    priceRange: 'Starting at $1.00/photo',
    imageUrl: 'https://images.unsplash.com/photo-1583420662457-b52ff0f1201f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    title: 'Color Change',
    slug: 'color-change',
    description: 'Professional color correction and variant creation.',
    fullDescription: 'Save photography costs by shooting one product and letting us create all color variants. We match specific Pantone colors or real-life samples with 100% accuracy.',
    icon: 'color',
    features: ['Pantone Matching', 'Multiple Variants', 'Texture Preservation', 'Brightness Fix'],
    priceRange: 'Starting at $1.00/photo',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
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

// Added missing DETAILED_PRICING export used in DetailedPricingSection.tsx
export const DETAILED_PRICING: DetailedPricingCategory[] = [
  {
    title: 'Clipping Path',
    basePrice: '$0.49 per photo',
    imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800',
    items: SERVICE_PRICING_MAP['clipping-path']
  },
  {
    title: 'Background Removal',
    basePrice: '$0.45 per photo',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    items: SERVICE_PRICING_MAP['background-removal']
  },
  {
    title: 'Photo Retouching',
    basePrice: '$1.50 per photo',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    items: SERVICE_PRICING_MAP['photo-retouching']
  }
];
