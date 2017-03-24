import React from 'react';
import { Link } from 'react-router';
import BodyClassName from 'react-body-classname';
import {
  CardTestimonials,
  CTASection,
  Footer,
  Hero,
  LargeBlockquote,
  PageHelmet,
  TextWithBackground,
  TwitterSlider,
  TwoPagesPromo
} from '../components';

const HomePage = () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <BodyClassName className="homepage">
      <div>
        <div>
          <PageHelmet
            title="The Ultimate Tech Platform for Business Development | Syncano"
            mixpanelTitle="Home"
            description={`A platform for building serverless apps. Increase productivity, focus on new features, and scale
              to millions of users without managing servers. Get started for free!`}
            ogImageSrc={`${redirect_uri}${require('./home/og-image.png')}`}
            twitterImageSrc={`${redirect_uri}${require('./home/twitter-image.png')}`}
          />
          <Hero
            variant="homepage"
            headline={<span>The Ultimate<br />Tech Platform for<br />Business Development</span>}
            textline={<span>Automated backend running in the cloud, <br className="medium" /><Link to="/community/">
              powered by the community</Link>.</span>}
            image={
              <img
                src={require('./home/the-ultimate-tech-platform-for-business-development.svg')}
                alt="serverless app platform"
              />
            }
          />
          <CardTestimonials>
            <CardTestimonials.Card
              headline="For business developers:"
              textline="Scale your venture faster."
              link1To="/enterprises/"
              link1Text="Enterprise"
              link2To="/startups/"
              link2Text="Startup"
              authorImgSrc={require('./home/stale-husby@2x.jpg')}
              quote={`If Syncano was around at the time we created our MVP, it would have saved us a full year to get into
                the market.`}
              author="Ståle Husby, CEO, Relink"
            />
            <CardTestimonials.Card
              headline="For software developers:"
              textline="Build more code faster."
              link1To="/mobile-developers/"
              link1Text="Mobile"
              link2To="/full-stack-developers/"
              link2Text="Full stack"
              authorImgSrc={require('./home/artur-czemiel@2x.jpg')}
              quote="We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming."
              author="Artur Czemiel, developer & founder, Aexol"
            />
          </CardTestimonials>
          <LargeBlockquote
            authorImgSrc={require('./home/nikolai-fasting@2x.jpg')}
            quote="We are entering an era where software builds software. Syncano is a pioneer in that evolution."
            author="Nikolai Fasting, CEO & Founder, Syncano"
            linkHref="https://www.syncano.io/blog/if-software-eats-the-world-syncano-feeds-it/"
            linkText="Read about our vision here"
          />
          <TwoPagesPromo>
            <TwoPagesPromo.Page
              imgSrc={require('./home/syncano-vs-firebase.svg')}
              title="Syncano vs Firebase"
              description={`Syncano is a developer platform for rapid backend development. See how it compares to Google’s
                Firebase.`}
            >
              <div className="button-container">
                <Link
                  to="/syncano-vs-firebase/"
                  className="button"
                >
                  See how they compare
                </Link>
              </div>
            </TwoPagesPromo.Page>
            <TwoPagesPromo.Page
              imgSrc={require('./home/the-instant-backend-solution-for-react-developers.svg')}
              title="For React Developers"
              description={`Build your React app backend in minutes. Cloud database management, server-side functions, and
                more - all in one place.`}
            >
              <Link
                to="/react-developers/"
                className="button"
              >
                Build my React app
              </Link>
            </TwoPagesPromo.Page>
          </TwoPagesPromo>
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
              Help &amp; Support
            </Link>
          </TextWithBackground>
          <CTASection />
          <Footer />
        </div>
      </div>
    </BodyClassName>
  );
};

export default HomePage;
