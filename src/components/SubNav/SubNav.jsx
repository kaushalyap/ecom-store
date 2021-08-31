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
    <div className="hidden items-center pb-1 mx-4 h-10 tracking-wider text-gray-500 md:flex md:justify-between lg:h-12 lg:text-xl xl:tracking-widest 2xl:pb-4 2xl:mt-4 2xl:text-3xl">
      <div className="flex items-center h-full md:hidden xl:flex">
        {productCategories.map((category) => (
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
        ))}
      </div>
      <div className="flex items-center w-52 h-full">
        <Link to="/why-us" className="py-2 px-4" activeClassName=" active-link">
          Why Us?
        </Link>
        <Link to="/about" className="py-2 px-4" activeClassName=" active-link">
          About
        </Link>
        <Link
          to="/contact"
          className="py-2 pl-3"
          activeClassName=" active-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
