
import ModelsGrid from '@/app/components/ModelsGrid';
import ModelCollectionHeader from '@/app/components/ModelCollectionHeader';
import { getModels } from '@/app/lib/models';
import type { Model, ModelsPageProps } from '@/app/types';

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
    const models: Model[] = await getModels();
    const q = (await searchParams)?.q?.trim().toLocaleLowerCase() || "";
    const filteredModels = q ? models.filter(model => model.name.toLowerCase().includes(q) || model.description.toLowerCase().includes(q)) : models;

    return (
        <>
        <ModelCollectionHeader title="3D Models" resultCount={filteredModels.length} />
        <ModelsGrid models={filteredModels} />
        </>
    );
}
    