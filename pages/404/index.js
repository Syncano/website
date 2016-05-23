import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, Travolta } from '../../components';

export default () => {
  return (
    <DocumentTitle title="404">
      <div>
        <PageHeader
          variant="error-404"
          headline="404"
          textline="The page you were looking for doesn't exist"
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
    </DocumentTitle>
  );
};
