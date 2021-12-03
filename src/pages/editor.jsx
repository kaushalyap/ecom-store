import PropTypes from 'prop-types';
import * as React from 'react';
import { graphql } from 'gatsby';
import SbEditable from 'storyblok-react';
import Layout from '../components/Layout';
import DynamicComponent from '../components/DynamicComponent';
import useStoryblok from '../lib/storyblok';

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry;
  story = useStoryblok(story, location);

  const components = story.content.body.map((blok) => (
    // eslint-disable-next-line no-underscore-dangle
    <DynamicComponent blok={blok} key={blok._uid} />
  ));

  return (
    <Layout>
      <SbEditable content={story.content}>
        <h1>{story.content.title}</h1>
        {components}
      </SbEditable>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    storyblokEntry: PropTypes.shape({
      content: PropTypes.any,
      name: PropTypes.any,
    }),
  }).isRequired,
  location: PropTypes.string.isRequired,
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
    }
  }
`;
