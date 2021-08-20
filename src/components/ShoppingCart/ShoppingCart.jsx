import { ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="submit"
      className="text-gray-400 focus:text-gray-500 hover:text-gray-500 focus:outline-none w-10 mr-1 relative"
    >
      <span className="bg-red-500 text-center absolute bottom-6 right-2 z-10 p-px rounded-3xl w-4 text-xs text-white md:bottom-10">
        {noItemsInCart}
      </span>
      <ShoppingCartIcon />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.string.isRequired,
};
