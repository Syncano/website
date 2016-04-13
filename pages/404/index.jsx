import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, PageHeader } from '../../components';

export default () => (
  <DocumentTitle title="404">
    <div>
      <PageHeader
        headline="Build apps without managing a server"
        textlineHTML="30 day money back guarantee.<br />No contracts. Upgrade, downgrade or cancel at any time."
      >
        <Link
          to="/"
          className="button"
        >
          Go Back
        </Link>
      </PageHeader>
      <CTASection>
        <Link
          to="/about/"
          className="button button-large button-featured"
        >
          Get Started for Free
        </Link>
      </CTASection>
    </div>
  </DocumentTitle>
);
