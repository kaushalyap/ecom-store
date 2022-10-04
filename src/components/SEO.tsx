import { Partytown } from '@builder.io/partytown/react';
import { ReactElement } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type Props = {
  title: string;
  description?: string;
  isIndexable?: boolean;
  pathname: string;
  children?: ReactElement | null;
};

export const SEO = ({
  title,
  description = '',
  isIndexable = true,
  pathname,
  children = null,
}: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    siteLanguage,
    ogLanguage,
    author,
    facebookUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    siteLanguage,
    ogLanguage,
    author,
    facebookUsername,
  };

  const ORIGIN = 'https://www.googletagmanager.com';

  return (
    <>
      <title>{seo.title}</title>
      <Partytown key="partytown" forward={['gtag']} />,
      <script
        key="google-analytics"
        type="text/partytown"
        src={`${ORIGIN}/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      ,
      <script
        key="google-analytics-config"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', { send_page_view: false })`,
        }}
      />
      {description !== '' && (
        <meta name="description" content={seo.description} />
      )}
      {isIndexable ? (
        <>
          <meta name="image" content={seo.image} />
          <TwitterMeta seo={seo} />
          <FacebookMeta seo={seo} />
        </>
      ) : (
        <meta name="robots" content="none" />
      )}
      {children}
    </>
  );
};

// TODO: check social previews of products

const TwitterMeta = ({ seo }: any) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:url" content={seo.url} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.imageType} />
    <meta name="twitter:image" content={seo.image} />
    <meta name="twitter:image:alt" content={seo.imageAlt} />
    <meta name="twitter:creator" content={seo.twitterUsername} />
  </>
);

const FacebookMeta = ({ seo }: any) => (
  <>
    <meta property="og:site_name" content={seo.facebookUsername} />
    <meta property="og:locale" content={seo.locale} />
    <meta property="og:url" content={seo.url} />
    <meta property="og:type" content={seo.type} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.desc} />
    <meta property="og:image" content={seo.image} />
    <meta property="og:image:alt" content={seo.imageAlt} />
  </>
);

export default SEO;
