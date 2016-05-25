import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, Travolta } from '../../components';

export default () => {
  return (
    <div>
      <Helmet
        title="404 Error - Page does not exist | Syncano"
        meta={[
          {
            name: 'description',
            content: `The age you were looking for doesn't exist.`
          },
          {
            name: 'mixpanelTitle',
            content: '404'
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
