import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBox({ classes }) {
  return (
    <div
      id="search-box"
      className={`flex ${classes} p-2 pl-3 pr-3 md:w-4/6 lg:w-2/5`}
    >
      <form className=" flex w-full bg-white rounded-2xl">
        <input
          type="text"
          placeholder="Search Tech Stack LK"
          className="pl-4 2xl:pl-6 ml-1 w-full lg:text-xl 2xl:text-2xl 2xl:tracking-wider rounded-2xl focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 w-14 2xl:w-16 h-12 2xl:h-14 text-gray-400 hover:text-gray-500 focus:text-gray-500 align-middle rounded-2xl rounded-r-2xl focus:outline-none"
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
