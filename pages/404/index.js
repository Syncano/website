import React from 'react';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, PageHelmet, Travolta } from '../../components';

const Error404Page = () => {
  return (
    <div>
      <PageHelmet
        title="404 Error - Page does not exist | Syncano"
        mixpanelTitle="404"
        description="The page you were looking for doesn't exist."
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

export default Error404Page;
