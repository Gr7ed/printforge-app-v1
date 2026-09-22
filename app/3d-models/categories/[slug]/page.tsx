import type { CategoryPageProps, Model } from '@/app/types';
import { getModels } from '@/app/lib/models';
import { getDisplayNameFromSlug } from '@/app/lib/categories';
import ModelsGrid from '@/app/components/ModelsGrid';
import ModelCollectionHeader from '@/app/components/ModelCollectionHeader';

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
    const { slug } = await params;
    const models: Model[] = await getModels({ category: slug });
    const categoryName = getDisplayNameFromSlug(slug);
    const q = (await searchParams)?.q?.trim().toLocaleLowerCase() || "";
    const filteredModels = q ? models.filter(model => model.name.toLowerCase().includes(q) || model.description.toLowerCase().includes(q)) : models;

    return (
        <>
            <ModelCollectionHeader title={categoryName} eyebrow="Category" resultCount={filteredModels.length} searchAction={`/3d-models/categories/${slug}`} />
            <ModelsGrid models={filteredModels} />
        </>
    );
    
}