import Link from "next/link";
import Image from "next/image";
import  PrintForgeLogo  from '@/public/printforge-logo.svg'; 
import  PrintForgeLogoMobile  from '@/public/printforge-logo-icon.svg'; 

export default function Navbar() {
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
              <li><Link href="/3d-models" className="hover:underline hover:underline-offset-10 hover:text-orange-400 focus:text-orange-400">3D Models</Link></li>
              <li><Link href="/about" className="hover:underline hover:underline-offset-10 hover:text-orange-400 focus:text-orange-400">About</Link></li>
            </ul>
          </nav>
        </header>
    )
}     