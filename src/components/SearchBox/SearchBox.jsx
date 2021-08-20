import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBox({ classes }) {
  return (
    <div id="search-box" className={`flex ${classes} p-2 pl-3 pr-3`}>
      <form className="flex w-full bg-white rounded-2xl md:pb-0">
        <input
          type="text"
          placeholder="Search Tech Stack LK"
          className="ml-1 md:w-80 w-full rounded-2xl focus:outline-none pl-4"
        />
        <button
          type="submit"
          className="text-gray-400 align-middle focus:text-gray-500 rounded-2xl hover:text-gray-500 focus:outline-none w-14 h-12 p-2 rounded-r-2xl"
        >
          <SearchIcon className="h-full align-middle" />
        </button>
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.string.isRequired,
};
