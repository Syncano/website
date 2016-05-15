import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { Link } from 'react-router';
import PricingPlanOverageRatesLink from './PricingPlanOverageRatesLink';

export default class PricingPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      prices: {
        apiCalls: props.apiCallsOptions[0],
        scripts: props.scriptsOptions[0]
      }
    };
  };

  handleClick = () => {
    const { isExpanded } = this.state;

    this.setState({ isExpanded: !isExpanded });
  };

  renderPrice() {
    const { prices } = this.state;
    const value = prices.apiCalls.price + prices.scripts.price;
    
    if (this.props.price) {
      return (
        <div>
          {this.props.price}
        </div>
      );
    }
    
    return (
      <div>
        <span className="pricing-plan__box__price">&#36;</span>{value}
      </div>
    );
  };

  renderFeatures() {
    const { features } = this.props;

    return (
      <ul>
        {features.map((feature) => (
          <li key={_.kebabCase(feature)}>
            {feature}
          </li>
        ))}
      </ul>
    );
  };

  handleSelectChange(event, field) {
    const { prices } = this.state;
    const value = JSON.parse(event.target.value);

    this.setState({ prices: _.merge({}, prices, { [field]: value }) })
  };

  renderSelect(field) {
    const { apiCallsOptions, scriptsOptions } = this.props;
    const options = {
      apiCalls: apiCallsOptions,
      scripts: scriptsOptions
    };
    const label = {
      apiCalls: 'API calls',
      scripts: 'Script seconds'
    };
    const count = options[field].length;

    return (
      <select
        key={field}
        onChange={(event) => this.handleSelectChange(event, field)}
        disabled={count < 2}
      >
        {_.map(options[field], (option) => {
          return (
            <option
              key={option.price}
              value={JSON.stringify(option)}
            >
              {option.included} {label[field]} {option.price > 0 && `- $${option.price}`}
            </option>
          )
        })}
      </select>
    );
  };

  renderButton() {
    const { buttonText, isFeatured } = this.props;
    const className = classNames({
      'button': true,
      'button--featured': (isFeatured == true),
      'button--large': true,
      'button--wide': true
    });

    if (buttonText) {
      return (
        <Link
          to="/about/"
          className={className}
        >
          {buttonText}
        </Link>
      );
    }

    return null;
  };

  getPricingPlanClassName() {
    const { isExpanded } = this.state;
    const { isFeatured } = this.props;

    return classNames({
      'pricing-plan': true,
      'pricing-plan--expanded': (isExpanded == true),
      'pricing-plan--featured': (isFeatured == true)
    });
  };

  render() {
    const { period, title } = this.props;
    const { prices } = this.state;

    return (
      <div className={this.getPricingPlanClassName()}>
        <div className="pricing-plan__box">
          <h3 className="pricing-plan__box__title">
            {title}
          </h3>
          <div className="pricing-plan__box__price">
            {this.renderPrice()}
          </div>
          <div className="pricing-plan__box__period">
            {period}
          </div>
          <div className="pricing-plan__box__options">
            <h4>Includes:</h4>
            {this.renderSelect('apiCalls')}
            {this.renderSelect('scripts')}
          </div>
          {this.renderButton()}
          <div className="pricing-plan__box__more">
            <span
              className="pricing-plan__box__more__link"
              onClick={this.handleClick}
            >
              Show More
            </span>
          </div>
          <div className="pricing-plan__box__features">
            {this.renderFeatures()}
          </div>
        </div>
        <PricingPlanOverageRatesLink prices={prices} />
      </div>
    );
  };
};
