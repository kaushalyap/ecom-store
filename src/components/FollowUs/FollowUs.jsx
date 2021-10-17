import PropTypes from 'prop-types';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function FollowUs({ classes }) {
  return (
    <div
      id="follow-on-social-media"
      className={`flex space-x-5 w-full opacity-70 ${classes}`}
    >
      <a href="https://facebook.com/techstacklk">
        <StaticImage
          src="../../images/Facebook.svg"
          className="w-8"
          alt="Facebook logo"
        />
      </a>
      <a href="https://instagram.com/techstacklk">
        <StaticImage
          src="../../images/Instagram.svg"
          alt="Instagram logo"
          className="w-8"
        />
      </a>
      <a href="https://twitter.com/techstacklk">
        <StaticImage
          src="../../images/Twitter.svg"
          alt="Twitter logo"
          className="w-8"
        />
      </a>
    </div>
  );
}

FollowUs.propTypes = {
  classes: PropTypes.string.isRequired,
};
