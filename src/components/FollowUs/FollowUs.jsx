import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from '@icons-pack/react-simple-icons';
import PropTypes from 'prop-types';
import React from 'react';

export default function FollowUs({ classes }) {
  return (
    <div
      id="follow-on-social-media"
      className={`flex space-x-5 w-full opacity-80 ${classes}`}
    >
      <a href="https://facebook.com/techstacklk">
        <Facebook
          color="#1877F2"
          size={30}
          className="opacity-70 hover:opacity-100"
        />
      </a>
      <a href="https://instagram.com/techstacklk">
        <Instagram
          color="#E4405F"
          size={30}
          className="opacity-70 hover:opacity-100"
        />
      </a>
      <a href="https://pinterest.com/techstacklk">
        <Pinterest
          color="#BD081C"
          size={30}
          className="opacity-50 hover:opacity-100"
        />
      </a>
      <a href="https://twitter.com/techstacklk">
        <Twitter
          color="#1DA1F2"
          size={30}
          className="opacity-70 hover:opacity-100"
        />
      </a>
    </div>
  );
}

FollowUs.propTypes = { classes: PropTypes.string.isRequired };
