import React from 'react';
import SearchBox from './SearchBox';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Input/SearchBox',
  component: SearchBox,
};

// noinspection JSUnusedGlobalSymbols
export const SearchBoxHiddenOnMobile = () => (
  <SearchBox classes="hidden md:flex" />
);
export const SearchBoxHiddenOnMediumLarge = () => (
  <SearchBox classes="md:hidden lg:hidden" />
);
