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
  TextWithBottomImage
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Pricing">
      <div>
        <PageHeader
          headline="Build apps without managing a server"
          textlineHTML="30 day money back guarantee. No contracts. Upgrade, downgrade or cancel at any time."
        />
        <Pricing />
        <TextWithImage
          variant="image-left"
          theme="gray"
          image={
            <img
              src={require('../../images/illustrations/pricing.svg')}
              alt="pricing"
            />
          }
          headline="Pricing that scales with your app"
          textline={`Pay as you grow. Every app comes in different shapes and sizes. You are in control to adjust your
            plan based on your needs and growth. Easily upgrade or downgrade your account at any time.`}
        />
        <ListColumns headline="Pricing that scales with your app">
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
          <Link
            to="/about/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
