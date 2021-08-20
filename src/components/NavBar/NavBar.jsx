import React from 'react';
import { Link } from 'gatsby';
import MenuButton from '../MenuButton/MenuButton';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import SearchBox from '../SearchBox/SearchBox';
import logo from '../../images/full-logo.svg';

/* const productCategories = [
  {
    name: 'Cat 1',
    href: '#',
  },
  {
    name: 'Cat 2',
    href: '#',
  },
  {
    name: 'Cat 3',
    href: '#',
  },
  {
    name: 'Cat 4',
    href: '#',
  },
  {
    name: 'Cat 5',
    href: '#',
  },
]; */

export default function NavBar() {
  return (
    <header className="bg-gray-200">
      <div className="flex justify-between justify-center px-2 py-2">
        <div className="flex items-center h-12 ">
          <MenuButton />
          <Link to="/" className="inline-flex ml-2 mb-1 mr-5 md:mt-5 md:ml-3  ">
            <img
              className="inline w-30 h-8"
              src={logo}
              alt="tech stack lk logo"
            />
          </Link>
        </div>
        <SearchBox classes="hidden md:flex" />
        <ShoppingCart noItemsInCart={5} />
      </div>
      <SearchBox classes="md:hidden lg:hidden" />

      <div className="grid justify-items-stretch hidden sm:flex bg-gray-200 w-full">
        <Link to="/about" className="p-2" activeClassName="active-link">
          About
        </Link>
        <Link to="/contact" className="p-2" activeClassName="active-link">
          Contact
        </Link>
      </div>
    </header>
  );
}
