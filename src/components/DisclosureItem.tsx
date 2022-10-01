import { Disclosure } from '@headlessui/react';
import { ReactElement } from 'react';
import chevronDown from '../images/icons/chevron-down-outlined.svg';

type Props = {
  question: string;
  children: ReactElement;
};

export default function DisclosureItem({ question, children }: Props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between py-3 px-4 mb-4 w-full font-headline text-lg font-medium tracking-wider text-left bg-brand-light rounded-2xl xl:text-xl">
            <span className="">{question}</span>
            <img
              src={chevronDown}
              alt="chevron up"
              className={`${open ? 'transform rotate-180' : ''} w-5 h-5 mt-1`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-4 tracking-wide text-gray-500">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
