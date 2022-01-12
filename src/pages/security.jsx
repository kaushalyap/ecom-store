import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HeadingCategory from '../components/Heading/HeadingCategory';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Security() {
  return (
    <StaticQuery
      query={graphql`
        query SecurityCategoriesQuery {
          allPrismicCategories(
            filter: { id: { eq: "831c339e-4ea6-5206-8426-3494ce573826" } }
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
            title="Security & Surveillance"
            description="Secure home, office, shop, computers, vehicles from intruders and hackers"
          />

          <main>
            <HeadingCategory>Security & Surveillance</HeadingCategory>
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
