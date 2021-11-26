import React from 'react';
import PropTypes from 'prop-types';
import shoppingBagIcon from '../../images/shopping-bag-outlined.svg';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="button"
      aria-label="shopping cart"
      className="flex p-2 mr-5 w-12 hover:text-gray-500 focus:text-gray-500 2xl:mr-0"
    >
      <span className="z-10 p-px px-1 w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl">
        {noItemsInCart}
      </span>
      <img src={shoppingBagIcon} className="w-full" alt="shopping cart" />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
