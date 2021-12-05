import React, { useState } from 'react';
import SortMenu from '../components/SortMenu/SortMenu';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Layout from '../components/Layout';
// @ts-ignore
import filterIcon from '../images/filter-outlined.svg';
// @ts-ignore
import gridViewIcon from '../images/grid-view-outlined.svg';
import MobileFilterDialog from '../components/MobileFilterDialog/MobileFilterDialog';
import DesktopFilters from '../components/DesktopFilters/DesktopFilters';
import SEO from '../components/SEO/SEO';

export default function SearchResults() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <Layout>
      <SEO title="Search" />
      <div className="mx-3 mb-20 xl:container xl:mx-auto">
        <div>
          <MobileFilterDialog
            open={mobileFiltersOpen}
            setOpen={setMobileFiltersOpen}
          />
          <main className="">
            <div className="flex relative z-20 justify-end items-baseline py-1 border-b border-gray-200">
              <div className="flex items-center">
                <SortMenu />
                <button
                  type="button"
                  className="p-3 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <img
                    src={gridViewIcon}
                    alt="grid view"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  className="p-3 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <img
                    src={filterIcon}
                    alt="filter"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <DesktopFilters />
                <ProductGrid />
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
