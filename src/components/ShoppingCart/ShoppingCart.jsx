import { ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="submit"
      className="relative mr-1 w-12 2xl:w-16 text-gray-400 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
    >
      <span className="absolute right-2 2xl:right-3 bottom-7 md:bottom-6 2xl:bottom-12 z-10 p-px w-4 2xl:w-8 2xl:h-8 text-xs 2xl:text-lg text-center text-white bg-red-500 rounded-3xl">
        {noItemsInCart}
      </span>
      <ShoppingCartIcon />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
