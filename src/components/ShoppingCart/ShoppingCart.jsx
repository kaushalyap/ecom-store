import React from 'react';
import PropTypes from 'prop-types';
import shoppingCartIcon from '../../images/cart-outlined.svg';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="button"
      aria-label="shopping cart"
      className="p-2 mr-1.5 w-12 hover:text-gray-500 focus:text-gray-500 2xl:mr-0"
    >
      <span className="absolute top-1 right-5 z-10 p-px w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl 2xl:top-3 2xl:right-10">
        {noItemsInCart}
      </span>
      <img src={shoppingCartIcon} className="w-full" alt="shopping cart" />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
