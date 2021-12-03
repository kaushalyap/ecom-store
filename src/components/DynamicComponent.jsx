import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import React from 'react';
import Teaser from './Teaser';

const Components = {
  teaser: Teaser,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }
  return (
    <p>
      The component&nbsp;
      <strong>{blok.component}</strong>
      &nbsp;has not been created yet.
    </p>
  );
};

DynamicComponent.propTypes = {
  blok: PropTypes.shape({
    component: PropTypes.any,
  }).isRequired,
};

export default DynamicComponent;
