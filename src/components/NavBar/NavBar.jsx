import React from 'react';
import { Link } from 'gatsby';
import SubNav from '../SubNav/SubNav';
import SearchBox from '../SearchBox/SearchBox';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuButton from '../MenuButton/MenuButton';
import logo from '../../images/full-logo.svg';

export default function NavBar() {
  return (
    <header className="pb-1 text-gray-400 bg-gray-200">
      <div
        id="nav-level-1"
        className="flex justify-between p-2 2xl:py-4 2xl:h-28"
      >
        {/* <div className="flex items-center h-12" /> */}
        <MenuButton classes="md:hidden" label="" />

        <Link to="/" className="mx-2 md:mt-5 md:ml-3">
          <img className="h-10 2xl:h-14" src={logo} alt="tech stack lk logo" />
        </Link>
        <SearchBox classes="hidden md:flex" />
        <ShoppingCart noItemsInCart={5} />
      </div>
      <SearchBox classes="hidden" />
      <SearchBox classes="md:hidden" />
      <SubNav />
    </header>
  );
}
