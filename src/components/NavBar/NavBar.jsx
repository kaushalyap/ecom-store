import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
// import SubNav from '../SubNav/SubNav';

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
        <div id="nav-level-1" className="flex p-2 2xl:py-4 2xl:h-28">
          <div id="nav-level-1-left" className="flex">
            <MenuButton classes="md:hidden" label="" clickHandler={setOpen} />
            <Link to="/" className="mx-2 md:mt-5 md:ml-3">
              <img
                className="h-10 2xl:h-14"
                src={logoFull}
                alt="techstack.lk logo"
              />
            </Link>
          </div>

          <SearchBox classes="hidden md:flex" />
          <ShoppingCart noItemsInCart={5} />
        </div>
        <SearchBox classes="hidden" />
        <SearchBox classes="md:hidden" />
        {/* <SubNav /> */}
      </header>
      <SideOver refDiv={refDiv} open={open} setOpen={setOpen} />
    </div>
  );
}
