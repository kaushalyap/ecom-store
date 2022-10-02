import { Tab } from '@headlessui/react';
import { Link } from 'gatsby';

export default function PaymentForm() {
  return (
    <Tab.Panel>
      <div className="pl-2 mb-1">
        <label htmlFor="genie" className="xl:text-lg">
          <input
            type="radio"
            id="genie"
            value="genie"
            name="payment-method"
            className="mr-2 w-4 h-4"
          />
          Genie
        </label>
      </div>
      <div className="pl-2 mb-1">
        <label htmlFor="mcash" className="xl:text-lg">
          <input
            type="radio"
            id="mcash"
            value="mcash"
            name="payment-method"
            className="mr-2 w-4 h-4"
          />
          mCash
        </label>
      </div>
      <div className="pl-2 mb-4 xl:mb-6">
        <label htmlFor="direct" className="xl:text-lg">
          <input
            type="radio"
            id="bank-transfer"
            value="bank-transfer"
            name="payment-method"
            className="mr-2 w-4 h-4"
          />
          Bank Transfer
          <span> (Additional 2% off)</span>
        </label>
      </div>
      <Link
        to="/order-summary"
        className="py-2 px-3 font-bold tracking-wide text-white bg-brand rounded-xl xl:py-3 xl:px-4 xl:tracking-widest"
      >
        Checkout
      </Link>
    </Tab.Panel>
  );
}
