import ModelCard from "./ModelCard";
import type { ModelsGridProps } from "@/app/types";
import { JSX } from "react";



export default async function ModelsGrid({ models }: ModelsGridProps): Promise<JSX.Element> {

    return (
        <section className="mx-auto w-full max-w-360 px-0 py-6 sm:py-10 lg:py-12">
            <h1 className="mb-6 text-2xl font-semibold text-gray-900 sm:mb-8 sm:text-3xl lg:mb-5 lg:text-4xl">
                3D Models
            </h1>
            <div className="pt-8 sm:pt-10">
                <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {models.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}