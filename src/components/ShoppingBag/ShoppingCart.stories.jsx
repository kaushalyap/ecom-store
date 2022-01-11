import React from 'react';
import ShoppingBag from './ShoppingBag';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Buttons/ShoppingCart',
  component: ShoppingBag,
};

// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line func-names
export const ShoppingCartLight = function () {
  return <ShoppingBag noItemsInCart={5} />;
};
