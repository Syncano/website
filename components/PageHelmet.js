import React from 'react';
import Helmet from 'react-helmet';

export default ({ title, mixpanelTitle, description, pathname }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: `${description}`
        },
        {
          name: 'mixpanelTitle',
          content: `${mixpanelTitle}`
        },
        {
          property: 'og:title',
          content: `${title}`
        },
        {
          property: 'og:url',
          content: `http://www.syncano.io${pathname}`
        },
        {
          name: 'twitter:title',
          content: `${title}`
        },
        {
          name: 'twitter:description',
          content: `${description}`
        }
      ]}
    />
  );
};
