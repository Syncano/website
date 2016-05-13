import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { Link } from 'react-router';

export default class PricingPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      price: {
        apiCalls: props.apiCallsOptions[0].price,
        scripts: props.scriptsOptions[0].price,
        apiCallsOverage: props.apiCallsOptions[0].overage,
        scriptsOverage: props.scriptsOptions[0].overage
      }
    }
  };

  handleClick = () => {
    const { isExpanded } = this.state;

    this.setState({ isExpanded: !isExpanded });
  };

  renderPrice() {
    const { price } = this.state;
    const value = price.apiCalls + price.scripts;
    
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

  renderOverageRatesLink() {
    const { isFreePlan } = this.props;
    const { apiCallsOverage, scriptsOverage } = this.state.price;

    if (!isFreePlan) {
      return (
        <span className="pricing-plan__overage-rates">
          overage rates
          <span className="pricing-plan__overage-rates__tooltip">
            <strong>Overage Unit Price</strong>
            <ul>
              <li>API Calls: &#36;{apiCallsOverage}</li>
              <li>Scripts seconds: &#36;{scriptsOverage}</li>
            </ul>
          </span>
        </span>
      );
    }

    return null;
  };

  handleSelectChange(event, field) {
    const { price } = this.state;
    const value = JSON.parse(event.target.value.toString());

    this.setState({ price: _.merge({}, price, { [field]: value.price, [field + 'Overage']: value.overage }) })
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
              value={`{ "price": ${option.price}, "overage": ${option.overage} }`}
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
        {this.renderOverageRatesLink()}
      </div>
    );
  }
}
