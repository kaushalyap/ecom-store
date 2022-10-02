import { Tab } from '@headlessui/react';
import ListBox from './ListBox';

type Props = {
  itemCount: any;
};

export default function AddressForm({ itemCount }: Props) {
  return (
    <Tab.Panel>
      <label htmlFor="address" className="tracking-wide text-gray-400">
        Address
        <input
          id="Address"
          type="text"
          placeholder="Address"
          className="block pl-4 mt-1 mb-4 w-full h-12 tracking-wide rounded-xl border border-brand md:w-full xl:pl-6 xl:h-16 xl:rounded-3xl"
        />
      </label>
      <span className="text-gray-400">City / Town</span>
      <ListBox options={itemCount} id="city-town" classes="mb-4 w-full" />
      <span className="text-gray-400">
        District
        <ListBox options={itemCount} id="district" classes="mb-4 w-full" />
      </span>
      <span className="text-gray-400">Postal Code</span>
      {/*  TODO: fix list box API */}
      <ListBox
        options={itemCount}
        id="postal-code"
        classes="mb-4 w-full md:mb-6"
      />
      <button
        type="button"
        className="py-2 px-3 font-bold tracking-wide text-white bg-brand rounded-xl xl:py-3 xl:px-4 xl:tracking-widest"
      >
        Continue
      </button>
    </Tab.Panel>
  );
}
