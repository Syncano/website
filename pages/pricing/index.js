import React from 'react';
import {
  CTASection,
  FAQ,
  Footer,
  ListColumns,
  PageHeader,
  PageHelmet,
  Pricing,
  TextWithImage,
  TextWithBottomImage,
  TwitterSlider
} from '../../components';

export default () => {
  return (
    <div>
      <PageHelmet
        title="Plans & Pricing at Syncano"
        mixpanelTitle="Pricing"
        description="Get started with Syncano for free and scale to millions of users. Upgrade, downgrade or cancel at
        any time. 30 day money back guarantee. Read more..."
      />
      <PageHeader
        headline="Build secure, scalable apps in half the time"
        textline="30-day money back guarantee. No contracts. Upgrade, downgrade, or cancel at any time."
      />
      <Pricing />
      <TextWithImage
        variant="image-left"
        theme="gray"
        image={
          <img
            src={require('./pricing-that-scales-with-your-users.svg')}
            alt="pricing chart"
          />
        }
        headline="Pricing that scales with your users"
        textline={`Apps come in different shapes and sizes. As you grow, you can adjust your plan based on your needs.
          Pay fair overage rates when you see the number of your users skyrocket and exceed the limits of your current
          plan.`}
      />
      <ListColumns headline="No hidden fees. You're in control.">
        <ListColumns.Column
          listItems={[
            'No long-term contracts',
            'Adjust to the plan that fits your needs',
            'Set soft and hard limits to monitor your usage',
            'Move to a paid package when you’re ready',
            'No credit card required to start building apps',
            '30-day money back guarantee',
            'All major credit cards accepted through Stripe'
          ]}
        />
      </ListColumns>
      <TwitterSlider />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};
