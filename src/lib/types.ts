import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface CaseStudy {
  client: string;
  challenge: string;
  strategy: string;
  results: string;
  imageUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  content: string; 
}
