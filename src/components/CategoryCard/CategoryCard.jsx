import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

export default function CategoryCard({
  to,
  title,
  image,
  alt,
  objectFit,
  objectPosition,
}) {
  return (
    <Link to={to}>
      <GatsbyImage
        image={image}
        alt={alt}
        objectFit={objectFit}
        objectPosition={objectPosition}
        className="w-full h-40 bg-blue-50 rounded-3xl xl:h-64 2xl:h-72"
      />
      <h3 className="mt-2 text-sm tracking-wide text-center truncate xl:mt-3 xl:text-base xl:tracking-normal">
        {title}
      </h3>
    </Link>
  );
}

CategoryCard.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  objectFit: PropTypes.string.isRequired,
  objectPosition: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
