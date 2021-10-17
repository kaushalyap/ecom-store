import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export default function MenuButton({ classes, label, clickHandler }) {
  return (
    <button
      type="button"
      onClick={() => clickHandler(true)}
      aria-label="menu"
      className={`w-10 px-2  md:w-12 md:mr-1 md:px-3 py-3.5 ml-1 2xl:ml-0 ${classes} focus:text-gray-500 hover:text-gray-500 2xl:p-2 2xl:w-20`}
    >
      <StaticImage
        src="../../images/menu-alt-outlined.svg"
        className="mr-3 w-6 h-5 md:w-6 md:h-6"
        alt="menu"
      />
      <span className="hidden h-5 text-base font-semibold tracking-widest text-gray-500 2xl:flex 2xl:items-center">
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
