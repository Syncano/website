import React from 'react';
import Helmet from 'react-helmet';

const PageHelmet = ({ title, mixpanelTitle, description, ogImageSrc, twitterImageSrc }, { location }) => {
  const { pathname } = location;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'mixpanelTitle',
          content: mixpanelTitle
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:url',
          content: `http://www.syncano.io${pathname}`
        },
        {
          name: 'og:image',
          content: ogImageSrc
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:image',
          content: twitterImageSrc
        }
      ]}
    />
  );
};

PageHelmet.contextTypes = {
  location: React.PropTypes.object
};

export default PageHelmet;
