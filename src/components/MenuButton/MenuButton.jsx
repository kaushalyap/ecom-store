import React from 'react';
import PropTypes from 'prop-types';
import menuIcon from '../../images/menu-alt-outlined.svg';

export default function MenuButton({ classes, label, clickHandler }) {
  return (
    <button
      type="button"
      onClick={() => clickHandler(true)}
      aria-label="menu"
      className={`w-12 p-2.5 ml-1 2xl:ml-0 ${classes} focus:text-gray-500 hover:text-gray-500 2xl:p-2 2xl:w-20`}
    >
      <img src={menuIcon} className="mr-3 w-6 h-full" alt="menu" />
      <span className="text-base tracking-widest text-gray-600">{label}</span>
    </button>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
