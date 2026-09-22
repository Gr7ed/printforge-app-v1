import type { ModelPageProps } from '@/app/types';
import { getModelById } from '@/app/lib/models';
import Link from 'next/link';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';
import Pill from '@/app/components/Pill';
import ModelVisual from '@/app/components/ModelVisual';

export default async function ModelPage({ params }: ModelPageProps) {
    const { id } = await params;
    const model = await getModelById(id);
    return (
        <div className="mx-auto w-full max-w-[120rem] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Link href="/3d-models" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#68726d] transition-colors hover:text-[#a44f2b] focus-visible:text-[#a44f2b] sm:mb-8">
                <FiArrowLeft size={16} aria-hidden="true" />
                Back to overview
            </Link>
            <article className="mx-auto flex min-w-0 max-w-6xl flex-col overflow-hidden border border-[#ded9d0] bg-[#fffdf9] shadow-sm md:flex-row" key={model.id}>
                <ModelVisual model={model} className="w-full shrink-0 md:aspect-auto md:min-h-96 md:w-1/2" />
                <div className="flex flex-1 flex-col gap-1 p-[1.1rem_1.15rem_1.25rem] md:justify-center md:px-8">
                    <div className="flex flex-col gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[0.68rem] text-[#68726d] normal-case tracking-normal"><FiHeart size={14} /> {model.likes.toLocaleString()}</span>
                        <h1 className="mb-1 mt-3 text-[1.15rem] leading-tight text-[#17231f]">{model.name}</h1>
                        <span><Pill>{model.category.replaceAll('-', ' ')}</Pill></span>
                        <p className="my-2 text-[0.85rem] leading-relaxed text-[#68726d]">{model.description}</p>
                        <p className="mt-8 text-[0.75rem] text-[#68726d]">Added on: {new Date(model.dateAdded).toLocaleDateString()}</p>
                    </div>
                </div>
            </article>
        </div>
    );
}