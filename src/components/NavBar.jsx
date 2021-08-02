import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/logo.svg';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          style={{ width: '100px', height: '100px' }}
          alt="tech stack lk logo"
        />
      </Link>
      <Link to="/about" activeClassName="active-link">
        About
      </Link>
      <Link to="/contact" activeClassName="active-link">
        Contact
      </Link>
    </nav>
  );
}
