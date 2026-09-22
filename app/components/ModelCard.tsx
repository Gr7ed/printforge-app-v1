import { FiHeart } from 'react-icons/fi';
import type { ModelCardProps } from '@/app/types';
import Link from 'next/link';
import Pill from './Pill';
import ModelVisual from './ModelVisual';

export default function ModelCard({ model, index = 0 }: ModelCardProps) {
    return (
    <Link href={`/3d-models/${model.id}`} className="h-full no-underline hover:no-underline">
    <article className="flex h-full min-w-0 flex-col overflow-hidden border border-[#ded9d0] bg-[#fffdf9] transition duration-200 hover:-translate-y-1 hover:shadow-[0_1rem_2rem_rgba(37,45,39,0.1)]" id={index === 0 ? 'all-models' : undefined}>
        <ModelVisual model={model} />
        <div className="flex flex-1 flex-col p-[1.1rem_1.15rem_1.25rem]">
            <div className="flex justify-between gap-4 tracking-[0.08em] text-[#a44f2b]">
                 <span><Pill>{model.category.replaceAll('-', ' ')}</Pill></span>
                 <span className="inline-flex items-center gap-1 text-[0.68rem]  text-[#68726d] normal-case tracking-normal"><FiHeart size={14} /> {model.likes.toLocaleString()}</span>
            </div>
            <h2 className="mb-1 mt-3 text-[1.15rem] leading-tight text-[#17231f]">{model.name}</h2>
            <p className="m-0 text-[0.85rem] leading-relaxed text-[#68726d]">{model.description}</p>
        </div>
    </article>
    </Link>
    )
}