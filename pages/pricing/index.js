import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import {
  CTASection,
  FAQ,
  Footer,
  ListColumns,
  PageHeader,
  Pricing,
  TextWithImage,
  TextWithBottomImage,
  TwitterSlider
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Pricing">
      <div>
        <PageHeader
          headline="Build secure, scalable apps in half the time"
          textline="30 day money back guarantee. No contracts. Upgrade, downgrade or cancel at any time."
        />
        <Pricing />
        <TextWithImage
          variant="image-left"
          theme="gray"
          image={
            <img
              src={require('./pricing-that-scales-with-your-app.svg')}
              alt="pricing"
            />
          }
          headline="Pricing that scales with your users"
          textline={`Every app comes in different shapes and sizes. Grow and adjust your plan based on your needs. Pay
            fair overage rates when you exceed plan limits and see the number of your active users skyrocket.`}
        />
        <ListColumns headline="No hidden fees. You're in control.">
          <ListColumns.Column
            listItems={[
              'No long-term contracts',
              'Adjust to the plan that fits your needs',
              'Set soft and hard limits to monitor your usage',
              'Move to a paid package when you’re ready',
              'No credit card required to start building apps',
              '30 day money back guarantee',
              'All major credit cards accepted through Stripe'
            ]}
          />
        </ListColumns>
        <TwitterSlider />
        <FAQ />
        <CTASection>
          <h2>Set up your backend in minutes</h2>
          <Link
            className="button button--large button--featured"
            to="/about/"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            6 months free &bull; No credit card required
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
