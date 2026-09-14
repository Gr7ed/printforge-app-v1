import "./globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import  PrintForgeLogo  from '@/public/printforge-logo.svg'; 
import  PrintForgeLogoMobile  from '@/public/printforge-logo-icon.svg'; 
import { Montserrat_Alternates, Albert_Sans } from 'next/font/google';

const montserratAlternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify required weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat-alternates'
});

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout(
    {children} : Readonly<{ children: React.ReactNode;}>
  ) 
  {
  return (
    <html
      lang="en"
    >
      <head>
        <title>PrintForge</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${montserratAlternates.variable} ${albertSans.className}`}>
        <header className="flex items-center justify-between px-8 py-6 bg-white text-gray-800 shadow-md">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src={PrintForgeLogo} alt="PrintForge Logo" className="hidden md:block h-8" />
            </Link>
            <Link href="/">
              <Image src={PrintForgeLogoMobile} alt="PrintForge Logo" className="md:hidden h-8" />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li><Link href="/3d-models" className="hover:underline hover:underline-offset-10 hover:text-orange-400 ">3D Models</Link></li>
              <li><Link href="/about" className="hover:underline hover:underline-offset-10 hover:text-orange-400 ">About</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
