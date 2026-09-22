import ModelCard from "./ModelCard";
import type { ModelsGridProps } from "@/app/types";

export default function ModelsGrid({ models }: ModelsGridProps) {

    return (
        <section className="w-full pt-5 sm:pt-6 lg:pt-8">
            {models.length > 0 ? (
                <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {models.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>
            ) : (
                <div className="border border-dashed border-[#cfc8bc] bg-white px-6 py-12 text-center">
                    <h2 className="text-xl font-semibold text-[#17231f]">No models found</h2>
                    <p className="mt-2 text-sm text-[#68726d]">Try a different search or browse another category.</p>
                </div>
            )}
        </section>
    );
}