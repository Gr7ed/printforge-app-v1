
import { JSX } from 'react';
import ModelsGrid from '@/app/components/ModelsGrid';
import { getAllModels } from '@/app/lib/models';
import { Model } from '../types';

export default async function ModelsPage(): Promise<JSX.Element> {
    const models: Model[] = await getAllModels();
    return (
        <ModelsGrid models={models} />
    );
}
    