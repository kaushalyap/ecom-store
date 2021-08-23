import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  const commonJsxContent = (
    <React.StrictMode>
      <NavBar />
      {children}
      <Footer text="Footer" />
    </React.StrictMode>
  );
  return (
    <>
      <>
        {process.env.GATSBY_MODE === 'development' ? (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div className="debug-screens">{commonJsxContent}</div>
        ) : (
          { commonJsxContent }
        )}
      </>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
