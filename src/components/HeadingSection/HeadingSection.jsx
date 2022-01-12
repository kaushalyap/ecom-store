import PropTypes from 'prop-types';
import React from 'react';

export default function HeadingSection({ children, extraClasses }) {
  return (
    <h2
      className={`mt-8 mb-2 font-headline font-medium md:text-lg xl:text-xl ${extraClasses}`}
    >
      {children}
    </h2>
  );
}

HeadingSection.propTypes = {
  children: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};
