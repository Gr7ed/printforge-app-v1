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
        <header className="flex w-full items-center justify-between bg-white px-4 py-6 text-gray-800 shadow-md sm:px-6 md:px-8">
          <div>
            <Link href="/">
              <Image src={PrintForgeLogo} alt="PrintForge Logo" className="hidden h-8 w-auto md:block" />
              <Image src={PrintForgeLogoMobile} alt="PrintForge Logo" className="h-8 w-auto md:hidden sm:block" />
            </Link>
          </div>
          <nav className="ml-auto">
            <ul className="flex whitespace-nowrap gap-4 sm:gap-8">
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
