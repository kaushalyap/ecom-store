import PropTypes from 'prop-types';
import React from 'react';

export default function Heading({
  text,
  textStyle,
  font,
  isSubmit,
  size,
  color,
}) {
  let classes = '';
  switch (size) {
    case 'small':
      classes = 'text-sm mb-2';
      break;
    case 'large':
      classes = 'text-xl mb-6 ';
      break;
    default:
      classes = 'text-xl mb-4';
  }

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${classes} ${color} ${textStyle} ${font}`}
    >
      {text}
    </button>
  );
}

Heading.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  isSubmit: PropTypes.string.isRequired,
};
