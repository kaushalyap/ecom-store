import React from 'react';
import { text } from '@storybook/addon-knobs';
import Footer from './Footer';

export default {
  title: 'Navigation/Footer',
  component: Footer,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Footer {...args} />;

export const FooterText = Template.bind({});

FooterText.args = {
  text: 'Footer',
};

export const knobsFooter = () => (
  <Footer text={text('Label', 'knobs footer')}> </Footer>
);
