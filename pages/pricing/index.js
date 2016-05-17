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
  TwitterPricingSlider
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Pricing">
      <div>
        <PageHeader
          headline="Build apps without managing a server"
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
          headline="Pricing that scales with your app"
          textline={`Every app comes in different shapes and sizes. We’re here for you every step of the way - from beta
            to top ten app store ranking. Pay as you grow and adjust your plan based on your needs. Easily upgrade,
            downgrade, or cancel your account at any time.`}
        />
        <ListColumns headline="No hidden fees. You're in control.">
          <ListColumns.Column
            listItems={[
              'No credit card required to start building',
              'All major credit cards accepted through Stripe',
              'No contracts or hidden fees',
              'Build your app on your schedule'
            ]}
          />
          <ListColumns.Column
            listItems={[
              '30 day money back guarantee the first month of any paid plan',
              'Move to a paid package only when you are ready',
              'Set soft and hard limits to monitor your usuage',
              'Adjust to the plan that fits your needs'
            ]}
          />
        </ListColumns>
        <TwitterPricingSlider />
        <FAQ />
        <TextWithBottomImage
          variant="no-bottom-margin"
          headline="Get answers from our developers"
          textline={`Our engineers specialize in the tricky and technical investigations of our platform. When you have
            questions, you’ll get timely answers from our team.`}
          image={
            <img
              src={require('../../images/robot.svg')}
              alt="robot"
            />
          }
        >
          <Link
            to="/about/"
            className="button"
          >
            Get Support
          </Link>
        </TextWithBottomImage>
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
