import React from 'react';
import { Link } from 'gatsby';
import SubNav from '../SubNav/SubNav';
import SearchBox from '../SearchBox/SearchBox';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuButton from '../MenuButton/MenuButton';
import logo from '../../images/full-logo.svg';

export default function NavBar() {
  return (
    <header className="pb-1 bg-gray-200">
      <div className="flex justify-between py-2 2xl:py-4 px-2 2xl:h-28">
        <div className="flex items-center h-12">
          <MenuButton classes="md:hidden" label="" />
          <Link to="/" className="inline-flex md:mt-5 mr-3 mb-1 ml-2 md:ml-3">
            <img
              className="inline w-32 h-8 2xl:h-14"
              src={logo}
              alt="tech stack lk logo"
            />
          </Link>
        </div>
        <SearchBox classes="hidden md:flex" />
        <ShoppingCart noItemsInCart={5} />
      </div>
      <SearchBox classes="hidden" />
      <SearchBox classes="md:hidden" />
      <SubNav />
    </header>
  );
}
