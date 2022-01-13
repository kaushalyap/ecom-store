import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Product({ pageContext }) {
  return (
    <Layout>
      <SEO title={pageContext.name} description={pageContext.metaDescription} />
      <main />
    </Layout>
  );
}
Product.propTypes = { pageContext: PropTypes.object.isRequired };
