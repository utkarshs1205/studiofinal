
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { services, teamMembers } from "@/lib/data";
import type { Service, TeamMember } from "@/lib/types";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Youtube, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MotionDiv } from "@/components/Motiondiv";


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "We Grow Brands Online.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 h-auto flex items-center justify-center flex-wrap leading-tight">
          <span className="inline-block animate-typing border-r-4 border-r-primary pr-1 whitespace-pre-wrap break-words">
            {text}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Welcome to Grow Media, where we blend creativity with strategy to elevate your social media presence. Let's build something amazing together.
        </p>
        <div className="mt-10 animate-fade-in-up animation-delay-400">
          <div className="inline-block bg-secondary text-secondary-foreground font-semibold py-3 px-6 rounded-lg shadow-md border border-border animate-pulse-slow">
            <span className="text-primary mr-2">✓</span>
            50+ Happy Clients in 5 Years
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h2>
                     <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        Get to know the story, values, and people that make Grow Media a trusted partner for brands worldwide.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-12">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
      <p className="text-lg text-muted-foreground mb-4">
        Our mission is to empower brands to connect with their audiences in meaningful ways. We believe in the power of social media to build communities, drive growth, and create lasting impact. We are more than just a marketing agency; we are your dedicated partners in the digital world.
      </p>
      <p className="text-lg text-muted-foreground">
        We are committed to transparency, creativity, and data-driven results. Your success is our success.
      </p>
    </div>
    <div className="flex justify-center">
  <div className="relative h-60 w-80 rounded-lg overflow-hidden group">
    <Image
      src="/missionct.png"
      alt="Our mission"
      fill={true}
      data-ai-hint="digital marketing teamwork"
      className="object-cover transition-transform duration-500"
    />
  </div>
</div>
  </div>
</div>
            </div>
        </section>
    )
}

