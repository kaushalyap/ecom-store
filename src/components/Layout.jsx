import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
