import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ShortProductCard({
  id,
  href,
  imageSrc,
  imageAlt,
  name,
  price,
}) {
  return (
    <Link key={id} to={href} className="group" target="_blank">
      <div className="overflow-hidden w-full bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <GatsbyImage
          image={imageSrc}
          alt={imageAlt}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </Link>
  );
}

ShortProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
