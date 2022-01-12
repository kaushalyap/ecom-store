import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function VehicleElectronics() {
  return (
    <StaticQuery
      query={graphql`
        query VehicleElectronicsCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "106d79a0-adc4-56e5-8d13-9af0df9b8dae" } }
          ) {
            nodes {
              data {
                category {
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
          <SEO
            title="Vehicle Electronics"
            description="Modernize your car with latest car audio / video, GPS. Secure your life and car with vehicle security systems"
          />
          <main>
            <HeadingCategory>Vehicle Electronics</HeadingCategory>
            <div
              id="cards"
              className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4"
            >
              {categories.allPrismicCategories.nodes[0].data.category.map(
                (item) => (
                  <CategoryCard
                    to={item.href.text}
                    title={item.title.text}
                    image={item.image.gatsbyImageData}
                    alt={item.image.alt}
                    objectFit={item.object_fit.text}
                    objectPosition={item.object_position.text}
                  />
                  // eslint-disable-next-line comma-dangle
                )
              )}
            </div>
          </main>
        </Layout>
      )}
    />
  );
}
