import { ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="submit"
      className="text-gray-400 focus:text-gray-500 hover:text-gray-500 focus:outline-none w-12 mr-1 relative 2xl:w-16"
    >
      <span className="bg-red-500 text-center absolute bottom-7 right-2 z-10 p-px rounded-3xl w-4 text-xs text-white md:bottom-6 md:bottom-9 2xl:w-8 2xl:h-8 2xl:text-lg 2xl:bottom-12 2xl:right-3">
        {noItemsInCart}
      </span>
      <ShoppingCartIcon />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
