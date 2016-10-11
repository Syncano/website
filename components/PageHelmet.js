import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';

const PageHelmet = ({
  title,
  mixpanelTitle,
  description,
  ogImageSrc,
  twitterImageSrc,
  noindexNofollow
}, { location }) => {
  let meta = [
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
      content: `http://www.syncano.io${location.pathname}`
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
  ];

  if (noindexNofollow) {
    _.merge(meta, [{
      name: 'robots',
      content: 'noindex, nofollow'
    }]);
  }

  return (
    <Helmet
      title={title}
      meta={meta}
    />
  );
};

PageHelmet.contextTypes = {
  location: PropTypes.object
};

export default PageHelmet;
