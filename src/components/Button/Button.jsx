import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
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
      classes = 'px-4 py-2';
      break;
    case 'large':
      classes = 'px-12 py-6 text-lg';
      break;
    default:
      classes = 'px-8 py-4 text-xl';
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

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  isSubmit: PropTypes.string.isRequired,
};