function TeamSection() {
  const teamMembers: TeamMember[] = [
  {
    name: "Nitin Kumar",
    role: "Founder, CEO",
    bio: "The visionary leader steering Grow Media towards new heights with passion and innovation.",
    avatar: "/nitin.jpg",
  },
  {
    name: "Apoorva",
    role: "Creative Designer",
    bio: "Brings brands to life with stunning visuals and a keen eye for design.",
    avatar: "/ap.jpg",
  },
  {
    name: "Shreya",
    role: "Creative Designer",
    bio: "Crafts compelling visual narratives that captivate and engage audiences.",
    avatar: "/sh.jpg",
  },
  {
    name: "Dr. Aisha",
    role: "Influencer Marketing",
    bio: "Builds authentic connections between brands and influential voices.",
    avatar: "/as.jpg",
  },
{
    name: "Shivam",
    role: "Production Team",
    bio: "Executes flawless campaigns and brings creative concepts to reality.",
    avatar: "/shi.jpg",
  },
  {
    name: "Himanshu",
    role: "Production Team",
    bio: "Manages the technical execution of projects, ensuring quality and timeliness.",
    avatar: "/him.jpg",
  },
];

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            The passionate minds behind your brand's success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member: TeamMember) => (
            <Card
              key={member.name}
              className={`text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                member.role === 'Founder, CEO' ? 'bg-secondary border-primary border-2 shadow-lg' : 'bg-background'
              }`}
            >
              <CardHeader className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={128}
                    height={128}
                    className={`rounded-full object-cover border-4 ${
                      member.role === 'Founder, CEO' ? 'border-primary' : 'border-secondary'
                    }`}
                    data-ai-hint="professional portrait"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A complete suite of social media solutions designed to help your brand thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <Card key={service.title} className="flex flex-col text-center items-center p-6 md:p-8 border-2 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-background">
              <div className="p-5 bg-primary/10 rounded-full mb-5 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const clients = [
    { name: "DANBRO", logo: "/l1.jpg", hint: "bakery logo" },
    { name: "BARBEQUE NATION", logo: "/l2.png", hint: "restaurant logo" },
    { name: "EMAAR INDIA", logo: "/l3.webp", hint: "emaar india" },
    { name: "Reliance Jewels", logo: "/rr.webp", hint: "reliance logo" },
    { name: "Dentique", logo: "/l5.jpg", hint: "Dental logo" },
  ];

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clients</h2>
          <p className="text-md md:text-lg text-muted-foreground mt-2">
            We have worked for
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map(client => (
            <div key={client.name} className="flex flex-col items-center gap-4 text-center transition-transform duration-300 hover:scale-105">
              <div className="relative w-48 h-36 rounded-lg overflow-hidden bg-white shadow-md p-4 flex items-center justify-center">
                 <Image src={client.logo} alt={`${client.name} logo`} width={160} height={120} className="object-contain" data-ai-hint={client.hint}/>
              </div>
              <p className="font-semibold text-foreground">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  const packages = [
    {
      type: "branding"
    },
    {
      type: "service",
      name: "Basic",
      price: "24,999",
      period: "/month",
      features: [
        "Primary Logo",
        "Secondary Logo",
        "Submark",
        "Favicon",
        "Colour Palette + Typography",
        "Business Card",
        "Brand Guidelines",
        "Visual Mood Board",
        "letter Head",
      ],
      isPopular: false,
    },
    {
      type: "service",
      name: "Intermediate",
      price: "29,999",
      period: "/month",
      features: [
        "Primary Logo",
        "Secondary Logo",
        "Submark",
        "Favicon",
        "Colour Palette + Typography",
        "Business Card",
        "Brand Guidelines",
        "Visual Mood board",
        "Letter Head",
        "Tagline",
        "Stationary Design",
        "Brochure/Catalogue",
        "Brand Presentation",
      ],
      isPopular: true,
    },
  ];

    const socialPackages = [
    {
      type: "title",
    },
    {
      type: "service",
      name: "Basic",
      price: "14,999",
      period: "/month",
      features: [
        "6 Posts Per Month",
        "6 Stories Per Month",
        "3 Reel Per Month",
        "2 ads per month(ad charges not included)",
        "Relevant Captions",
        "Hashtag Strategy",
        "Content Calendar (With Time & Date)",
        "Consistent Posting",
        "Instagram & Facebook Handling",
      ],
      isPopular: false,
    },
    {
      type: "service",
      name: "Intermediate",
      price: "19,999",
      period: "/month",
      features: [
          "2 Posts Per Week",
          "4 Stories Per Week",
          "2 Reel Per Week",
          "3 Ads Per Month(ad charges not included)",
          "Relevant Captions",
          "Hashtag Strategy",
          "Content Calendar (With Time & Date)",
          "Ads Campaign Management",
          "Update With Ads Reports",
          "Consistent Posting",
          "Instagram & Facebook Handling"
      ],
      isPopular: true,
    },
    {
        type: 'service',
        name: 'Premium',
        price: '25,999',
        period: '/month',
        features: [
          '3 Posts Per Week',
          '4 Stories Per Week',
          '3 Reel Per Week',
          '4 ads in a month  (ad charges not included)',
          'Relevant Captions',
          'Hashtag Strategy',
          'Content Calendar (With Time & Date)',
          'Ads Campaign Management',
          'Apply Various Social Media Marketing Strategies',
          'Update With Ads Reports',
          'Update With Monthly Performance Report',
          'Consistent Posting',
          'Instagram & Facebook Handling',
        ],
        isPopular: false,
      },
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Packages</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Choose the perfect plan to elevate your brand's social media presence.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-[300px] sm:max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto relative"
        >
          <CarouselContent>
            {packages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  {pkg.type === 'service' ? (
                    <Card className={`flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${pkg.isPopular ? 'border-2 border-primary shadow-xl' : 'border'}`}>
                      {pkg.isPopular && (
                          <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                              Most Popular
                          </div>
                      )}
                      <CardHeader className="p-6 text-center">
                          <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                          <div className="mt-4">
                              <span className="text-4xl font-extrabold text-foreground">₹{pkg.price}</span>
                              <span className="text-md font-medium text-muted-foreground">{pkg.period}</span>
                          </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-6 pt-0">
                          <ul className="space-y-3 sm:space-y-4">
                              {pkg.features?.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                                      <span className="text-muted-foreground text-sm">{feature}</span>
                                  </li>
                              ))}
                          </ul>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                          <Button asChild size="lg" className={`w-full ${pkg.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-primary/80 hover:bg-primary'} text-primary-foreground`}>
                              <Link href="#contact">Choose Plan</Link>
                          </Button>
                      </div>
                    </Card>
                  ) : pkg.type === 'branding' ? (
                    <div className="relative rounded-lg overflow-hidden group h-full max-sm:aspect-[2/5] md:aspect-auto">
                      
                      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-xl md:text-3xl font-extrabold text-black tracking-tight">
                          BRANDING
                        </h2>
                        <h2 className="text-xl md:text-3xl font-extrabold text-black tracking-tight mb-4">
                          PACKAGES
                        </h2>
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl md:text-5xl font-bold text-black">GM</span>
                          <div className="border-l-2 border-black pl-2">
                            <span className="text-sm md:text-base font-light text-black tracking-widest block">GROW</span>
                            <span className="text-sm md:text-base font-light text-black tracking-widest block">MEDIA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null }
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2 md:-left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 translate-x-1/2 md:-right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>

        <div className="text-center mt-12 mb-12">
            
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-[300px] sm:max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto relative"
        >
          <CarouselContent>
            {socialPackages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                {pkg.type === 'service' ? (
                  <Card className={`flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${pkg.isPopular ? 'border-2 border-primary shadow-xl' : 'border'}`}>
                    {pkg.isPopular && (
                        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                            Most Popular
                        </div>
                    )}
                    <CardHeader className="p-6 text-center">
                        <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                        <div className="mt-4">
                            <span className="text-4xl font-extrabold text-foreground">₹{pkg.price}</span>
                            <span className="text-md font-medium text-muted-foreground">{pkg.period}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 pt-0">
                        <ul className="space-y-3 sm:space-y-4">
                            {pkg.features?.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                        <Button asChild size="lg" className={`w-full ${pkg.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-primary/80 hover:bg-primary'} text-primary-foreground`}>
                            <Link href="#contact">Choose Plan</Link>
                        </Button>
                    </div>
                  </Card>
                  ) : pkg.type === 'title' ? (
                   <div className="relative rounded-lg overflow-hidden group h-full max-sm:aspect-[2/5] md:aspect-auto">
                      
                      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-xl md:text-3xl font-extrabold text-black tracking-tight">
                          SOCIAL MEDIA
                        </h2>
                        <h2 className="text-xl md:text-3xl font-extrabold text-black tracking-tight mb-4">
                          PACKAGES
                        </h2>
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl md:text-5xl font-bold text-black">GM</span>
                          <div className="border-l-2 border-black pl-2">
                            <span className="text-sm md:text-base font-light text-black tracking-widest block">GROW</span>
                            <span className="text-sm md:text-base font-light text-black tracking-widest block">MEDIA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null }
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2 md:-left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 translate-x-1/2 md:-right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}


function PlatformsSection() {
  const platforms = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/grow.media.co' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1FPqGdNSrQ/' },
  ];

  return (
    <section id="platforms" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Platforms We Master</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          We specialise in creating high-performing Facebook and Instagram ad campaigns that drive real results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-lg mx-auto mb-12">
          {platforms.map((platform) => (
            <Link key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="bg-background p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-3 hover:scale-105 transform">
              <platform.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              <span className="font-semibold text-foreground text-sm md:text-base">{platform.name}</span>
            </Link>
          ))}
        </div>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
          <Link href="#contact">Get Custom Strategy</Link>
        </Button>
      </div>
    </section>
  );
}


function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    )
}

function ContactIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
     <div {...props}>
      <img
        src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLUNQfSfxWsfedNQwGew1hHC2kFwEwVq0a5O4hIPzo4GWWtjkpwgBOogQL7BIPeSipT6tglMTT"
        alt="Customer support illustration"
        className="mx-auto object-contain"
        width={450}
        height={512}
      />
    </div>

  );
}


function ContactSection() {
    return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Talk</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-background p-6 md:p-8 rounded-lg transition-shadow duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:contact.growmedia.co@gmail.com" className="text-muted-foreground hover:text-primary break-all">contact.growmedia.co@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a href="tel:+918957215669" className="text-muted-foreground hover:text-primary">+91 89572 15669</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <WhatsAppIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <a href="https://wa.me/+918957215669" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">+91 89572 15669</a>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 rounded-lg overflow-hidden relative group bg-muted/20 flex items-center justify-center p-4">
              <ContactIllustration className="w-full h-full text-muted-foreground/40 opacity-50 group-hover:opacity-100 group-hover:text-primary/50 transition-all duration-500 transform group-hover:scale-110" />
               <p className="absolute text-center font-bold text-foreground/80 text-lg"></p>
            </div>
          </div>
          <div className="bg-background p-6 md:p-8 rounded-lg transition-shadow duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <ClientsSection />
      <PackagesSection />
      <PlatformsSection />
      <ContactSection />
    </>
  );
}
