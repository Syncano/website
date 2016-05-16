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
          textline="The page your were looking for doesn't exist"
        >
          <Link
            to="/"
            className="button button--large"
          >
            Go Back
          </Link>
          <Travolta />
        </PageHeader>
        <CTASection>
          <h2>Rethink how you build apps. Go serverless!</h2>
          <Link
            to="/about/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            (6 months free &bull; No credit card required)
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
