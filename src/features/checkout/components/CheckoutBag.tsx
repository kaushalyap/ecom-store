import { Link } from 'gatsby';
import ShoppingItemList from './ShoppingItemList';
import Total from './Total';

export default function CheckoutBag() {
  return (
    <div className="xl:flex xl:gap-20">
      <ShoppingItemList />
      <div className="tracking-wider md:text-lg lg:mb-6 xl:mt-4 xl:w-1/3">
        <Total />
        <Link
          to="/checkout"
          className="block py-2 w-full font-bold tracking-wider text-center text-white bg-brand rounded-full md:py-4 md:text-xl"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
