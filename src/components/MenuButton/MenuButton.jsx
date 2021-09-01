import { MenuAlt1Icon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function MenuButton({ classes, label, clickHandler }) {
  return (
    <button
      type="button"
      onClick={() => clickHandler(true)}
      aria-label="menu"
      className={`flex-none w-10 md:w-12 md:h-12 md:mr-2 h-10 items-center lg:flex  lg:w-24 flex ${classes} focus:text-gray-500 hover:text-gray-500 focus:outline-none`}
    >
      <MenuAlt1Icon className="lg:w-12" />
      <span className="text-xl tracking-widest text-gray-500 lg:ml-2">
        {label}
      </span>
    </button>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
