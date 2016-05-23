import React from 'react';
import classNames  from 'classnames';

const CTASection = ({ variant, theme, children }, { modals }) => {
  const className = classNames({
    'cta-section': true,
    'cta-section--small-button-only': (variant === 'small-button-only'),
    'cta-section--gray': (theme === 'gray')
  });

  const getDefaultContent = () => (
    <div>
      <h2>Rethink how you build apps. Go serverless!</h2>
      <span
        className="button button--large button--featured"
        onClick={modals.signUp.open}
      >
        Get Started for Free
      </span>
      <p className="cta-section__button-description">
        6 months free &bull; No credit card required
      </p>
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
  modals: React.PropTypes.object
};

export default CTASection;
