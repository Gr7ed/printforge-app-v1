"use client";

import { useSearchParams } from "next/navigation";
import type { ModelSearchProps } from "@/app/types";
import Form from "next/form";
import { FiSearch } from "react-icons/fi";

export default function ModelSearch({ defaultValue = "", action = "/3d-models" }: ModelSearchProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? defaultValue;

  return (
    <Form action={action} className="flex w-full max-w-xl py-2" role="search">
      <label className="sr-only" htmlFor="model-search">
        Search models
      </label>
      <div className="flex min-w-0 flex-1 items-center rounded-l-lg  bg-white shadow-sm transition focus-within:ring-4 focus-within:ring-(--accent-soft)">
        <FiSearch className="ml-4 shrink-0 text-(--muted)" aria-hidden="true" />
        <input
          id="model-search"
          type="search"
          name="q"
          placeholder="Search models"
          aria-label="Search models"
          autoComplete="off"
          defaultValue={query}
          className="h-12 min-w-0 w-full bg-transparent px-3 text-base text-(--ink) outline-none placeholder:text-(--muted)"
        />
      </div>
      <button type="submit" className="h-12 shrink-0 rounded-r-lg bg-(--accent) px-5 text-sm font-bold text-white transition hover:bg-(--accent-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)">
        Search
      </button>
    </Form>
  );
}