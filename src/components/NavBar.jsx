import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/logo.svg';

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          style={{ width: '40px', height: '40px' }}
          alt="tech stack lk logo"
        />
      </Link>
      <Link to="/about" activeClassName="active-link">
        About
      </Link>
      <Link to="/contact" activeClassName="active-link">
        Contact
      </Link>
    </div>
  );
}
