import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';

export default function MenuButton() {
  return (
    <button
      type="submit"
      className="text-gray-400 focus:text-gray-500 hover:text-gray-500 focus:outline-none w-10 lg:hidden md:mt-5"
    >
      <MenuIcon />
    </button>
  );
}
