import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SubNav from '../SubNav/SubNav';

import SearchBox from '../SearchBox/SearchBox';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuButton from '../MenuButton/MenuButton';
import SideOver from '../SideOver/SideOver';
// import categories from '../../../data/product-categories.json';

export default function NavBar() {
  const refDiv = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <div ref={refDiv}>
      <header className="p-1 text-gray-700 bg-blue-50 shadow-md">
        <div
          id="nav-level-1"
          className="flex justify-between h-12 2xl:mx-6 2xl:h-16"
        >
          <div id="nav-level-1-left" className="flex">
            <MenuButton classes="2xl:hidden" label="" clickHandler={setOpen} />
            <Link to="/" className="py-2 mx-1 2xl:pt-4 2xl:mx-0">
              <StaticImage
                objectFit="contain"
                objectPosition="left"
                className="h-7 md:h-8 2xl:flex"
                src="../../images/full-logo.svg"
                alt="techstack.lk logo"
              />
            </Link>
          </div>

          <SearchBox classes="hidden 2xl:flex 2xl:w-1/2" />
          <ShoppingCart noItemsInCart={5} />
        </div>
        <SearchBox classes="md:flex 2xl:hidden" />
        <SubNav menuClickHandler={setOpen} />
      </header>
      <SideOver refDiv={refDiv} open={open} setOpen={setOpen} />
    </div>
  );
}
