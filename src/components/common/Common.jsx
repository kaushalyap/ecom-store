import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Common({ children }) {
  return (
    <React.StrictMode>
      <NavBar />
      {children}
      <Footer text="Footer" />
    </React.StrictMode>
  );
}

Common.propTypes = {
  children: PropTypes.node.isRequired,
};
