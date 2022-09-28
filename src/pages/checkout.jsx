import { Tab } from '@headlessui/react';
import { Link } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import Layout from '../components/Layouts/MainLayout';
import ListBox from '../components/ListBox';
import SEO from '../components/SEO';
import ShoppingItemCard from '../components/ShoppingItemCard';

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
export default function Checkout() {
  return (
    <Layout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-full">
        <HeadingPage>Checkout</HeadingPage>

        <div className="md:flex md:gap-16">
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
                <Tab.Panel>
                  <label
                    htmlFor="address"
                    className="tracking-wide text-gray-400"
                  >
                    Address
                    <input
                      id="Address"
                      type="text"
                      placeholder="Address"
                      className="block pl-4 mt-1 mb-4 w-full h-12 tracking-wide rounded-xl border border-brand md:w-full xl:pl-6 xl:h-16 xl:rounded-3xl"
                    />
                  </label>
                  <span className="text-gray-400">City / Town</span>
                  <ListBox
                    options={itemCount}
                    id="city-town"
                    classes="mb-4 w-full"
                  />
                  <span className="text-gray-400">
                    District
                    <ListBox
                      options={itemCount}
                      id="district"
                      classes="mb-4 w-full"
                    />
                  </span>
                  <span className="text-gray-400">Postal Code</span>
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
              </form>
            </Tab.Panels>
          </Tab.Group>
          <div className="hidden mt-20 md:block md:w-1/4 xl:w-1/2">
            <div className="md:hidden xl:block">
              <ShoppingItemCard
                title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
                price={5800}
                editable={true}
              />
              <ShoppingItemCard
                title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
                price={5800}
                editable={true}
              />
            </div>
            <h3 className="mb-4 font-headline font-medium tracking-wide xl:hidden">
              Summary
            </h3>
            <p className="flex justify-between tracking-wide text-gray-500 xl:mt-8 xl:text-lg">
              <span>Sub Total</span>
              <span>Rs. 11,200</span>
            </p>
            <p className="flex justify-between tracking-wide text-gray-500 xl:text-lg">
              <span>Delivery</span>
              <span>FREE</span>
            </p>
            <p className="flex justify-between mb-2 tracking-wide text-gray-500 xl:text-lg">
              <span>Discount</span>
              <span>0%</span>
            </p>
            <p className="flex justify-between font-bold tracking-wide xl:text-lg">
              <span>Total</span>
              <span>Rs. 11,200</span>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO title="Checkout" isIndexable={false} pathname={location.pathname} />
);
