import React from 'react';
import ShoppingCart from './ShoppingCart';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Buttons/ShoppingCart',
  component: ShoppingCart,
};

// noinspection JSUnusedGlobalSymbols
export const ShoppingCartLight = () => <ShoppingCart noItemsInCart={5} />;
