import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import BodyClassName from 'react-body-classname';
import {
  CodePreview,
  CTASection,
  FeaturesColumns,
  Footer,
  Hero,
  PageHelmet,
  PlatformsSection,
  StatusInfo,
  TextWithBackground,
  TextWithBottomImage,
  TextWithImage,
  TwitterSlider
} from '../components';

const Home = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <BodyClassName className="homepage">
      <div>
        <PageHelmet
          title="Build powerful apps in half the time | Syncano"
          mixpanelTitle="Home"
          description={`A platform for building serverless apps. Increase productivity, focus on new features, and scale
            to millions of users without managing servers. Get started for free!`}
          ogImageSrc={`${redirect_uri}${require('./home/og-image.png')}`}
          twitterImageSrc={`${redirect_uri}${require('./home/twitter-image.png')}`}
        />
        <div className="status-topbar">
          <div className="status-topbar__news-column">
            News from Syncano: <a className="status-topbar__news-column__blog-link" href="https://www.syncano.io/blog/executing-logic-based-on-data-changes-with-triggers/" target="_blank">Executing Logic Based on Data Changes with Triggers</a>
          </div>
          <div className="status-topbar__status-column">
            Syncano Status:
            <StatusInfo />
            <Link
              className="status-topbar__status-column__status-link"
              to="/help/">
              Status Page
            </Link>
          </div>
        </div>
        <Hero
          headline={<span>The Ultimate<br />Tech Platform for<br />Business Development</span>}
          textline={[
            'Automated backend running in the cloud, ',
            <br />,
            <Link to="/community/"><u>powered by the community</u></Link>,
            '.'
          ]}
          image={
            <img
              src={require('./home/robots.svg')}
              alt="serverless app platform"
            />
          }
          className="hero--homepage"
        />
        <div className="inner">
          <div className="testimonials-home">
            <div className="testimonials-home__item">
              <div className="testimonials-home__item__headline">For business developers:</div>
              <div className="testimonials-home__item__textline">Scale your venture faster.</div>
              <div className="testimonials-home__item__buttons">
                <Link to="/enterprises/" className="testimonials-home__item__buttons__single button button--filled button--wide">
                  enterprise
                </Link>
                <Link to="/startups/" className="testimonials-home__item__buttons__single button button--filled button--wide">
                  startup
                </Link>
              </div>
              <div className="testimonials-home__item__body">
                <img
                  className="testimonials-home__item__body__image"
                  src={require('./home/stale@2x.jpg')}
                  alt="Stale Husby, CEO, Relinklabs"
                />
                <div className="testimonials-home__item__body__quote">
                  <div className="testimonials-home__item__body__quote__text">If Syncano was around at the time we created our MVP, it would have saved us a full year to get into the market.</div>
                  <div className="testimonials-home__item__body__quote__author">Ståle Husby, CEO, Relinklabs</div>
                </div>
              </div>
            </div>
            <div className="testimonials-home__item">
              <div className="testimonials-home__item__headline">For software developers:</div>
              <div className="testimonials-home__item__textline">Build more code faster.</div>
              <div className="testimonials-home__item__buttons">
                <Link to="/mobile-developers/" className="testimonials-home__item__buttons__single button button--filled button--wide">
                  Mobile
                </Link>
                <Link to="/full-stack-developers/" className="testimonials-home__item__buttons__single button button--filled button--wide">
                  Full stack
                </Link>
              </div>
              <div className="testimonials-home__item__body">
                <img
                  className="testimonials-home__item__body__image"
                  src={require('./home/artur@2x.jpg')}
                  alt="Artur Czemiel, developer, Aexol"
                />
                <div className="testimonials-home__item__body__quote">
                  <div className="testimonials-home__item__body__quote__text">We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming.</div>
                  <div className="testimonials-home__item__body__quote__author">Artur Czemiel, developer, Aexol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-homepage-nik">
          <div className="inner">
            <div className="new-homepage-nik__content">
              <div className="new-homepage-nik__content__image" />
              <div className="new-homepage-nik__content__body">
                <div className="new-homepage-nik__content__headline">
                  "We are entering an era where software builds software. Syncano is a pioneer in that evolution."
                </div>
                <div className="new-homepage-nik__content__textline">
                  Nikolai Fasting, CEO & Founder, Syncano
                  <div>
                    <Link to="/vision/">Read about our vision here</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TwitterSlider />
        <TextWithBackground
          theme="image1"
          headline="We’ll support you every step of the way"
          textline={`Adam is a great guy and a part of our support team. At Syncano, every team member is here to help
            you. When you have questions, you’ll get timely answers directly from our team members.`}
        >
          <Link
            to="/help/"
            className="button"
          >
            Get support
          </Link>
        </TextWithBackground>
        <CTASection />
        <Footer />
      </div>
    </BodyClassName>
  );
};

Home.contextTypes = {
  modals: PropTypes.object
};

export default Home;
