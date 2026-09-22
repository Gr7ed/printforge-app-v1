
import { JSX } from 'react';
import ModelsGrid from '@/app/components/ModelsGrid';
import ModelSearch from '@/app/components/ModelSearch';
import { getModels } from '@/app/lib/models';
import type { Model, ModelsPageProps } from '@/app/types';
import { Suspense } from 'react';

export default async function ModelsPage({ searchParams } : ModelsPageProps): Promise<JSX.Element> {
    const models: Model[] = await getModels();
    const  q  = (await searchParams)?.q?.toLocaleLowerCase() || "";
    const filteredModels = q ? models.filter(model => model.name.toLowerCase().includes(q) || model.description.toLowerCase().includes(q)) : models;

    return (
        <>
        <div className="sticky top-18 z-20 flex flex-col gap-4 border-b border-[#ded9d0] bg-[#f7f5f0] pb-4 pt-5 sm:pb-5 sm:pt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-6 md:sticky md:top-18">
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl hidden md:hidden lg:block">
                3D Models
            </h1>
            <Suspense fallback={<div className="h-16 w-full max-w-md" />}>
                <ModelSearch />
            </Suspense>
        </div>
        <ModelsGrid models={filteredModels} />
        </>
    );
}
    