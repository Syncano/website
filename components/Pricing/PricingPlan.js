import React from 'react';
import classNames  from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState: function() {
    return {isExpanded: false};
  },

  handleClick: function(event) {
    event.preventDefault();
    this.setState({isExpanded: !this.state.isExpanded});
  },

  render() {
    const pricingPlanClass = classNames({
      'pricing__plan': true,
      'pricing__plan--expanded': (this.state.isExpanded == true),
      'pricing__plan--featured': (this.props.isFeatured == true)
    });

    const currency = (this.props.price != 'Free') ? <span className="pricing__plan__box__price">&#36;</span> : '';

    const pricingPlanButtonClass = classNames({
      'button': true,
      'button--featured': (this.props.isFeatured == true),
      'button--large': true,
      'button--wide': true
    });

    const getOverageRatesLink = () => {
      let overageRatesLink = '';

      if (this.props.overageRatesLinkTo) {
        overageRatesLink = (
          <Link
            to={this.props.overageRatesLinkTo}
            className="pricing__plan__overage-rates"
          >
            overage rates
          </Link>
        );
      }

      return overageRatesLink;
    };

    return (
      <div className={pricingPlanClass}>
        <div className="pricing__plan__box">
          <h3 className="pricing__plan__box__title">
            {this.props.title}
          </h3>
          <div className="pricing__plan__box__price">
            {currency}{this.props.price}
          </div>
          <div className="pricing__plan__box__period">
            {this.props.period}
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
            className={pricingPlanButtonClass}
          >
            {this.props.buttonText}
          </Link>
          <div className="pricing__plan__box__more">
            <a
              href="#"
              onClick={this.handleClick}
            >
              Show More
            </a>
          </div>
          <div className="pricing__plan__box__features">
            <ul>
              {this.props.features.map(function(object, key) {
                return (
                  <li key={key}>
                    {object}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {getOverageRatesLink()}
      </div>
    );
  }
});
