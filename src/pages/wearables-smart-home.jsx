import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function WearablesSmartHome() {
  return (
    <StaticQuery
      query={graphql`
        query WearablesCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "990f719f-335a-52d8-8511-15412ddffeb6" } }
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
        <MainLayout>
          <main>
            <HeadingPage>Wearables & Smart Home Devices</HeadingPage>
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
        </MainLayout>
      )}
    />
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Wearables & Smart Home Devices"
    description="Have a comfortable digital experience on the go with Smartwatches, Fitness bands. Automate and save your time buy ordering a Smart Home assistant"
    pathname={location.pathname}
  />
);
