import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Footer({ text, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <footer {...rest}>
      {/* eslint-disable-next-line react/prop-types */}
      <h1>{text}</h1>
    </footer>
  );
}
