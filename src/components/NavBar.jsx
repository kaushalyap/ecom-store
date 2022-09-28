import { Link } from 'gatsby';
import { useRef, useState } from 'react';
// @ts-ignore
import logoFull from '../images/logos/full-logo.svg';
import MenuButton from './MenuButton';
import SearchBox from './SearchBox';
import ShoppingBag from './ShoppingBag';
import SideOver from './SideOver';
import SubNav from './SubNav';

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
              <img
                className="h-7 2xl:h-8"
                src={logoFull}
                alt="techstack.lk logo"
              />
            </Link>
          </div>
          <SearchBox classes="hidden 2xl:flex 2xl:w-1/2" />
          <ShoppingBag noItemsInCart={5} />
        </div>
        <SearchBox classes="md:flex 2xl:hidden" />
        <SubNav menuClickHandler={setOpen} />
      </header>
      <SideOver refDiv={refDiv} open={open} setOpen={setOpen} />
    </div>
  );
}
