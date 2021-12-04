/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

// eslint-disable-next-line object-curly-newline
export default function BlogCard({ heroImage, altText, title, author, date }) {
  return (
    <div className="flex mb-4 bg-gray-50 rounded-lg shadow-lg md:mb-6 lg:mb-8">
      <GatsbyImage
        image={heroImage}
        alt={altText}
        className="w-1/3 rounded-l-lg"
      />
      <div className="pt-3 pr-2 pb-4 pl-3 w-2/3 md:pt-4 md:pl-4 xl:pt-8 xl:pl-8">
        <h2 className="mb-1 font-headline md:text-2xl lg:text-3xl lg:leading-snug xl:mb-2 xl:text-4xl">
          {title}
        </h2>
        <p className="text-xs text-gray-400 md:text-base lg:tracking-wide xl:text-lg">
          `${author}, ${date}`
        </p>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  heroImage: PropTypes.object.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
