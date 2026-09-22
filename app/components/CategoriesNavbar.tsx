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
		<aside className="sticky top-0 z-30 w-full border-none bg-[#f7f5f0]/95 text-[#17231f] self-start lg:w-60 lg:top-24">
		<nav aria-label="Model categories" className="overflow-x-auto  text-left ">
			<ul className="flex min-w-max gap-1 p-2 lg:min-w-0 lg:flex-col">
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
