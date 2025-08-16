import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react";
import { navItems } from "@/lib/data";
import type { NavItem } from "@/lib/types";

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

export function Footer() {
  return (
    <footer className="bg-background text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
               <Image src={"/12.png"} alt="" height={100} width={100}></Image>
            </Link>
            <div>
              <h4 className="font-semibold text-foreground">Our Motto</h4>
              <p className="text-muted-foreground">"From Business Stories to Business Glory"</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/grow.media.co" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.facebook.com/grow.media.co" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="https://wa.me/+918957215669" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><WhatsAppIcon className="h-6 w-6" /></Link>
              <a href="mailto:nitinkumarjf5249@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item: NavItem) => (
                <li key={item.title}>
                  <Link href={`/${item.href}`} className="text-muted-foreground hover:text-primary">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Grow Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
