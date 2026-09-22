"use client"

import NavLink from "./NavLink"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import type { CategoriesNavbarProps } from "@/app/types"

export default function CategoriesNavbar({ categories = [] }: CategoriesNavbarProps) {
	const pathname = usePathname()
	const activeLinkRef = useRef<HTMLLIElement>(null)

	useEffect(() => {
		activeLinkRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
	}, [pathname])

	return (
		<aside className="sticky top-0 z-30 -mx-4 w-[calc(100%+2rem)] self-start border-y border-[var(--border)] bg-[color:var(--surface-muted)/.96] text-[var(--ink)] backdrop-blur sm:-mx-6 sm:w-[calc(100%+3rem)] lg:top-24 lg:mx-0 lg:w-60 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-0">
		<nav aria-label="Model categories" className="overflow-x-auto text-left">
			<ul className="flex min-w-max gap-1 px-4 py-2 sm:px-6 lg:min-w-0 lg:flex-col lg:gap-0 lg:p-0">
				<NavLink
					ref={pathname === "/3d-models" || (pathname.startsWith("/3d-models/") && !pathname.startsWith("/3d-models/categories/")) ? activeLinkRef : undefined}
					href="/3d-models"
					isActive={pathname === "/3d-models" || (pathname.startsWith("/3d-models/") && !pathname.startsWith("/3d-models/categories/"))}
				>
					All Models
				</NavLink>
			{categories.map((category) => (
				<NavLink
						ref={pathname === `/3d-models/categories/${category.slug}` ? activeLinkRef : undefined}
						key={category.slug}
						href={`/3d-models/categories/${category.slug}`}
						isActive={pathname === `/3d-models/categories/${category.slug}`}
					>	
						{category.displayName}
				</NavLink>
			))}
			</ul>
		</nav>
	</aside>
	)
}
