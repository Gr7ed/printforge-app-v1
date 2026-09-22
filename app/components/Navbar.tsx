"use client"

import Link from "next/link";
import Image from "next/image";
import  PrintForgeLogo  from '@/public/printforge-logo.svg'; 
import  PrintForgeLogoMobile  from '@/public/printforge-logo-icon.svg'; 
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import type { NavbarItem, NavbarProps } from "@/app/types";

const defaultItems: NavbarItem[] = [
  { href: "/3d-models", label: "3D Models" },
  { href: "/about", label: "About" },
];

export default function Navbar({ items = defaultItems }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(false);
        return;
      }

      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className={`relative w-full border-b border-[#ded9d0] bg-[#f7f5f0]/95 text-[#17231f] transition-shadow duration-300 md:sticky md:top-0 md:z-50 md:backdrop-blur-md ${isScrolled ? "shadow-lg" : "shadow-sm md:shadow-sm"}`}>
      <div className="mx-auto flex w-full max-w-[120rem] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" aria-label="PrintForge home" className="shrink-0">
          <Image src={PrintForgeLogo} alt="PrintForge" className="hidden h-8 w-auto md:block" loading="eager" />
          <Image src={PrintForgeLogoMobile} alt="PrintForge" className="block h-8 w-auto md:hidden" loading="eager" />
        </Link>
        <nav className="ml-auto min-w-0" aria-label="Main navigation">
          <ul className="flex flex-wrap justify-end gap-1 sm:gap-2">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={item.href === "/3d-models" ? pathname.startsWith("/3d-models") : pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}