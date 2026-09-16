import type { ModelPageProps } from '@/app/types';
import { getModelById } from '@/app/lib/models';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight, FiHeart } from 'react-icons/fi';
import Pill from '@/app/components/Pill';

export default async function ModelPage({ params }: ModelPageProps) {
    const { id } = await params;
    const model = await getModelById(id);
    return (
        <main className="mx-auto w-full max-w-360 px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <Link href="/3d-models" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#68726d] transition-colors hover:text-[#a44f2b] focus-visible:text-[#a44f2b]">
                <FiArrowLeft size={16} aria-hidden="true" />
                Back to overview
            </Link>
            <article className="flex min-w-0 flex-col overflow-hidden bg-[#fffdf9] md:flex-row" key={model.id}>
                <div className={`flex aspect-[1.18] w-full shrink-0 items-start justify-between p-4 text-xs font-bold tracking-widest text-white/85 md:aspect-auto md:min-h-96 md:w-1/2 ${['bg-[linear-gradient(135deg,#d77c52,#6b3c35)]', 'bg-[linear-gradient(135deg,#8d9b85,#354d48)]', 'bg-[linear-gradient(135deg,#e0b36d,#875340)]', 'bg-[linear-gradient(135deg,#7896a0,#304d58)]', 'bg-[linear-gradient(135deg,#bc8a9f,#593b57)]'][model.id % 5]}`} aria-hidden="true">
                    <span>{String(model.id).padStart(2, '0')}</span>
                    <FiArrowUpRight size={20} />
                </div>
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
        </main>
    );
}