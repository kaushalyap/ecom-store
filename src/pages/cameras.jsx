import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Camera() {
  return (
    <StaticQuery
      query={graphql`
        query CameraPhotoCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "270f9891-f6ef-542b-8b18-2ae292cf6bc2" } }
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
            title="Camera & Photo"
            description="Record your life with the perfect camera, camcoders under the perfect settings. See what is out of reach with binoculars and telescopes"
          />
          <main>
            <HeadingCategory>Camera & Photo</HeadingCategory>
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
