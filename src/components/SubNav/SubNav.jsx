import React from 'react';
import { Link } from 'gatsby';

const productCategories = [
  {
    name: 'Laptops',
    href: '#',
  },
  {
    name: 'Desktop Accessories',
    href: '#',
  },
  {
    name: 'Printers',
    href: '#',
  },
  {
    name: 'Photocopiers',
    href: '#',
  },
];
export default function SubNav() {
  return (
    <div className="hidden md:flex md:justify-between items-center mx-4 pb-1 text-gray-500 h-10 tracking-wider lg:text-xl lg:h-12 xl:tracking-widest 2xl:text-3xl 2xl:pb-4 2xl:mt-4">
      <div className="h-full flex items-center md:hidden xl:flex">
        {productCategories.map((category) => {
          return (
            <Link
              className={
                category.name === productCategories[0].name
                  ? 'pl-1 pr-2 py-2 lg:py-4'
                  : 'px-4 py-2 lg:py-4'
              }
              to={category.href}
              key={category.name}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
      <div className="w-50 h-full flex items-center">
        <Link to="/why-us" className="px-4 py-2" activeClassName=" active-link">
          Why Us?
        </Link>
        <Link to="/about" className="px-4 py-2" activeClassName=" active-link">
          About
        </Link>
        <Link
          to="/contact"
          className="pl-3 py-2"
          activeClassName=" active-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
