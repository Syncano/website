import React from 'react';
import { Hero } from '../../../components';

const ForAppCreatorsLandingPage = (props, { modals }) => {
  return (
    <Hero
      headline={<span>Serverless platform<br />for app creators</span>}
      textline={`Increase your productivity, focus on new features, and scale beyond millions of users without managing
        servers.`}
      image={
        <img
          src={require('../../home/build-powerful-apps-in-half-the-time.svg')}
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

ForAppCreatorsLandingPage.contextTypes = {
  modals: React.PropTypes.object
};

export default ForAppCreatorsLandingPage;
