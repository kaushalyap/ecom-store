/* eslint-disable no-shadow */
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
// @ts-ignore
import chevronDownIcon from '../images/icons/chevron-down-outlined.svg';

export default function ListBox({ id = '', options, classes = '' }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div id={id}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`flex p-1 bg-white rounded-lg border-brand shadow-md cursor-default ${classes} bg-green-100 items-center`}
          >
            <span className="px-2 text-lg">{selected.count}</span>

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
            <Listbox.Options className="overflow-auto absolute py-1 px-2 mt-1 w-12 max-h-60 text-base bg-white rounded-md shadow-lg sm:text-sm">
              {options.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) => `text-lg ${
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
