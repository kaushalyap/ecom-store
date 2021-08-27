import { ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="submit"
      className="relative flex-none w-10 hover:text-gray-500 focus:text-gray-500 focus:outline-none 2xl:w-16"
    >
      <span className="absolute right-2.5 z-10 p-px w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl md:bottom-6 2xl:right-3 2xl:bottom-12 2xl:w-8 2xl:h-8 2xl:text-lg">
        {noItemsInCart}
      </span>
      <ShoppingCartIcon />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
