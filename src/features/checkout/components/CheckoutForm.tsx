import { Tab } from '@headlessui/react';
import AddressForm from './AddressForm';
import NameForm from './NameForm';
import PaymentForm from './PaymentForm';

const itemCount = [
  {
    id: 1,
    count: '1',
  },
  {
    id: 2,
    count: '2',
  },
  {
    id: 3,
    count: '3',
  },
];

export default function CheckoutForm() {
  return (
    <Tab.Group as="div" className="xl:w-1/2">
      <Tab.List className="flex p-2 space-x-1 bg-blue-50 rounded-xl md:space-x-2 xl:p-3">
        <Tab className=" flex-grow py-2 px-2 bg-blue-200 rounded-lg xl:tracking-wider">
          Contact Details
        </Tab>
        <Tab className="flex-grow py-2 px-4 bg-blue-200 rounded-lg disabled:opacity-50 cursor-not-allowed xl:tracking-wider">
          Delivery Address
        </Tab>
        <Tab className="flex-grow py-2 px-4 bg-blue-200 rounded-lg disabled:opacity-50 cursor-not-allowed xl:tracking-wider">
          Payment Details
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-4">
        <form action="/">
          <NameForm />
          <AddressForm itemCount={itemCount} />
          <PaymentForm />
        </form>
      </Tab.Panels>
    </Tab.Group>
  );
}
