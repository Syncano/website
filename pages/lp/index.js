import React from 'react';
import { Hero } from '../../components';

const LandingPage = (props, { modals }) => {
  return (
    <Hero
      headline={<span>Build powerful apps<br />in half the time</span>}
      textline={`A platform for building serverless apps. Increase productivity, focus on new features, and scale
        without managing servers.`}
      image={
        <img
          src={require('../home/build-powerful-apps-in-half-the-time.svg')}
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
  );
};

LandingPage.contextTypes = {
  modals: React.PropTypes.object
};

export default LandingPage;
