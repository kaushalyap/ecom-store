import { graphql, HeadProps, StaticQuery } from 'gatsby';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';
import { CategoryCard } from '../features/marketing';

export default function Office() {
  return (
    <StaticQuery
      query={graphql`
        query OfficeElectronicsCategories {
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
        <MainLayout>
          <main>
            <HeadingPage>Office Electronics</HeadingPage>
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
          </main>
        </MainLayout>
      )}
    />
  );
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Office Electronics"
    description="Make your office life more easier with next-gen office equipment"
    pathname={location.pathname}
  />
);
