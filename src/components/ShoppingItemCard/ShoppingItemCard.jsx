import { Link } from 'gatsby';
import React from 'react';
import ListBox from '../ListBox/ListBox';

export default function ShoppingItemCard() {
  return (
    <div className="flex gap-4 mb-4 bg-green-50 rounded-lg shadow-lg md:mb-6 md:h-44">
      <img
        src="https://dummyimage.com/100x100"
        className="w-2/5 rounded-l-lg md:w-1/4"
        alt="placeholder"
      />
      <div className="py-2 pr-2 w-3/5 md:py-4 md:pr-4 md:w-3/4">
        <Link to="/">
          <h3 className="mb-2 font-headline md:text-xl">
            Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 128GB
          </h3>
        </Link>
        <div className="flex justify-between items-end mb-2">
          <ListBox />
          <span className="text-lg tracking-wide md:text-xl">Rs. 5,600</span>
        </div>
        <div className="flex justify-end text-gray-400">
          <button type="button" className="text-sm tracking-wide md:text-base">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
