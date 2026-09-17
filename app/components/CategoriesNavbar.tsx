import Link from "next/link"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNavbar() {
	const categories: Category[] = getAllCategories()

	return (
		<nav aria-label="Model categories" className="flex flex-wrap gap-2">
			{categories.map((category) => (
				<Link
					key={category.slug}
					href={`/3d-models/categories/${category.slug}`}
					className="rounded-full bg-[#f5f2ed] px-4 py-1 text-sm font-semibold text-[#17231f] transition duration-200 hover:bg-[#e0d9cd]"
				>
					{category.displayName}
				</Link>
			))}
		</nav>
	)
}
