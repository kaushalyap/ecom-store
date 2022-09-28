import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingPage from '../components/HeadingPage/HeadingPage';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO/SEO';

export default function Audio() {
  return (
    <StaticQuery
      query={graphql`
        query AudioElectronicsCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "69ebf7cb-86a1-5942-b70f-609be59128cf" } }
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
            <HeadingPage>Audio Electronics</HeadingPage>
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
    title="Audio Electronics"
    description="Music to your ears with speakers, home theaters, headphones, headsets, radios and etc"
    pathname={location.pathname}
  />
);
