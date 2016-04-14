import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, PageHeader } from '../../components';

export default () => (
  <DocumentTitle title="404">
    <div>
      <PageHeader
        variant="error"
        headline="404"
        textlineHTML="The page your were looking for doesn't exist"
      >
        <Link
          to="/"
          className="button button--large"
        >
          Go Back
        </Link>
      </PageHeader>
      <CTASection>
        <Link
          to="/about/"
          className="button button--large button--featured"
        >
          Get Started for Free
        </Link>
      </CTASection>
    </div>
  </DocumentTitle>
);
