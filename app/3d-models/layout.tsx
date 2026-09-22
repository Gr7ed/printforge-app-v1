import CategoriesNavbar from '@/app/components/CategoriesNavbar';
import { getAllCategories } from '@/app/lib/categories';
import type { ModelsLayoutProps } from '@/app/types';

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  const categories = getAllCategories();

  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col items-stretch gap-5 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8 lg:py-8">
        <CategoriesNavbar categories={categories} />
        <div className="min-w-0 w-full flex-1">
          {children}
        </div>
    </div>
  );
}