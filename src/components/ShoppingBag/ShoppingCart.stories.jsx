import React from 'react';
import ShoppingBag from './ShoppingBag';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Buttons/ShoppingCart',
  component: ShoppingBag,
};

// noinspection JSUnusedGlobalSymbols
export const ShoppingCartLight = () => <ShoppingBag noItemsInCart={5} />;