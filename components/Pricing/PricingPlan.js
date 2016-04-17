import React from 'react';
import classNames  from 'classnames';
import _ from 'lodash';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      isExpanded: false
    }
  },

  handleClick() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded
    });
  },

  renderPrice() {
    const { price } = this.props;
    const currency = (price != 'Free') ? <span className="pricing__plan__box__price">&#36;</span> : '';

    return (
      <div>
        {currency}{price}
      </div>
    );
  },

  renderFeatures() {
    const { features } = this.props;

    return (
      <ul>
        {features.map((feature, key) => (
          <li key={_.kebabCase(feature)}>
            {feature}
          </li>
        ))}
      </ul>
    );
  },

  renderOverageRatesLink() {
    const { overageRatesLinkTo } = this.props;

    if (overageRatesLinkTo) {
      return (
        <Link
          to={overageRatesLinkTo}
          className="pricing__plan__overage-rates"
        >
          overage rates
        </Link>
      );
    }
  },

  getPricingPlanClass() {
    const { isExpanded } = this.state;
    const { isFeatured } = this.props;

    return classNames({
      'pricing__plan': true,
      'pricing__plan--expanded': (isExpanded == true),
      'pricing__plan--featured': (isFeatured == true)
    });
  },

  getPricingPlanButtonClass() {
    const { isFeatured } = this.props;

    return classNames({
      'button': true,
      'button--featured': (isFeatured == true),
      'button--large': true,
      'button--wide': true
    });
  },

  render() {
    const { buttonText, period, title } = this.props;

    return (
      <div className={this.getPricingPlanClass()}>
        <div className="pricing__plan__box">
          <h3 className="pricing__plan__box__title">
            {title}
          </h3>
          <div className="pricing__plan__box__price">
            {this.renderPrice()}
          </div>
          <div className="pricing__plan__box__period">
            {period}
          </div>
          <div className="pricing__plan__box__options">
            <h4>Includes:</h4>
            <select>
              <option>
                100,000 API calls / month - $0
              </option>
            </select>
            <select>
              <option>
                10,000 Script runs / month - $0
              </option>
            </select>
          </div>
          <Link
            to="/about/"
            className={this.getPricingPlanButtonClass()}
          >
            {buttonText}
          </Link>
          <div className="pricing__plan__box__more">
            <span onClick={this.handleClick}>
              Show More
            </span>
          </div>
          <div className="pricing__plan__box__features">
            {this.renderFeatures()}
          </div>
        </div>
        {this.renderOverageRatesLink()}
      </div>
    );
  }
});
