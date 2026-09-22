"use client";

import { useSearchParams } from "next/navigation";
import type { ModelSearchProps } from "@/app/types";
import Form from "next/form"

export default function ModelSearch({ defaultValue = "" }: ModelSearchProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? defaultValue;

  return (
    <Form action="/3d-models" className="w-full max-w-md" role="search">
      <label className="sr-only" htmlFor="model-search">
        Search models
      </label>
      <input
        id="model-search"
        type="search"
        name="q"
        placeholder="E.g. dragon"
        aria-label="Search models"
        autoComplete="off"
        defaultValue={query}
        className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-orange-accent focus:ring-4 focus:ring-orange-accent/15"
      />
    </Form>
  );
}