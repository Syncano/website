import React, { PropTypes } from 'react';
import { Footer, Link, PageHeader, PageHelmet, TextWithImage } from '../../components';

const StartupsPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano for Startups"
        mixpanelTitle="Startups"
        description={`Stop wasting time reinventing the wheel and get cracking on the real issues at hand. Make the app
          your users will love. Learn more...`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Syncano for Startups"
        textline={<span>Don’t waste precious funding building functions and integrations that already exists.<br />
          <br />Is your groundbreaking new app haltered by the tedious work on backend stuff? Stop wasting time
          reinventing the wheel and get cracking on the real issues at hand.</span>}
      />
      <TextWithImage
        theme="gray"
        headline={<span>Make the app <br />your users will love</span>}
        textline={`As a startup it’s crucial to reach the iteration that gets traction in the market and scales your
          business idea. Having a great backend is important, but what will make users discover and love your product is
          your ability to create a good user experience. That’s why we have created an automated backend so you can
          spend all your efforts creating business logic in the frontend.`}
        image={
          <img
            src={require('./make-the-app-your-users-will-love.svg')}
            alt="bulb"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>Build fast</li>
            <li>Launch fast</li>
            <li>Scale fast</li>
            <li>Change fast</li>
          </ul>
        </div>
        <p>
          <Link to="/community/">The Syncano community</Link> also provides access to an ever growing library of
          functions and integrations.
        </p>
        <button
          className="button button--large button--featured"
          onClick={modals.signUp.open}
        >
          Sign up now
        </button>
      </TextWithImage>
      <Footer />
    </div>
  );
};

StartupsPage.contextTypes = {
  modals: PropTypes.object
};

export default StartupsPage;
