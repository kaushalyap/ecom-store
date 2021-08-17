import {withKnobs} from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react';
// noinspection NpmUsedModulesInstalled
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { action } from '@storybook/addon-actions';

const customViewPorts = {
  mobileS:{
    name : 'Mobile S',
    styles: {
      width: '320px',
      height: '480px',
    },
  },
  mobileM: {
    name : 'Mobile M',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobileL:{
    name : 'Mobile L',
    styles: {
      width: '425px',
      height: '963px',
    },
  },
  tablet:{
    name : 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop:{
    name : 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  laptopL:{
    name : 'Laptop L',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  fourK:{
    name: '4K',
    styles: {
      width: '2560x',
      height: '1440px',
    },
}

}

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport:{
    viewports: { ...customViewPorts, ...INITIAL_VIEWPORTS}
  }

};


// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator(withKnobs)
