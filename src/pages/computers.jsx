import { graphql, StaticQuery } from 'gatsby';
import CategoryCard from '../components/CategoryCard';
import HeadingPage from '../components/HeadingPage';
import MainLayout from '../components/Layouts/MainLayout';
import SEO from '../components/SEO';

export default function Computers() {
  return (
    <StaticQuery
      query={graphql`
        query ComputersCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "94b32c2e-7517-5971-a161-caae200b8718" } }
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
            <HeadingPage>Computers & Accessories</HeadingPage>
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
    title="Computers & Accessories"
    description="ust get your next laptop, tablet, desktop, etc freely delivered to you for a competitive price"
    pathname={location.pathname}
  />
);
