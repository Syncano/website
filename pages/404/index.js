import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, Travolta } from '../../components';

export default ({ location }) => {
  const { pathname } = location;
  const title = '404 Error - Page does not exist | Syncano';
  const description = `The age you were looking for doesn't exist.`;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: `${description}`
          },
          {
            name: 'mixpanelTitle',
            content: '404'
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
      <PageHeader
        variant="error-404"
        headline="404"
        textline="The page you were looking for doesn't exist."
      >
        <Link
          to="/"
          className="button button--large"
        >
          Go to homepage
        </Link>
        <Travolta />
      </PageHeader>
      <CTASection />
      <Footer />
    </div>
  );
};
