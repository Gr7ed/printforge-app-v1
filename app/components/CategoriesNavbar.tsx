"use client"

import NavLink from "./NavLink"
import { usePathname } from "next/navigation"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNavbar() {
	const categories: Category[] = getAllCategories()
	const pathname = usePathname()

	return (
		<aside className="w-full lg:sticky lg:top-6 lg:self-start">
		<nav aria-label="Model categories" className="overflow-x-auto rounded-lg bg-white text-left">
			<ul className="flex  min-w-max gap-3 p-2 lg:min-w-0 lg:flex-col">
				<NavLink
				className="hover:underline hover:underline-offset-10 lg:pl-2 lg:hover:no-underline lg:hover:border-l-2 lg:hover:border-orange-400"
					href="/3d-models"
					isActive={pathname === "/3d-models"}
				>
					All Models
				</NavLink>
			{categories.map((category) => (
				<NavLink
					className="hover:underline hover:underline-offset-10 lg:pl-2 lg:hover:no-underline lg:hover:border-l-2 lg:hover:border-orange-400"
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
