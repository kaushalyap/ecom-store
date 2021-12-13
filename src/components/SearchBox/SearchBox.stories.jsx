import React from 'react';
import SearchBox from './SearchBox';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Input/SearchBox',
  component: SearchBox,
};

// noinspection JSUnusedGlobalSymbols
export const SearchBoxHiddenOnMobile = function () {
  return <SearchBox classes="hidden md:flex" />;
};
export const SearchBoxHiddenOnMediumLarge = function () {
  return <SearchBox classes="md:hidden lg:hidden" />;
};
