import { MenuAlt1Icon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function MenuButton({ classes, label, clickHandler }) {
  return (
    <button
      type="submit"
      onClick={() => clickHandler(true)}
      className={`flex-none w-10 h-10 text-center flex md:w-16 xl:hidden ${classes} focus:text-gray-500 hover:text-gray-500 focus:outline-none`}
    >
      <MenuAlt1Icon />
      <span className="text-xl tracking-wider">{label}</span>
    </button>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
