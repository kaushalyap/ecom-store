import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';

export default function SubNav({ menuClickHandler }) {
  return (
    <div className="hidden justify-end pb-1 mx-4 h-12 tracking-wider md:text-lg lg:flex lg:justify-between lg:h-12 lg:text-xl xl:tracking-widest 2xl:pb-4 2xl:mt-4 2xl:text-3xl">
      <MenuButton classes="" label="All" clickHandler={menuClickHandler} />
      <div className="flex justify-end font-description text-gray-500">
        <Link to="/why-us" className="py-2 px-4" activeClassName=" active-link">
          Why Us?
        </Link>
        <Link to="/about" className="py-2 px-4" activeClassName=" active-link">
          About
        </Link>
        <Link
          to="/contact"
          className="py-2 pl-3"
          activeClassName=" active-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

SubNav.propTypes = {
  menuClickHandler: PropTypes.func.isRequired,
};
