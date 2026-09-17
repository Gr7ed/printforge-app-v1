import type { CategoryPageProps, Category } from '@/app/types'
import { getCategoryBySlug } from '@/app/lib/categories'

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category: Category = getCategoryBySlug(slug);
    return (
        <div>
            <h1>{category.displayName}</h1>
            <p>Slug: {category.slug}</p>
        </div>
    );
    
}