import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function BlogPost({ data }) {
  return (
    <Layout>
      <article>
        <h1>{data.name}</h1>
      </article>
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query ($slug: String!) {
    storyblokEntry(slug: { eq: $slug }) {
      id
      name
      full_slug
    }
  }
`;
