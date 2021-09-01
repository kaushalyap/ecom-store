import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import SubNav from '../SubNav/SubNav';

import SearchBox from '../SearchBox/SearchBox';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuButton from '../MenuButton/MenuButton';
import SideOver from '../SideOver/SideOver';

import logoFull from '../../images/full-logo.svg';

// import categories from '../../../data/product-categories.json';

export default function NavBar() {
  const refDiv = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <div ref={refDiv}>
      <header className="pb-1 text-gray-400 bg-gray-200">
        <div
          id="nav-level-1"
          className="flex justify-between p-2 h-12 md:mb-2 lg:h-20 2xl:py-4 2xl:h-28"
        >
          <div id="nav-level-1-left" className="flex">
            <MenuButton classes="lg:hidden" label="" clickHandler={setOpen} />
            <Link to="/" className="mx-2">
              <img
                className="h-10 2xl:h-14"
                src={logoFull}
                alt="techstack.lk logo"
              />
            </Link>
          </div>

          <SearchBox classes="hidden lg:flex" />
          <ShoppingCart noItemsInCart={5} />
        </div>
        <SearchBox classes="md:flex lg:hidden" />
        <SubNav menuClickHandler={setOpen} />
      </header>
      <SideOver refDiv={refDiv} open={open} setOpen={setOpen} />
    </div>
  );
}
