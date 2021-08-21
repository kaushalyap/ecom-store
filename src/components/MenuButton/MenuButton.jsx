import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function MenuButton({ classes, label }) {
  return (
    <button
      type="submit"
      className={`text-gray-500 focus:text-gray-500 hover:text-gray-500 focus:outline-none w-12 md:w-14 items-center xl:hidden flex ${classes}`}
    >
      <MenuIcon /> <span className="text-xl ml-2 tracking-wider">{label}</span>
    </button>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
