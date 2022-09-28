import React from 'react';
import { Helmet } from 'react-helmet';

export default function FacebookMeta({
  url,
  name,
  type,
  title,
  desc,
  image,
  locale,
}) {
  return (
    <Helmet>
      {name && <meta property="og:site_name" content={name} />}
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={desc} />
    </Helmet>
  );
}
