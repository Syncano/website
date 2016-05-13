import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader } from '../../components';

export default () => {
  return (
    <DocumentTitle title="Features">
      <div>
        <PageHeader
          headline="Features"
          textline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
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
