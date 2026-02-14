
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
  {
    id: 'ind-1',
    title: 'E-commerce',
    description: 'High-volume product processing for Amazon, eBay, and Shopify sellers.',
    icon: 'ind-ecommerce'
  },
  {
    id: 'ind-2',
    title: 'Fashion & Apparel',
    description: 'High-end retouching for clothing brands and editorial magazines.',
    icon: 'ind-fashion'
  },
  {
    id: 'ind-3',
    title: 'Real Estate',
    description: 'HDR blending and sky replacement for property listings.',
    icon: 'ind-realestate'
  },
  {
    id: 'ind-4',
    title: 'Jewelry & Luxury',
    description: 'Extreme precision editing for diamonds, watches, and precious metals.',
    icon: 'ind-jewelry'
  },
  {
    id: 'ind-5',
    title: 'Automotive',
    description: 'Dynamic reflections and background clean-up for car dealerships.',
    icon: 'ind-automotive'
  },
  {
    id: 'ind-6',
    title: 'Product Photography',
    description: 'Studio-grade finishing for electronics, furniture, and gadgets.',
    icon: 'ind-product'
  }
];

export const DETAILED_PRICING: DetailedPricingCategory[] = [
  {
    title: 'Clipping Path Services',
    basePrice: '$0.49 per image',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    items: [
      { label: 'Basic Clipping Path', price: '$0.49' },
      { label: 'Simple Clipping Path', price: '$1.25' },
      { label: 'Complex Clipping Path', price: '$2.49' },
      { label: 'Compound Clipping Path', price: '$6.49' },
      { label: 'Extra Complex', price: '$9.49' },
      { label: 'Super Complex', price: '$14.49' }
    ]
  },
  {
    title: 'Image Retouching Service',
    basePrice: '$0.99 per image',
    imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600',
    items: [
      { label: 'Color Correction', price: '$0.99' },
      { label: 'Photo Retouching', price: '$2.50' },
      { label: 'Jewelry Retouching', price: '$2.49' },
      { label: 'Portrait Retouching', price: '$6.49' },
      { label: 'High end Retouching', price: '$9.49' },
      { label: 'Super Complex', price: '$14.49' }
    ]
  },
  {
    title: 'Ghost Mannequin Services',
    basePrice: '$1.25 per image',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
    items: [
      { label: 'Ghost/Doll Remove', price: '$1.25' },
      { label: 'Neck Joint', price: '$1.75' },
      { label: '2D Ghost Mannequin', price: '$1.75' },
      { label: '3D Ghost Mannequin', price: '$2.99' },
      { label: 'Jewelry Neck', price: '$3.99' },
      { label: '3D Shoe Effect', price: '$3.99' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Clipping Path',
    slug: 'clipping-path',
    description: 'Hand-drawn professional vector paths for 100% precise object isolation.',
    fullDescription: 'Our Clipping Path service uses the Pen Tool in Photoshop to manually create high-quality paths. This is the industry standard for clean, sharp edges on product photos, ensuring perfection for catalogs and e-commerce stores.',
    icon: 'clipping',
    features: ['Manual Pen Tool Paths', 'Single/Multiple Paths', 'Compound Paths', 'Super Accurate Edges'],
    priceRange: 'Starting at $0.39/photo',
    imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Background Removal',
    slug: 'background-removal',
    description: 'Clean object extraction from complex backgrounds for a professional look.',
    fullDescription: 'Make your products stand out by removing distracting backgrounds. We provide transparent, white, or custom background replacements that meet the strict requirements of Amazon, eBay, and Shopify.',
    icon: 'bgremove',
    features: ['Transparent Background', 'Pure White (255,255,255)', 'Custom Color Backdrops', 'Batch Processing'],
    priceRange: 'Starting at $0.45/photo',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Image Masking',
    slug: 'image-masking',
    description: 'Advanced masking for hair, fur, and transparent objects with soft edges.',
    fullDescription: 'Standard clipping paths aren\'t enough for hair, fur, or semi-transparent fabrics. Our Image Masking service uses advanced alpha channel and layer masking techniques to preserve every delicate detail.',
    icon: 'masking',
    features: ['Hair & Fur Masking', 'Translucency Preservation', 'Alpha Channel Masking', 'Edge Refinement'],
    priceRange: 'Starting at $1.20/photo',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Shadow Creation',
    slug: 'shadow-effect',
    description: 'Adding depth and dimension with realistic natural or drop shadows.',
    fullDescription: 'Give your products a professional, grounded look. We create natural, drop, or reflection shadows that make your items look like they were shot in a premium studio environment.',
    icon: 'shadow',
    features: ['Natural Shadows', 'Drop Shadows', 'Reflection Shadows', 'Cast Shadows'],
    priceRange: 'Starting at $0.50/photo',
    imageUrl: 'https://images.unsplash.com/photo-1526170315873-3a561629923d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Photo Retouching',
    slug: 'photo-retouching',
    description: 'Complete high-end retouching for products, models, and fashion.',
    fullDescription: 'From skin smoothing to dust and scratch removal, our retouching service enhances the quality of your images while maintaining a natural, high-resolution aesthetic.',
    icon: 'retouching',
    features: ['Dust & Scratch Removal', 'Skin Retouching', 'Wrinkle Removal', 'Shape Correction'],
    priceRange: 'Starting at $2.50/photo',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Color Correction',
    slug: 'color-correction',
    description: 'Balanced color, exposure, and tone for vibrant and consistent imagery.',
    fullDescription: 'Ensure your products look exactly like they do in real life. We correct white balance, exposure, saturation, and vibrancy to provide professional-grade color consistency across your catalog.',
    icon: 'color',
    features: ['White Balance Adjustment', 'Exposure Correction', 'Saturation & Vibrancy', 'Tonal Balancing'],
    priceRange: 'Starting at $0.75/photo',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    title: 'Ghost Mannequin',
    slug: 'ghost-mannequin',
    description: '3D apparel effect by removing mannequins and combining images.',
    fullDescription: 'Create a "hollow man" or 3D effect for your clothing items. We seamlessly combine the neck part and the outer shell while removing the mannequin to give your garments a perfect fit and shape.',
    icon: 'ghost',
    features: ['Neck Join', 'Invisible Mannequin', 'Sleeve Alignment', '3D Apparel Effect'],
    priceRange: 'Starting at $1.50/photo',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    title: 'Mirror Effect',
    slug: 'mirror-effect',
    description: 'Elegant reflection effects that add a luxury feel to product shots.',
    fullDescription: 'Enhance your product presentation with high-quality mirror reflections. Perfect for luxury items like jewelry, perfumes, and electronics to create a sophisticated, high-end studio look.',
    icon: 'mirror',
    features: ['Gradient Reflections', 'Soft Mirror Edges', 'Surface Opacity Control', '3D Grounding'],
    priceRange: 'Starting at $0.90/photo',
    imageUrl: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    title: 'Vector Conversion',
    slug: 'vector-conversion',
    description: 'Converting low-res raster images into scalable, high-quality vectors.',
    fullDescription: 'Transform your blurry logos or sketches into infinitely scalable vector files. We provide hand-drawn vectorization for logos, icons, and illustrations in AI, EPS, and SVG formats.',
    icon: 'vector',
    features: ['Hand-Drawn Paths', 'Infinitely Scalable', 'Logo Vectorization', 'AI/EPS/SVG Delivery'],
    priceRange: 'Starting at $5.00/image',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for boutique sellers and solo photographers.",
    features: ["50 Images / Mo", "24h Turnaround", "Email Support", "Unlimited Revisions"],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Business",
    price: "$499",
    period: "per month",
    description: "For growing brands and high-volume studios.",
    features: ["300 Images / Mo", "12h Turnaround", "Priority Support", "Custom Presets", "Dedicated Editor"],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "Advanced solutions for global e-commerce leaders.",
    features: ["Unlimited Volume", "API Integration", "Dedicated Success Manager", "SLA Guarantees", "Custom Workflows"],
    cta: "Contact Sales",
    highlight: false
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your turnaround time?",
    answer: "Our standard turnaround time is 24 hours for most orders. High-end retouching and vector conversion may take up to 48 hours depending on volume and complexity."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer significant volume-based pricing for orders exceeding 100 images per month. Contact our sales team for a custom quote."
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept RAW (CR2, NEF, ARW, etc.), TIFF, PSD, and high-resolution JPEG files. For vector conversion, we accept any raster image (JPG, PNG, BMP)."
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely. We offer unlimited minor revisions until you are 100% satisfied with the result. Our goal is to exceed your expectations."
  }
];

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { 
    label: 'Services', 
    path: '#',
    children: SERVICES.map(s => ({ label: s.title, path: `/services/${s.slug}` }))
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "E-commerce Manager, VogueStyle",
    content: "PixelPerfect Pro has transformed our product catalog. The consistency and speed they offer are unmatched in the industry.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Real Estate Photographer",
    content: "My property listings sell significantly faster since I started using their HDR editing service. The quality is incredibly natural.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Designer, Aura Fashion",
    content: "The masking quality for complex hair and lace is simply breathtaking. No one else does it this well.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Peak Marketing",
    content: "Scaling our image production became a breeze. Their 6-hour turnaround has saved our campaign launches multiple times.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Liam Smith",
    role: "Top Amazon Seller",
    content: "They understand exactly what Amazon needs. My conversion rates went up by 35% after refreshing my listing photos here.",
    avatar: "https://i.pravatar.cc/150?u=liam"
  },
  {
    name: "Sophie Muller",
    role: "Retail Director, Loft Furniture",
    content: "The shadow creation is so realistic. It gives our furniture a premium studio feel without the expensive studio costs.",
    avatar: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    name: "James Wilson",
    role: "Photographer, Luxury Chronos",
    content: "Editing high-end watches requires extreme precision. PixelPerfect handles reflections and micro-dust perfectly every time.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Anya Petrova",
    role: "Booking Agent, Elite Models",
    content: "Subtle and professional model retouching. They preserve skin texture perfectly while enhancing the overall aesthetic.",
    avatar: "https://i.pravatar.cc/150?u=anya"
  },
  {
    name: "Hiroshi Tanaka",
    role: "CMO, AutoTrend Japan",
    content: "Excellent car retouching. The background clean-up and reflection balancing are first-class. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=hiroshi"
  },
  {
    name: "Chloe Dubois",
    role: "Artisan, Sparkle & Co",
    content: "The jewelry retouching makes my handmade pieces look absolutely world-class. Thank you for the incredible attention to detail.",
    avatar: "https://i.pravatar.cc/150?u=chloe"
  }
];
