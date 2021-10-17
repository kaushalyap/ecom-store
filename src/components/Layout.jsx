import React from 'react';
import PropTypes from 'prop-types';
import Common from './common/Common';

export default function Layout({ children }) {
  return (
    <>
      {process.env.GATSBY_MODE === 'development' ? (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="debug-screens">
          <Common>{children}</Common>
        </div>
      ) : (
        <Common>{children}</Common>
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
