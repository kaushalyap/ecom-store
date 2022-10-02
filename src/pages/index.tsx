import { graphql, HeadProps, StaticQuery } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import { CategoryCard, HomeCarousel } from '../features/marketing/';

export default function Index() {
  return (
    <StaticQuery
      query={graphql`
        query MainCategories {
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
        <MainLayout>
          <>
            <section className="-mx-5">
              <HomeCarousel />
            </section>
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
                  (item: any) => (
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
          </>
        </MainLayout>
      )}
    />
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="SolidTech.LK"
    description="All your tech gear satisfied and freely delivered to your doorstep"
    pathname={location.pathname}
  />
);
