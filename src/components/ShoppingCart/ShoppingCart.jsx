import React from 'react';
import PropTypes from 'prop-types';
import shoppingCartIcon from '../../images/cart.svg';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="button"
      aria-label="shopping cart"
      className="relative flex-none w-10 hover:text-gray-500 focus:text-gray-500 focus:outline-none md:w-12 md:h-12 2xl:w-16"
    >
      <span className="absolute right-2.5 z-10 p-px w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl md:right-3.5 md:w-5 md:h-5 md:text-sm 2xl:right-3 2xl:bottom-12 2xl:w-8 2xl:h-8 2xl:text-lg">
        {noItemsInCart}
      </span>
      <img src={shoppingCartIcon} alt="shopping cart" />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
