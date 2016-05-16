import React, { Component } from 'react';
import classNames from 'classnames';

export default class PricingPlanOverageRatesLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasTooltipVisible: false,
    };
  };

  handleClick = () => {
    const { hasTooltipVisible } = this.state;

    this.setState({ hasTooltipVisible: !hasTooltipVisible });
  };

  getClassName = () => {
    const { hasTooltipVisible } = this.state;

    return classNames({
      'pricing-plan__overage-rates': true,
      'pricing-plan__overage-rates--has-tooltip-visible': hasTooltipVisible
    });
  };

  render = () => {
    const { apiCalls, scripts } = this.props;
    const apiCallsOverage = apiCalls.overage;
    const scriptsOverage = scripts.overage;

    if (apiCallsOverage && scriptsOverage) {
      return (
        <span
          className={this.getClassName()}
          onClick={this.handleClick}
        >
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
};
