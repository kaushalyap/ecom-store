import React from 'react';
import Footer from './Footer';

export default {
  title: 'Navigation/Footer',
  component: Footer,
};

// eslint-disable-next-line func-names
const Template = function (args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Footer {...args} />;
};

// eslint-disable-next-line object-curly-newline
export const FooterText = Template.bind({});

FooterText.args = { text: 'Footer' };

export const knobsFooter = () => <Footer />;
