// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import FacebookMeta from './FacebookMeta';
import TwitterMeta from './TwitterMeta';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        headline
        siteUrl: siteUrl
        defaultImage: image
        siteLanguage
        ogLanguage
        author
        twitterUsername
        facebookUsername
      }
    }
  }
`;

// eslint-disable-next-line object-curly-newline
export default function SEO({
  title,
  description,
  image,
  article,
  node,
  index,
}) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const year = new Date().getFullYear;

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    headline,
    siteUrl,
    siteLanguage,
    ogLanguage,
    author,
    twitterUsername,
    facebookUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ''}`,
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Organization',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: author,
    },
    copyrightYear: year,
    creator: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
    datePublished: '',
    dateModified: '',
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultImage}`,
    },
  };

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: author,
      },
      copyrightYear: year,
      creator: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultImage}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };

    // Push current blog posts into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumb list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {index ? <meta name="robots" content="noindex" /> : null}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <FacebookMeta
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebookUsername}
      />
      <TwitterMeta
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitterUsername}
      />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  index: PropTypes.bool,
  node: PropTypes.shape({
    first_publication_date: PropTypes.string.isRequired,
    last_publication_date: PropTypes.string.isRequired,
  }),
};

SEO.defaultProps = {
  description: '',
  image: null,
  article: false,
  node: null,
  index: true,
};
