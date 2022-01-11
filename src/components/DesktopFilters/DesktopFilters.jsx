import { Disclosure } from '@headlessui/react';
import React from 'react';
import filters from '../../constants/Filters';
// @ts-ignore
import minusSmIcon from '../../images/icons/minus-sm-outlined.svg';
// @ts-ignore
import plusSmIcon from '../../images/icons/plus-sm-outlined.svg';

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];

export default function DesktopFilters() {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul className="pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="py-6 border-b border-gray-200"
        >
          {({ open }) => (
            <>
              <h3 className="flow-root -my-3">
                <Disclosure.Button className="flex justify-between items-center py-3 w-full text-sm text-gray-400 hover:text-gray-500 bg-white">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="flex items-center ml-6">
                    {open ? (
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
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
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
  );
}
