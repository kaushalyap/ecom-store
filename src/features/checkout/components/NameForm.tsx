import { Tab } from '@headlessui/react';

export default function NameForm() {
  return (
    <Tab.Panel>
      <label
        htmlFor="full-name"
        className="ml-4 text-sm tracking-wide text-gray-400 xl:text-lg"
      >
        Full Name
        <input
          id="full-name"
          type="text"
          placeholder="Full Name"
          className="block pl-4 mt-1 mb-4 w-full h-12 tracking-wide rounded-xl border border-brand md:w-full xl:pl-6 xl:h-16 xl:rounded-3xl"
        />
      </label>
      <label
        htmlFor="email"
        className="ml-4 text-sm tracking-wide text-gray-400 xl:text-lg"
      >
        Email Address
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="block pl-4 mt-1 mb-4 w-full h-12 tracking-wide rounded-xl border border-brand md:w-full xl:pl-6 xl:h-16 xl:rounded-3xl"
        />
      </label>
      <label
        htmlFor="mobile-no"
        className="ml-4 text-sm tracking-wide text-gray-400 xl:text-lg"
      >
        Mobile Number&nbsp;
        <span className="text-xs">(WhatsApp No. preferred)</span>
        <input
          id="mobile-no"
          type="tel"
          placeholder="Mobile Number"
          className="block pl-4 mt-1 mb-4 w-full h-12 tracking-wide rounded-xl border border-brand md:w-full xl:pl-6 xl:mb-6 xl:h-16 xl:rounded-3xl"
        />
      </label>
      <button
        type="button"
        className="py-2 px-3 x:text-lg font-bold tracking-wide text-white bg-brand rounded-xl xl:py-3 xl:px-4 xl:tracking-widest"
      >
        Continue
      </button>
    </Tab.Panel>
  );
}
