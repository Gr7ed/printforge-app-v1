import React from 'react';
import CategoriesNavbar from '@/app/components/CategoriesNavbar';

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
        <CategoriesNavbar />
        {children}
    </div>
  );
}