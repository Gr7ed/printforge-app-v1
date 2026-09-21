"use client"

import Link from "next/link";
import Image from "next/image";
import  PrintForgeLogo  from '@/public/printforge-logo.svg'; 
import  PrintForgeLogoMobile  from '@/public/printforge-logo-icon.svg'; 
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="flex w-full items-center justify-between bg-white px-4 py-6 text-gray-800 shadow-md sm:px-6 md:px-8">
          <Link href="/">
            <div>
                <Image src={PrintForgeLogo} alt="PrintForge Logo" className="hidden h-8 w-auto md:block" loading="eager"/>
                <Image src={PrintForgeLogoMobile} alt="PrintForge Logo" className="h-8 w-auto md:hidden sm:block" loading="eager"/>
            </div>
          </Link>
          <nav className="ml-auto">
            <ul className="flex whitespace-nowrap gap-4 sm:gap-8">
              <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models")} className="hover:underline hover:underline-offset-10 ">3D Models</NavLink>
              <NavLink href="/about" isActive={pathname === "/about"} className="hover:underline hover:underline-offset-10 ">About</NavLink>
            </ul>
          </nav>
        </header>
    )
}     