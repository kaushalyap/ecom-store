// noinspection JSUnusedGlobalSymbols

import React from 'react';
import NavBar from './NavBar';

export default {
  title: 'Navigation/NavBar',
  component: NavBar
};

export const NavBarLight = () => <NavBar />;
export const NavBarDark = () => <NavBar />;
export const NavBarSignedOut = () => <NavBar />;
export const NavBarSignedIn = () => <NavBar />;
