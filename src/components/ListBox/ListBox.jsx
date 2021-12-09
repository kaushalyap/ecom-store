/* eslint-disable no-shadow */
import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
// @ts-ignore
import chevronDownIcon from '../../images/chevron-down-outlined.svg';

const itemCount = [
  { id: 1, count: '1' },
  { id: 2, count: '2' },
  { id: 3, count: '3' },
];

export default function ListBox() {
  const [selected, setSelected] = useState(itemCount[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="flex p-1 w-full bg-white rounded-lg shadow-md cursor-default">
            <span className="px-1">{selected.count}</span>

            <img
              src={chevronDownIcon}
              className="w-5 text-gray-400"
              aria-hidden="true"
              alt="chevron down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="overflow-auto absolute py-1 px-2 mt-1 w-full max-h-60 text-base bg-white rounded-md shadow-lg sm:text-sm">
              {itemCount.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) => `${
                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                  }
                          cursor-default select-none relative py-2`}
                  value={item}
                >
                  <span
                    className={`${
                      selected ? 'font-medium' : 'font-normal'
                    } block truncate`}
                  >
                    {item.count}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
