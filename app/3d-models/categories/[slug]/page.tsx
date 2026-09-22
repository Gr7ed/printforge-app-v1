import type { CategoryPageProps, Model } from '@/app/types';
import { getModels } from '@/app/lib/models';
import { getDisplayNameFromSlug } from '@/app/lib/categories';
import ModelsGrid from '@/app/components/ModelsGrid';
import ModelSearch from '@/app/components/ModelSearch';
import { Suspense } from 'react';

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const models: Model[] = await getModels({ category: slug });
    const categoryName = getDisplayNameFromSlug(slug);

    return (
        <>
            <div className="sticky top-17 z-20 flex flex-col gap-4 border-b border-[#ded9d0] bg-[#f7f5f0] pb-4 pt-8 sm:pb-5 sm:pt-8 sm:top-18 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
                <div className="flex flex-col ">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-accent">Category</p>
                    <h1 className="mt-2 pt-2 text-2xl font-semibold text-[#17231f] sm:text-3xl sm:pt-4 ">{categoryName}</h1>
                </div>
                <Suspense fallback={<div className="h-16 w-full max-w-md" />}>
                    <ModelSearch />
                </Suspense>
            </div>
            <ModelsGrid models={models} />
        </>
    );
    
}