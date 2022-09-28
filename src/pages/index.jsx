import { graphql, StaticQuery } from 'gatsby';
import Carousel from '../components/Carousel/Carousel';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingPage from '../components/HeadingPage/HeadingPage';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Index() {
  return (
    <StaticQuery
      query={graphql`
        query MainCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "ff87bf10-db57-5b54-a7f4-6a9da8976b54" } }
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
          <main className="-mx-5">
            <Carousel />
          </main>
          <section
            id="explore-categories"
            className="mb-20 md:mx-10 xl:container xl:mx-auto xl:mt-16"
          >
            <HeadingPage>Shop by Category</HeadingPage>
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
          </section>
        </Layout>
      )}
    />
  );
}

export const Head = ({ location }) => (
  <SEO
    title="TechStack.LK"
    description="All your tech gear satisfied and freely delivered to your doorstep"
    pathname={location.pathname}
  />
);
