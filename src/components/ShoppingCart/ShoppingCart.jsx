import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export default function ShoppingCart({ noItemsInCart }) {
  return (
    <button
      type="button"
      aria-label="shopping cart"
      className="p-2 mr-1.5 w-12 hover:text-gray-500 focus:text-gray-500 2xl:mr-0"
    >
      <span className="absolute top-2 right-6 z-10 p-px w-4 h-4 text-xs text-center text-white bg-red-400 rounded-3xl 2xl:top-4 2xl:right-11">
        {noItemsInCart}
      </span>
      <StaticImage
        src="../../images/cart-outlined.svg"
        className="w-8 h-8"
        alt="shopping cart"
      />
    </button>
  );
}

ShoppingCart.propTypes = {
  noItemsInCart: PropTypes.number.isRequired,
};
