import { Link } from '@reach/router';
import HeadingPage from '../components/HeadingPage';
import Layout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import ShoppingItemCard from '../components/ShoppingItemCard';

export default function OrderSummary() {
  return (
    <Layout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-full">
        <HeadingPage>Thank you for choosing us!</HeadingPage>
        <div className="xl:flex xl:gap-16">
          <div className="xl:w-3/5">
            <p className="p-3 mb-4 bg-green-100 rounded-xl shadow-lg md:px-4 md:mb-6 md:tracking-wide">
              Payment Successful, order placed!
            </p>
            <div className="mb-6">
              <h2 className="mb-2 font-headline text-lg tracking-wide md:text-xl">
                Your Cart was
              </h2>

              <ShoppingItemCard
                title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
                price={5800}
                editable={false}
              />
              <ShoppingItemCard
                title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB"
                price={5800}
                editable={false}
              />

              <div className="p-4 bg-blue-100 rounded-xl shadow-lg">
                <h3 className="mb-2 font-headline tracking-wide md:text-lg">
                  Summary
                </h3>

                <p className=" flex justify-between tracking-wide text-gray-500 md:text-lg">
                  <span>Sub Total</span>
                  <span>Rs. 11,200</span>
                </p>
                <p className="flex justify-between tracking-wide text-gray-500 md:text-lg">
                  <span>Delivery</span>
                  <span>FREE</span>
                </p>
                <p className="flex justify-between mb-2 tracking-wide text-gray-500 md:text-lg">
                  <span>Discount</span>
                  <span>0%</span>
                </p>
                <p className="flex justify-between font-bold tracking-wide md:text-lg xl:tracking-wider">
                  <span>Total</span>
                  <span>Rs. 11,200</span>
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/5">
            <div className="py-2 mb-6 rounded-lg">
              <h2 className="mb-2 font-headline text-lg tracking-wide md:text-xl xl:mt-16">
                Customer Info
              </h2>
              <div className="p-4 tracking-wide text-gray-600 bg-blue-100 rounded-xl shadow-lg md:text-lg">
                <p>John Doe</p>
                <p>0731 1231 12313</p>
                <p>john.doe@gmail.com</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="mb-2 font-headline text-lg tracking-wide md:text-xl">
                Delivery Address
              </h2>
              <div className="p-4 tracking-wide text-gray-600 bg-blue-100 rounded-xl shadow-lg md:text-lg">
                <p>Address line one here</p>
                <p>Nugegoda,</p>
                <p>Colombo,</p>
                <p>10250</p>
              </div>
              <p className="mt-12 text-gray-500">
                Please&nbsp;
                <span>
                  <Link to="contact/" className="tracking-wide text-blue-500">
                    contact us
                  </Link>
                </span>
                &nbsp;if shown information is incorrect.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO title="Checkout" isIndexable={false} pathname={location.pathname} />
);
