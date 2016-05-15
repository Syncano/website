import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { BlockquoteSection, CounterBoxes, CTASection, Footer, OfficesMap, PageHeader } from '../../components';

export default () => {
  return (
    <DocumentTitle title="About">
      <div>
        <PageHeader
          headline="About"
          textline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CounterBoxes />
        <BlockquoteSection>
          <p>„What used to take 5 weeks now takes just 1 week with Syncano. You let developers be developers and not get
          stuck being middleware or database engineers.”</p>
        </BlockquoteSection>
        <OfficesMap />
        <CTASection theme="gray">
          <h2>Join Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link
            to="/jobs/"
            className="button button--large button--featured"
          >
            View Jobs at Syncano
          </Link>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
