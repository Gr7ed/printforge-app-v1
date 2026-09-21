import Link from "next/link";


export default function NavLink({ href, children, isActive, className = "" }: { href: string; children: React.ReactNode; isActive: boolean; className?: string }) {
    const activeClass = isActive ? "text-orange-400" : "text-gray-800";
    return (
         <li><Link href={href} className={` ${activeClass} focus:text-orange-400 ${className}`}>{children}</Link></li>
    )
}