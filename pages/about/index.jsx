import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CounterBoxes, CTASection, Footer, PageHeader } from '../../components';

export default () => {
  return (
    <DocumentTitle title="About">
      <div>
        <PageHeader
          headline="About"
          textlineHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CounterBoxes />
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
