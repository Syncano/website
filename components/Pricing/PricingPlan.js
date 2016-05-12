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
        scripts: props.scriptsOptions[0].price
      }
    }
  };

  handleClick() {
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
      )
    }
    
    return (
      <div>
        <span><span className="pricing-plan__box__price">&#36;</span>{value}</span>
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
    const { overageRatesLinkTo } = this.props;

    if (overageRatesLinkTo) {
      return (
        <Link
          to={overageRatesLinkTo}
          className="pricing-plan__overage-rates"
        >
          overage rates
        </Link>
      );
    }

    return null;
  };

  handleSelectChange(event, field) {
    const { price } = this.state;
    const value = parseInt(event.target.value);

    this.setState({ price: _.merge({}, price, {[field]: value})})
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

    return (
      <select
        key={field}
        onChange={(event) => this.handleSelectChange(event, field)}
      >
        {_.map(options[field], (option) => {
          return (
            <option key={option.price} value={option.price}>
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
