import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Facebook, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import closeIcon from '../../images/close-outlined.svg';
import logo from '../../images/logo-name-below.svg';
import cheveronRightIcon from '../../images/cheveron-right-outlined.svg';

export default function SideOver({ refDiv, open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="overflow-hidden fixed inset-0 z-20"
        open={open}
        onClose={setOpen}
        initialFocus={refDiv}
      >
        <div className=" overflow-hidden absolute inset-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Scrim filling the parent */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 transition-opacity md:bg-opacity-60" />
            {/* End of Scrim filling the parent */}
          </Transition.Child>
          <div className="flex fixed inset-y-0 right-0 pr-14 max-w-full md:left-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className=" relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {/* Close Button */}
                  <button
                    type="button"
                    className="absolute top-5 right-1 p-1 -mr-10 -ml-10 text-gray-300 hover:text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <img src={closeIcon} className="w-4" alt="close" />
                  </button>
                </Transition.Child>
                {/* End of Close Button */}
                {/* Menu Panel */}
                <div className="flex flex-col justify-between py-6 pl-6 h-full bg-gray-100 rounded-r-3xl shadow-xl transition duration-1000 ease-in-out">
                  <div id="menu-top" className="flex flex-col">
                    <img
                      src={logo}
                      alt="techstack.lk logo"
                      className=" w-44 opacity-90"
                    />
                    <Link
                      to="/blog/why-us/"
                      className="block py-2 mt-10 font-description text-lg tracking-wider text-gray-500"
                    >
                      Why Us ?
                    </Link>
                    <button
                      type="button"
                      className="flex justify-between py-2 w-full font-description text-lg tracking-wider text-gray-500"
                    >
                      <p className="">Shop By Category</p>

                      <img
                        src={cheveronRightIcon}
                        alt="cheveron right"
                        className="p-2 mr-2"
                      />
                    </button>
                    <Link
                      to="/contact/"
                      className="block py-2 font-description text-lg tracking-wider text-gray-500"
                    >
                      Contact
                    </Link>
                  </div>

                  <div id="follow-us" className="w-full">
                    <span className="block mb-3 font-description text-sm tracking-widest text-gray-500 uppercase">
                      Follow Us On
                    </span>
                    <div className="flex space-x-5 opacity-60">
                      <a href="https://facebook.com/techstacklk" className="">
                        <Facebook color="#1877F2" size={30} />
                      </a>
                      <a href="https://instagram.com/techstacklk">
                        <Instagram color="#E4405F" size={30} />
                      </a>
                      <a href="https://twitter.com/techstacklk">
                        <Twitter color="#1DA1F2" size={30} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End of Menu Panel */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

SideOver.propTypes = {
  refDiv: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
