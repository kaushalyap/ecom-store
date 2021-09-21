import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search-outlined.svg';

export default function SearchBox({ classes }) {
  return (
    <div id="search-box" className={`flex h-16 ${classes} p-2`}>
      <form className="flex w-full bg-white rounded-2xl">
        <input
          type="text"
          placeholder="Search Tech Stack LK"
          className="flex-grow pl-5 text-black rounded-2xl 2xl:pl-8"
        />
        <button
          type="submit"
          aria-label="search"
          className="p-3 w-12 hover:text-gray-500 rounded-2xl rounded-r-2xl 2xl:mr-1"
        >
          <img src={searchIcon} className="w-full" alt="search" />
        </button>
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.string.isRequired,
};
