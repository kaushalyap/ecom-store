import { HeadProps } from 'gatsby';
import { useState } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import {
  DesktopFilters,
  FilterButton,
  MobileFilterDialog,
  SortMenu,
} from '../features/search';

export default function SearchResults() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <MainLayout>
      <div>
        <div>
          <MobileFilterDialog
            open={mobileFiltersOpen}
            setOpen={setMobileFiltersOpen}
          />
          <main className="">
            <div className="flex relative z-20 justify-end items-baseline py-1 border-b border-gray-200">
              <div className="flex items-center">
                <SortMenu />
                <FilterButton setMobileFilter={setMobileFiltersOpen} />
              </div>
            </div>
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <DesktopFilters />
                {/* <ProductGrid /> */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO title="Search" isIndexable={false} pathname={location.pathname} />
);
