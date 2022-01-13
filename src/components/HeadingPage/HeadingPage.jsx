import PropTypes from 'prop-types';
import React from 'react';

export default function HeadingPage({ children }) {
  return (
    <h1 className="mt-10 mb-5 font-headline text-xl font-medium md:mb-8 md:text-2xl xl:text-3xl">
      {children}
    </h1>
  );
}

HeadingPage.propTypes = { children: PropTypes.string.isRequired };