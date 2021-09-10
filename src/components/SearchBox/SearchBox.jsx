import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search.svg';

export default function SearchBox({ classes }) {
  return (
    <div id="search-box" className={`flex h-16 ${classes} p-2 6 lg:w-2/5`}>
      <form className="flex w-full bg-white rounded-2xl">
        <input
          type="text"
          placeholder="Search Tech Stack LK"
          className="flex-grow pl-5 text-black rounded-2xl focus:outline-none lg:text-xl 2xl:pl-6 2xl:text-2xl 2xl:tracking-wider"
        />
        <button
          type="submit"
          aria-label="search"
          className="p-2 w-12 hover:text-gray-500 focus:text-gray-500 align-middle rounded-2xl rounded-r-2xl focus:outline-none 2xl:w-16 2xl:h-14"
        >
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.string.isRequired,
};
