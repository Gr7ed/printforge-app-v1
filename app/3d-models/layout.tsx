import CategoriesNavbar from '@/app/components/CategoriesNavbar';
import { getAllCategories } from '@/app/lib/categories';
import type { ModelsLayoutProps } from '@/app/types';

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const categories = getAllCategories();

  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col items-stretch gap-0 px-4 py-0 sm:px-6 sm:py-0 md:py-0 lg:flex-row lg:items-start lg:gap-10 lg:px-8 lg:py-8">
        <CategoriesNavbar categories={categories} />
        <main className="min-w-0 w-full flex-1">
          {children}
        </main>
    </div>
  );
}