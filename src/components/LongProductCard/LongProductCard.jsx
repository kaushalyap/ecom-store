import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export default function LongProductCard({
  id,
  href,
  imageSrc,
  imageAlt,
  name,
  price,
}) {
  return (
    <Link
      key={id}
      to={href}
      target="_blank"
      className="flex mb-3 h-40 bg-gray-200 rounded-2xl md:h-56"
    >
      <div className="w-2/5 bg-gray-300 xl:w-1/4">
        <GatsbyImage image={imageSrc} alt={imageAlt} />
      </div>
      <div className="py-3 px-3 w-3/5 h-full md:py-5 md:px-5 xl:w-3/4">
        <h3 className="overflow-hidden mb-2 w-full h-3/5 font-headline text-sm font-thin overflow-ellipsis md:text-base xl:text-lg xl:font-normal xl:text-justify">
          {name}
        </h3>
        <p className="h-2/5 font-headline font-medium tracking-wider md:text-xl">
          {`Rs. ${Number(price).toLocaleString()}`}
        </p>
      </div>
    </Link>
  );
}

LongProductCard.propTypes = {
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
