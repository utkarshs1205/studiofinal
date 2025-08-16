
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 md:top-4 z-50 w-full mt-0 md:mt-4">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 md:border-gray-500 md:border md:rounded-full">
        <Link href="/" className="flex items-center">
          <Image src={"/12.png"} alt="" height={100} width={100}/>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.title}
              href={isHome ? item.href : `/${item.href}`}
              className={cn(
                "relative text-sm font-medium text-foreground transition-colors hover:text-primary group"
              )}
            >
              {item.title}
              <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={isHome ? "#contact" : "/#contact"}>Book a Free Call</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                     <span className="font-bold text-lg">Grow Media</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item: NavItem) => (
                    <Link
                      key={item.title}
                      href={isHome ? item.href : `/${item.href}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        "text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full" size="lg">
                        <Link href={isHome ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)}>Book a Free Strategy Call</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    