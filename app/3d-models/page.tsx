
import { JSX } from 'react';
import ModelsGrid from '@/app/components/ModelsGrid';
import { getModels } from '@/app/lib/models';
import { Model } from '../types';

export default async function ModelsPage(): Promise<JSX.Element> {
    const models: Model[] = await getModels();
    return (
        <ModelsGrid models={models} />
    );
}
    