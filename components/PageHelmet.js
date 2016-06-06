import React from 'react';
import Helmet from 'react-helmet';

const PageHelmet = ({ title, mixpanelTitle, description }, { location }) => {
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
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ]}
    />
  );
};

PageHelmet.contextTypes = {
  location: React.PropTypes.object
};

export default PageHelmet;
