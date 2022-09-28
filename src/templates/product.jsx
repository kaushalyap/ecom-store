import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Product() {
  return (
    <Layout>
      <main />
    </Layout>
  );
}

export const Head = ({ location, pageContext }) => (
  <SEO
    title={pageContext.name}
    description={pageContext.description}
    pathname={location.pathname}
  />
);
