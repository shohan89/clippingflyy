
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  priceRange: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}
