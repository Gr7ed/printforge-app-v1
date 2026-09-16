
import { JSX } from 'react';
import type { Model } from '@/app/types';
import { getAllModels } from '@/app/lib/models';
import ModelCard from '@/app/components/ModelCard';

export default async function modelListPage(): Promise<JSX.Element> {
    const models: Model[] = await getAllModels() 
    return (
        <main className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <section className="flex flex-col items-start justify-between gap-8 border-b border-[#d9d4ca] pb-10 md:flex-row md:items-end" aria-labelledby="model-list-title">
                <div>
                    <p className="mb-3 text-[0.7rem] font-extrabold tracking-[0.14em] text-[#a44f2b]">THE PRINTFORGE LIBRARY</p>
                    <h1 id="model-list-title" className="m-0 max-w-152 text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-[#17231f]">Find your next build.</h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-[#68726d]">Community-made files for curious makers, practical projects, and everything in between.</p>
                </div>
                <p className="mb-1 shrink-0 text-sm text-[#68726d]"><strong className="text-[1.6rem] text-[#17231f]">{models.length}</strong> models to explore</p>
            </section>

            <div className="grid gap-8 pt-10 md:grid-cols md:gap-[clamp(2rem,5vw,5rem)]">
                <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-3">
                    {models.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
    