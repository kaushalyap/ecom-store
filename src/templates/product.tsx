import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Product() {
  return (
    <MainLayout>
      <main />
    </MainLayout>
  );
}

export const Head = ({ location, pageContext }) => (
  <SEO
    title={pageContext.name}
    description={pageContext.description}
    pathname={location.pathname}
  />
);
