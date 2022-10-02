import { Link } from 'gatsby';
import shoppingBagIcon from '../images/icons/shopping-bag-outlined.svg';

type Props = {
  noItemsInCart: number;
};

export default function ShoppingBag({ noItemsInCart }: Props) {
  return (
    <Link
      to="/bag"
      aria-label="shopping cart"
      className="flex p-2 mr-5 w-12 hover:text-gray-500 focus:text-gray-500 2xl:mr-0"
    >
      <span className="z-10 p-px px-1 w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl">
        {noItemsInCart}
      </span>
      <img src={shoppingBagIcon} className="w-full" alt="shopping cart" />
    </Link>
  );
}
