import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// @ts-ignore
import { Fragment, useState } from 'react';
import categories from '../constants/ProductCategories';
// @ts-ignore
import cheveronLeftIcon from '../images/icons/chevron-left-outlined.svg';
// @ts-ignore
import cheveronRightIcon from '../images/icons/chevron-right-outlined.svg';
// @ts-ignore
import closeIcon from '../images/icons/close-dark-outlined.svg';
import FollowUs from './FollowUs';

export default function SideOver({ refDiv, open, setOpen }) {
  const [isCategoryMenuVisible, setCategoryMenuVisible] = useState(false);
  const [isMainMenuVisible, setMainMenuVisible] = useState('');

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
              {/* Menu Panel */}
              <div className="relative w-screen max-w-md">
                <div className="flex flex-col justify-between py-6 pl-6 h-full bg-blue-50 rounded-r-3xl shadow-2xl transition duration-1000 ease-in-out">
                  <div id="menu-top" className="flex flex-col">
                    <div className="flex justify-between">
                      <StaticImage
                        src="../images/logos/logo-name-below.svg"
                        alt="techstack.lk logo"
                        className=" w-44 opacity-90"
                        loading="eager"
                        placeholder="tracedSVG"
                      />
                      <button
                        type="button"
                        className="p-2 mr-4 h-8 text-gray-300 hover:text-white rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <img src={closeIcon} className="w-4" alt="close" />
                      </button>
                    </div>

                    <nav id="menu-options" className={`${isMainMenuVisible}`}>
                      <Link
                        to="/blog/why-us/"
                        className="block py-2 mt-10 text-lg tracking-wider text-gray-600"
                      >
                        Why Us ?
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setCategoryMenuVisible(true);
                          setMainMenuVisible('hidden');
                        }}
                        className="flex py-2 w-full text-lg tracking-wider text-gray-600"
                      >
                        <p className="mr-2">Shop By Category</p>

                        <img
                          src={cheveronRightIcon}
                          alt="cheveron right"
                          className="p-2"
                        />
                      </button>
                      <Link
                        to="/contact/"
                        className="block py-2 text-lg tracking-wider text-gray-600"
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div>
                    <p className="mb-3 tracking-wider text-gray-500 uppercase">
                      Follow Us On
                    </p>
                    <FollowUs />
                  </div>
                </div>

                <Transition
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                  show={isCategoryMenuVisible}
                >
                  {/* Categories Panel */}
                  <div className="absolute top-72 pr-14 w-screen max-w-md md:pr-0">
                    <div className="flex flex-col justify-between pl-6 mt-3 transition duration-1000 ease-in-out">
                      <div id="menu-top" className="flex flex-col">
                        <button
                          type="button"
                          className="py-2 mt-5"
                          onClick={() => {
                            setCategoryMenuVisible(false);
                            setMainMenuVisible('block');
                          }}
                        >
                          <img src={cheveronLeftIcon} alt="back" />
                        </button>
                        <nav className="list-none text-gray-600">
                          <ul>
                            {categories.map((category) => (
                              <li className="py-1" key={category.path}>
                                <Link
                                  to={category.path}
                                  className="block py-2 text-lg tracking-wider text-gray-600 truncate"
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Categories Panel */}
                </Transition>
              </div>
              {/* End of Menu Panel */}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
