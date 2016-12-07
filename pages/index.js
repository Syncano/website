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
                  <div className="testimonials-home__item__body__quote__text">If Syncano was around the time we created our MVP, it would have sauved us a full to get into the market</div>
                  <div className="testimonials-home__item__body__quote__author">Stale Husby, CEO, Relinklabs</div>
                </div>
              </div>
            </div>
            <div className="testimonials-home__item">
              <div className="testimonials-home__item__headline">For software developers:</div>
              <div className="testimonials-home__item__textline">Build more code faster.</div>
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
        <TextWithBottomImage
          variant="no-bottom-padding"
          theme="gray"
          headline={<span>Create and manage your API from <br />the Dashboard</span>}
          textline={`Make your own custom APIs in the cloud. Instantly scale for the web, mobile, and the Internet of
            Things. Support millions of users without learning the nuts and bolts of handling servers.`}
          image={
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small.jpg')} 1x, ${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small@2x.jpg')} 2x`}
              />
              <source srcSet={`${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api.jpg')} 1x, ${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api@2x.jpg')} 2x`} />
              <img
                className="browser-image browser-image--no-bottom-radius browser-image--dark"
                src={require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small@2x.jpg')}
                alt="Create and manage your API from our dashboard"
              />
            </picture>
          }
        />
        <TextWithImage
          headline="Assemble your backend with building blocks"
          textline={`Simplify your stack. Piece together one or multiple features as building blocks for your app. Use
            Syncano Sockets as a data hub and easily connect disparate backend systems.`}
          image={
            <img
              src={require('./home/assemble-your-backend-with-building-blocks.svg')}
              alt="Assemble your backend with building blocks"
            />
          }
        />
        <FeaturesColumns
          headline="See what you can do with Syncano"
          underColumnsContent={
            <Link
              to="/features/"
              className="button"
            >
              View All Features
            </Link>
          }
        >
          <FeaturesColumns.Column
            iconSrc={require('./home/real-time-communication.svg')}
            headline="Real-Time Communication"
            text={`Add real-Time functionality to your app with Channels. Users can subscribe to Channels and get
              notifications of changes to Data Objects. You can grant users the ability to send custom notification
              messages.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/run-server-side-logic-in-the-cloud.svg')}
            headline="Run server-side logic in the cloud"
            text={`Execute code on API calls, in response to events, updates to data, in-app activity, or by a schedule.
              Leverage hundreds of available libraries. Write your scripts in Node.js, Go, Swift, Python, Ruby, and
              PHP.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/add-push-notifications.svg')}
            headline="Add push notifications"
            text={`Boost your engagement. Add powerful push notifications to your app with a few clicks in your
              Dashboard. Send relevant notifications to users.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/customize-your-output.svg')}
            headline="Customize your output"
            text={`Save valuable client-side resources to make your app faster. Use Templates to change the output of
              your data to the response format you need, including JSON, XML, and HTML.`}
          />
        </FeaturesColumns>
        <TwitterSlider />
        <PlatformsSection
          headline="Use the frameworks and languages you like"
          bottomContentHeadline="Add data with a few lines of code"
        >
          <CodePreview variant="no-bottom-radius">
            <CodePreview.Item
              title="Javascript"
              languageClassName="javascript"
              code={require('./home/realtime-sync-javascript.txt')}
            />
            <CodePreview.Item
              title="Python"
              languageClassName="python"
              code={require('./home/realtime-sync-python.txt')}
            />
            <CodePreview.Item
              title="Android"
              languageClassName="java"
              code={require('./home/realtime-sync-android.txt')}
            />
            <CodePreview.Item
              title="Objective-C"
              languageClassName="objectivec"
              code={require('./home/realtime-sync-objectivec.txt')}
            />
            <CodePreview.Item
              title="Swift"
              languageClassName="swift"
              code={require('./home/realtime-sync-swift.txt')}
            />
            <CodePreview.Item
              title="AngularJS"
              languageClassName="javascript"
              code={require('./home/realtime-sync-angular.txt')}
            />
            <CodePreview.Item
              title="Ruby"
              languageClassName="ruby"
              code={require('./home/realtime-sync-ruby.txt')}
            />
            <CodePreview.Item
              title="Ember"
              languageClassName="javascript"
              code={require('./home/realtime-sync-ember.txt')}
            />
            <CodePreview.Item
              title="Arduino"
              languageClassName="cpp"
              code={require('./home/realtime-sync-arduino.txt')}
            />
          </CodePreview>
        </PlatformsSection>
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
