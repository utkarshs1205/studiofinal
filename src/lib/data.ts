
import { TrendingUp, PenTool, DollarSign, Users, BarChart2, Megaphone } from 'lucide-react';
import type { Service, Testimonial, TeamMember, CaseStudy, BlogPost, NavItem } from './types';

export const navItems: NavItem[] = [
  { title: 'About', href: '#about' },
  { title: 'Team', href: '#team' },
  { title: 'Services', href: '#services' },
  { title: 'Clients', href: '#clients' },
  { title: 'Packages', href: '#packages' },
  { title: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'Social Media Strategy',
    description: 'We craft data-driven strategies to boost your online presence, engagement, and conversions across all relevant platforms.',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Our creative team produces stunning visuals, compelling copy, and engaging videos that resonate with your target audience.',
  },
  {
    icon: DollarSign,
    title: 'Paid Ads Management',
    description: 'Maximize your ROI with our expertly managed paid advertising campaigns on Facebook, Instagram, and more.',
  },
  {
    icon: Users,
    title: 'Influencer Collaborations',
    description: 'We connect your brand with the right influencers to build credibility and reach new, targeted audiences authentically.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    description: 'Receive detailed reports and actionable insights to track your performance and continuously optimize your strategy.',
  },
  {
    icon: Megaphone,
    title: 'Community Management',
    description: 'We foster a loyal community around your brand by actively engaging with your audience and managing conversations.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Grow Media transformed our online presence. Their team is strategic, creative, and delivered results beyond our expectations. Our engagement has skyrocketed!',
    name: 'Sarah Johnson',
    title: 'CEO, Luxe Apparel',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    quote: 'The best social media agency we\'ve ever worked with. They are true partners who are invested in our success. The ROI on our ad spend has been incredible.',
    name: 'Michael Chen',
    title: 'Founder, TechGadgets Inc.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    quote: 'From content creation to analytics, Grow Media handles it all with professionalism and expertise. Highly recommended for any brand looking to scale.',
    name: 'Jessica Rodriguez',
    title: 'Marketing Director, Fresh Eats',
    avatar: 'https://placehold.co/100x100.png',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Nitin Kumar',
    role: 'Founder, CEO',
    bio: 'The visionary leader steering Grow Media towards new heights with passion and innovation.',
    avatar: 'https://placehold.co/400x400.png',
  },
  {
    name: 'Apoorva',
    role: 'Creative Designer',
    bio: 'Brings brands to life with stunning visuals and a keen eye for design.',
    avatar: 'https://placehold.co/400x400.png',
  },
    {
    name: 'Shreya',
    role: 'Creative Designer',
    bio: 'Crafts compelling visual narratives that captivate and engage audiences.',
    avatar: 'https://placehold.co/400x400.png',
  },
  {
    name: 'Dr. Aisha',
    role: 'Influencer Marketing',
    bio: 'Builds authentic connections between brands and influential voices.',
    avatar: 'https://placehold.co/400x400.png',
  },
  {
    name: 'Shivam',
    role: 'Production Team',
    bio: 'Executes flawless campaigns and brings creative concepts to reality.',
    avatar: 'https://placehold.co/400x400.png',
  },
    {
    name: 'Himanshu',
    role: 'Production Team',
    bio: 'Manages the technical execution of projects, ensuring quality and timeliness.',
    avatar: 'https://placehold.co/400x400.png',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: 'EcoWear',
    challenge: 'Increase brand awareness and online sales for a new line of sustainable fashion products among eco-conscious millennials.',
    strategy: 'Launched a multi-platform campaign using influencer marketing, targeted Instagram ads, and engaging video content showcasing the product lifecycle.',
    results: 'Achieved a 300% increase in online sales within the first quarter, a 5x ROAS, and grew their Instagram following by 50,000.',
    imageUrl: 'https://placehold.co/800x600.png',
  },
  {
    client: 'GourmetBox',
    challenge: 'Drive subscriptions for a new meal-kit delivery service in a highly competitive market.',
    strategy: 'Developed a content strategy focused on user-generated content, recipe tutorials, and a referral program. Utilized Facebook and Pinterest ads to target foodies.',
    results: 'Acquired 10,000 new subscribers in 6 months, lowered cost-per-acquisition by 40%, and established a thriving online community.',
    imageUrl: 'https://placehold.co/800x600.png',
  },
  {
    client: 'InnovateTech',
    challenge: 'Generate B2B leads and establish thought leadership for a SaaS startup in the project management space.',
    strategy: 'Focused on LinkedIn content marketing, including in-depth articles, case studies, and webinars. Ran highly targeted LinkedIn ad campaigns.',
    results: 'Generated over 500 qualified leads per month, increased website traffic from social media by 200%, and positioned the CEO as a key industry voice.',
    imageUrl: 'https://placehold.co/800x600.png',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-instagram-reels',
    title: 'Mastering Instagram Reels: A 2024 Guide for Brands',
    excerpt: 'Instagram Reels are no longer just a trend; they\'re a cornerstone of modern social media strategy. Discover how to create engaging Reels that captivate your audience.',
    imageUrl: 'https://placehold.co/1200x800.png',
    category: 'Strategy',
    author: 'Emily Carter',
    date: '2024-05-20',
    content: 'Full blog post content goes here...',
  },
  {
    slug: 'tiktok-ads-roi',
    title: 'The Ultimate Guide to Maximizing ROI with TikTok Ads',
    excerpt: 'TikTok offers a unique opportunity to reach a massive, engaged audience. Learn the secrets to creating high-performing ad campaigns that deliver real results.',
    imageUrl: 'https://placehold.co/1200x800.png',
    category: 'Paid Ads',
    author: 'Olivia Nguyen',
    date: '2024-05-15',
    content: 'Full blog post content goes here...',
  },
  {
    slug: 'building-authentic-brand-community',
    title: 'How to Build an Authentic Brand Community on Social Media',
    excerpt: 'A strong community is your brand\'s greatest asset. We share our top tips for fostering genuine connections and turning followers into loyal advocates.',
    imageUrl: 'https://placehold.co/1200x800.png',
    category: 'Content',
    author: 'Alex Martinez',
    date: '2024-05-10',
    content: 'Full blog post content goes here...',
  },
  {
    slug: 'future-of-influencer-marketing',
    title: 'The Future of Influencer Marketing: Trends to Watch',
    excerpt: 'Influencer marketing is constantly evolving. Stay ahead of the curve with our breakdown of the key trends shaping the industry in the coming year.',
    imageUrl: 'https://placehold.co/1200x800.png',
    category: 'Influencers',
    author: 'Emily Carter',
    date: '2024-05-05',
    content: 'Full blog post content goes here...',
  },
];

export const blogCategories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

    