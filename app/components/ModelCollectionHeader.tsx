import { Suspense } from "react";
import ModelSearch from "./ModelSearch";

type ModelCollectionHeaderProps = {
  title: string;
  eyebrow?: string;
  resultCount: number;
  searchAction?: string;
};

export default function ModelCollectionHeader({
  title,
  eyebrow,
  resultCount,
  searchAction = "/3d-models",
}: ModelCollectionHeaderProps) {
  return (
    <header className="sticky top-12 z-20 -mx-4 bg-[var(--surface-muted)/.96] px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:top-18 lg:mx-0 lg:flex lg:items-end lg:justify-between lg:gap-8 lg:bg-[var(--surface)/.96] lg:px-0 lg:py-2 lg:backdrop-blur">
      <div className="min-w-0 lg:max-w-2xl">
        {eyebrow ? <p className="eyebrow mt-4">{eyebrow}</p> : null}
        <h1 className="mt-1 truncate text-2xl font-semibold text-(--ink) sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-(--muted)" aria-live="polite">
          {resultCount} {resultCount === 1 ? "model" : "models"}
        </p>
      </div>
      <Suspense fallback={<div className="h-12 w-full max-w-xl" />}>
        <ModelSearch action={searchAction} />
      </Suspense>
    </header>
  );
}