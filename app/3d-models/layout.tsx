import React from 'react';
import CategoriesNavbar from '@/app/components/CategoriesNavbar';

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-[120rem] grid-cols-1 gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-8">
        <CategoriesNavbar />
        <div className="min-w-0">{children}</div>
    </div>
  );
}