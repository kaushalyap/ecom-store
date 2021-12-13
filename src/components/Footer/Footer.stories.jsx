import { text } from '@storybook/addon-knobs';
import React from 'react';
import Footer from './Footer';

export default {
  title: 'Navigation/Footer',
  component: Footer,
};

const Template = function (args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Footer {...args} />;
};

export const FooterText = Template.bind({});

FooterText.args = {
  text: 'Footer',
};

export const knobsFooter = () => (
  <Footer text={text('Label', 'knobs footer')}> </Footer>
);
