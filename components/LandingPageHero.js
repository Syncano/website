import React from 'react';
import Helmet from 'react-helmet';
import Hero from './Hero';

const LandingPageHero = ({ title, headline }, { modals }) => {
  return (
    <div>
      <Helmet title={title} />
      <Hero
        headline={headline}
        textline={`Increase your productivity, focus on new features, and scale beyond millions of users without
          managing servers.`}
        image={
          <img
            src={require('../pages/home/build-powerful-apps-in-half-the-time.svg')}
            alt="serverless app platform"
          />
        }
      >
        <div className="hero__text__button-container">
          <span
            className="button button--large button--featured"
            onClick={modals.signUp.open}
          >
            Get Started for Free
          </span>
          <p className="hero__text__button-description">
            6 months free &bull; No credit card required
          </p>
        </div>
      </Hero>
    </div>
  );
};

LandingPageHero.defaultProps = {
  title: 'Build powerful apps in half the time | Syncano',
  headline: <span>Build powerfulapps<br />in half the time</span>
};

LandingPageHero.contextTypes = {
  modals: React.PropTypes.object
};

export default LandingPageHero;
