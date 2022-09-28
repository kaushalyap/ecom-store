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
