import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import PricingPlan from './PricingPlan';
import config from '../../config/';

export default class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  componentWillMount() {
    this.fetchPlans();
  };

  fetchPlans() {
    const plansUrl = `${config.syncanoAPIBaseUrl}v1.1/billing/plans/`;

    axios.get(plansUrl).then((response) => this.setState({ plan: response.data.objects[0] }));
  };

  getOptions(field, minPrice, maxPrice) {
    const { plan } = this.state;
    const keyName = {
      apiCalls: 'api',
      scripts: 'cbx'
    };
    const options = _.filter(plan.options[keyName[field]], (value) => _.inRange(value, minPrice, maxPrice));

    return _.map(options, (option) => _.merge({}, { price: parseInt(option) }, plan.pricing[keyName[field]][option]));
  };

  getFreePlanOptions(field) {
    const options = {
      apiCalls: [{
        price: 0,
        included: 100000
      }],
      scripts: [{
        price: 0,
        included: 10000
      }]
    };

    return options[field];
  };

  render() {
    const { plan } = this.state;

    if (!plan) {
      return null;
    }

    return (
      <div className="pricing">
        <div className="inner inner--pricing">
          <div className="pricing__plans">
            <PricingPlan
              title="Starter"
              price="Free"
              period="for 6 months"
              apiCallsOptions={this.getFreePlanOptions('apiCalls')}
              scriptsOptions={this.getFreePlanOptions('scripts')}
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
              period="per month"
              apiCallsOptions={this.getOptions('apiCalls', 0, 41)}
              scriptsOptions={this.getOptions('scripts', 0, 11)}
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
              period="per month"
              apiCallsOptions={this.getOptions('apiCalls', 41, 1500)}
              scriptsOptions={this.getOptions('scripts', 0, 1500)}
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
            <Link
              to="/about/"
              className="button button--large button--featured"
            >
              Get Started for Free
            </Link>
            <p>
              Premium support? Custom SLA? We’ve got you covered. <Link to="/contact/">Contact us</Link> and we’ll 
              configure a plan that’s best for you.
            </p>
          </footer>
        </div>
      </div>
    );
  }
};
