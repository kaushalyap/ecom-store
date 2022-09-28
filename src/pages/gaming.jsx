import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard';
import HeadingPage from '../components/HeadingPage';
import Layout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Gaming() {
  return (
    <StaticQuery
      query={graphql`
        query GamingCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "68cd1826-ef32-5e1a-aa1c-ce78705a0bfc" } }
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
            <HeadingPage>Game Consoles & Accessories</HeadingPage>
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
    title="Gaming Gear"
    description="Enjoy the next level gaming experience with latest Playstations, XBoxes, VR-headsets, gaming laptops and etc."
    pathname={location.pathname}
  />
);
