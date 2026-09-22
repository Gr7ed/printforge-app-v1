import Link from "next/link";
import { forwardRef } from "react";
import type { NavLinkProps } from "@/app/types";

const NavLink = forwardRef<HTMLLIElement, NavLinkProps>(function NavLink(
    { href, children, isActive = false, className = "" },
    ref,
) {
    return (
        <li ref={ref}>
            <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 items-center px-3 py-2 text-sm font-semibold underline-offset-10 transition-colors hover:text-orange-accent active:text-orange-accent shadow-none hover:underline hover:decoration-orange-accent focus-visible:text-orange-accent sm:text-base ${isActive && "text-orange-accent underline decoration-orange-accent"} ${className}`}
            >
                {children}
            </Link>
        </li>
    );
});

export default NavLink;