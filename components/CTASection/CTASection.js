import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { LoggedInContent, LoggedOutContent } from '../LoggedInContent';

const CTASection = ({
  variant,
  theme,
  headline = 'Rethink how you build apps. Go serverless!',
  textline,
  buttonText = 'Get Started for Free',
  showButtonDescription = true,
  children
}, { modals }) => {
  const className = classNames({
    'cta-section': true,
    'cta-section--small-button-only': (variant === 'small-button-only'),
    'cta-section--gray': (theme === 'gray')
  });

  const renderChildren = () => {
    if (children) {
      return children;
    }

    return (
      <div>
        <LoggedOutContent>
          <span
            className="button button--large button--featured"
            onClick={modals.signUp.open}
          >
            {buttonText}
          </span>
        </LoggedOutContent>
        <LoggedInContent>
          <a
            className="button button--large button--featured"
            href={APP_CONFIG.dashboardUrl}
          >
            Go to Dashboard
          </a>
        </LoggedInContent>
        {showButtonDescription && <p className="cta-section__button-description">
          30 days free &bull; No credit card required
        </p>}
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="inner">
        <h2>{headline}</h2>
        <p>{textline}</p>
        {renderChildren()}
      </div>
    </div>
  );
};

CTASection.contextTypes = {
  modals: PropTypes.object
};

export default CTASection;
