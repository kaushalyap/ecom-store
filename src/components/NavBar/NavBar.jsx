/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
// import SubNav from '../SubNav/SubNav';
import { Dialog } from '@headlessui/react';
import { XIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Facebook, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import SearchBox from '../SearchBox/SearchBox';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuButton from '../MenuButton/MenuButton';
import logo from '../../images/logo.svg';
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
          className="flex justify-between p-2 2xl:py-4 2xl:h-28"
        >
          <MenuButton classes="md:hidden" label="" clickHandler={setOpen} />

          <Link to="/" className="mx-2 md:mt-5 md:ml-3">
            <img
              className="h-10 2xl:h-14"
              src={logoFull}
              alt="techstack.lk logo"
            />
          </Link>
          <SearchBox classes="hidden md:flex" />
          <ShoppingCart noItemsInCart={5} />
        </div>
        <SearchBox classes="hidden" />
        <SearchBox classes="md:hidden" />
        {/* <SubNav /> */}
      </header>
      <Dialog
        as="div"
        className="overflow-hidden fixed inset-0 z-20"
        open={open}
        onClose={setOpen}
        initialFocus={refDiv}
      >
        <div className=" overflow-hidden absolute inset-0">
          {/* Scrim filling the parent */}
          <Dialog.Overlay
            className="absolute inset-0 bg-gray-500 bg-opacity-100 transition-opacity"
            onClick={() => setOpen(false)}
          />
          {/* End of Scrim filling the parent */}
          <div className="flex fixed inset-y-0 right-0 pr-14 max-w-full">
            <div className=" relative w-screen max-w-md">
              {/* Close Button */}
              <div className="absolute top-0 right-0 pt-4 pl-2 -mr-10 sm:pr-4 sm:-ml-10">
                <button
                  type="button"
                  className="text-gray-300 hover:text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              {/* End of Close Button */}
              {/* Menu Panel */}
              <div className="flex flex-col justify-between py-6 pl-4 h-full bg-gray-100 rounded-r-3xl shadow-xl">
                <div id="menu-top" className="flex flex-col">
                  <img
                    src={logo}
                    alt="techstack.lk logo"
                    className="mt-14 w-44 opacity-80"
                  />

                  <h1 className="mt-5 text-2xl font-medium tracking-widest">
                    TechStack.LK
                  </h1>
                  <Link
                    to="/why-us/"
                    className="block py-3 mt-10 text-2xl tracking-wider text-gray-500"
                  >
                    Why Us ?
                  </Link>
                  <button
                    type="button"
                    className="flex py-3 w-full text-2xl tracking-wider text-gray-500 whitespace-nowrap"
                  >
                    <p className="">Shop By Categories</p>

                    <ChevronRightIcon className="pt-0.5 h-8 text-gray-300" />
                  </button>
                  <Link
                    to="/contact/"
                    className="block py-3 text-2xl tracking-wider text-gray-500"
                  >
                    Contact
                  </Link>
                </div>

                <div id="follow-us" className="w-full h-20">
                  <span className="block mb-3 tracking-widest text-gray-500 uppercase">
                    Follow Us On
                  </span>
                  <div className="flex space-x-5 h-10 opacity-60">
                    <a href="https://facebook.com/techstacklk" className="">
                      <Facebook color="#1877F2" size={40} />
                    </a>
                    <a href="https://instagram.com/techstacklk">
                      <Instagram color="#E4405F" size={40} />
                    </a>
                    <a href="https://twitter.com/techstacklk">
                      <Twitter color="#1DA1F2" size={40} />
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Menu Panel */}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
