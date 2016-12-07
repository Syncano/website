import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { LoggedInContent, LoggedOutContent } from '../LoggedInContent';

const CTASection = ({
  variant,
  theme,
  headline = 'Rethink how you build apps. Go serverless!',
  buttonText = 'Get Started for Free',
  buttonDescription = true,
  children
}, { modals }) => {
  const className = classNames({
    'cta-section': true,
    'cta-section--small-button-only': (variant === 'small-button-only'),
    'cta-section--gray': (theme === 'gray')
  });

  const getDefaultContent = () => (
    <div>
      <h2>{headline}</h2>
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
      {buttonDescription && <p className="cta-section__button-description">
        30 days free &bull; No credit card required
      </p>}
    </div>
  );

  return (
    <div className={className}>
      <div className="inner">
        {children ? children : getDefaultContent()}
      </div>
    </div>
  );
};

CTASection.contextTypes = {
  modals: PropTypes.object
};

export default CTASection;
