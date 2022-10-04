import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import closeDarkIcon from '../../common/images/icons/close-dark-outlined.svg';
import Filters from '../constants/filters';
import minusSmIcon from '../images/icons/minus-sm-outlined.svg';
import plusSmIcon from '../images/icons/plus-sm-outlined.svg';

const subCategories = [
  {
    name: 'Totes',
    href: '#',
  },
  {
    name: 'Backpacks',
    href: '#',
  },
  {
    name: 'Travel Bags',
    href: '#',
  },
  {
    name: 'Hip Bags',
    href: '#',
  },
  {
    name: 'Laptop Sleeves',
    href: '#',
  },
];

type Props = {
  open: boolean;
  setOpen: any;
};

export default function MobileFilterDialog({ open, setOpen }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="flex fixed inset-0 z-40 lg:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="flex overflow-y-auto relative flex-col py-4 pb-12 ml-auto w-full max-w-xs h-full bg-white shadow-xl">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button
                type="button"
                className="flex justify-center items-center p-2 -mr-2 w-10 h-10 text-gray-400 bg-white rounded-md"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>

                <img
                  className="w-4 h-4"
                  src={closeDarkIcon}
                  alt="close"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              <h3 className="sr-only">Categories</h3>
              <ul className="py-3 px-2 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href} className="block py-3 px-2">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              {Filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="py-6 px-4 border-t border-gray-200"
                >
                  {({ disclosureOpen }: any) => (
                    <>
                      <h3 className="flow-root -my-3 -mx-2">
                        <Disclosure.Button className="flex justify-between items-center py-3 px-2 w-full text-gray-400 hover:text-gray-500 bg-white">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="flex items-center ml-6">
                            {disclosureOpen ? (
                              <img
                                src={minusSmIcon}
                                alt="minus"
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <img
                                src={plusSmIcon}
                                alt="plus"
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="flex-1 ml-3 min-w-0 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
