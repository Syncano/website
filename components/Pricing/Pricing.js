import React from 'react';
import { Link } from 'react-router';
import PricingPlan from './PricingPlan';

export default () => {
  return (
    <div className="pricing">
      <div className="inner">
        <div className="pricing__plans">
          <PricingPlan
            title="Starter"
            price="Free"
            period="for 6 months"
            buttonText="Get Started for Free"
            features={[
              'Full access to all features',
              '15 requests per second',
              '10GB of storage',
              '4 instances (apps)',
              '2 concurrent Scripts',
              'Unlimited users'
            ]}
          />
          <PricingPlan
            isFeatured={true}
            title="Developer"
            price={25}
            period="per month"
            buttonText="Buy Now"
            features={[
              'Full access to all features',
              '60 requests per second',
              'Unlimited storage',
              '16 instances (apps)',
              '8 concurrent Scripts',
              'Unlimited users'
            ]}
            overageRatesLinkTo="/pricing/"
          />
          <PricingPlan
            title="Business"
            price={85}
            period="per month"
            buttonText="Buy Now"
            features={[
              'Full access to all features',
              '60 requests per second',
              'Unlimited storage',
              '16 instances (apps)',
              '8 concurrent Scripts',
              'Unlimited users'
            ]}
            overageRatesLinkTo="/pricing/"
          />
        </div>
        <footer className="pricing__footer">
          <p>
            Premium support? Custom SLA? We’ve got you covered. <Link to="/contact/">Contact us</Link> and we’ll 
            configure a plan that’s best for you.
          </p>
        </footer>
      </div>
    </div>
  );
}
