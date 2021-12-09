import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import sortOptions from '../../constants/SortOptions';
// @ts-ignore
import chevronDownIcon from '../../images/chevron-down-outlined.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SortMenu() {
  return (
    <Menu as="div" className="inline-block relative p-3 text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center font-description text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900">
          Sort
          <img
            src={chevronDownIcon}
            alt="close"
            className="flex-shrink-0 -mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-2xl origin-top-right focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <a
                    href={option.href}
                    className={classNames(
                      option.current
                        ? 'font-medium text-gray-900'
                        : 'text-gray-500',
                      active ? 'bg-gray-100' : '',
                      // eslint-disable-next-line comma-dangle
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
