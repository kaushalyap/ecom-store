import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingPage from '../components/HeadingPage/HeadingPage';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Office() {
  return (
    <StaticQuery
      query={graphql`
        query OfficeElectronicsCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "80fe99d9-e67f-59b5-93b8-54b024e88fc8" } }
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
            <HeadingPage>Office Electronics</HeadingPage>
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
    title="Office Electronics"
    description="Make your office life more easier with next-gen office equipment"
    pathname={location.pathname}
  />
);
