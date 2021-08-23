import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function MenuButton({ classes, label }) {
  return (
    <button
      type="submit"
      className={`text-gray-400 w-10 h-10 text-center flex md:w-16 xl:hidden ${classes} focus:text-gray-500 hover:text-gray-500 focus:outline-none`}
    >
      <MenuIcon /> <span className="ml-2 text-xl tracking-wider">{label}</span>
    </button>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
