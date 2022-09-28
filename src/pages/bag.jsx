import { Link } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import ShoppingItemCard from '../components/ShoppingItemCard';

export default function Bag() {
  return (
    <MainLayout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-full">
        <HeadingPage>Bag</HeadingPage>
        <div className="xl:flex xl:gap-20">
          <div className="mb-8 xl:mb-0 xl:w-2/3">
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
          <div className="tracking-wider md:text-lg lg:mb-6 xl:mt-4 xl:w-1/3">
            <p className="flex justify-between text-gray-600 xl:mb-1 xl:text-xl">
              <span>Sub Total</span>
              <span>Rs. 11,200</span>
            </p>

            <p className="flex justify-between text-gray-600 md:text-lg xl:mb-1 xl:text-xl">
              <span>Delivery</span>
              <span className="uppercase">Free</span>
            </p>
            <p className="flex justify-between text-gray-600 md:text-lg xl:mb-1 xl:text-xl">
              <span>Discount</span>
              <span className="uppercase">0%</span>
            </p>
            <p className="flex justify-between mb-4 text-lg md:text-xl xl:mb-6 xl:text-2xl">
              <span>Total</span>
              <span className="font-bold">Rs. 11,200</span>
            </p>
            <Link
              to="/checkout"
              className="block py-2 w-full font-bold tracking-wider text-center text-white bg-brand rounded-full md:py-4 md:text-xl"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export const Head = ({ location }) => (
  <SEO title="Shopping Bag" isIndexable={false} pathname={location.pathname} />
);
