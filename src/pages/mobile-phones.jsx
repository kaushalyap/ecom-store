import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard';
import HeadingPage from '../components/HeadingPage';
import Layout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Smartphones() {
  return (
    <StaticQuery
      query={graphql`
        query MobilePhonesCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "e581c59a-50b2-5f44-a242-ed9fbbc5aff2" } }
          ) {
            nodes {
              data {
                category {
                  list_key {
                    text
                  }
                  href {
                    text
                  }
                  image {
                    alt
                    gatsbyImageData(placeholder: BLURRED)
                  }
                  object_fit {
                    text
                  }
                  object_position {
                    text
                  }
                  title {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={(categories) => (
        <Layout>
          <main>
            <HeadingPage>Smartphones & Accessories</HeadingPage>
            <div
              id="cards"
              className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
            >
              {categories.allPrismicCategories.nodes[0].data.category.map(
                (item) => (
                  <CategoryCard
                    key={item.list_key.text}
                    to={item.href.text}
                    title={item.title.text}
                    image={item.image.gatsbyImageData}
                    alt={item.image.alt}
                    objectFit={item.object_fit.text}
                    objectPosition={item.object_position.text}
                  />
                ),
              )}
            </div>
          </main>
        </Layout>
      )}
    />
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Smartphones & Accessories"
    description="Your next smartphone is waiting for you, in a click of button which will be delivered to you for free"
    pathname={location.pathname}
  />
);
