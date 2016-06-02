import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import {
  CodePreview,
  CTASection,
  FeaturesColumns,
  Footer,
  Hero,
  PlatformsSection,
  TextWithBackground,
  TextWithBottomImage,
  TextWithImage,
  TwitterSlider
} from '../components';

const Homepage = (props, { modals }) => {
  return (
    <div>
      <Helmet
        title="Build powerful realtime apps in half the time | Syncano"
        meta={[
          {
            name: 'description',
            content: `Create and manage your API from our dashboard. Use our serverless platform to set up your backend
             and support millions of users without handling servers!`
          },
          {
            name: 'mixpanelTitle',
            content: 'Home'
          }
        ]}
      />
      <Hero
        headline={<span>Build powerful apps<br />in half the time</span>}
        textline="Use our serverless platform to set up your backend in minutes."
        image={
          <img
            src={require('./home/build-powerful-apps-in-half-the-time.svg')}
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
            <source
              srcSet={`${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api.jpg')} 1x, ${require('./home/a-serverless-app-platform-to-design-publish-and-manage-your-api@2x.jpg')} 2x`}
            />
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
        textline={`Adam is a great guy and a part of our support team. At Syncano, every team member is here to
          help you. When you have questions, you’ll get timely answers directly from our team members.`}
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
  );
};

Homepage.contextTypes = {
  modals: React.PropTypes.object
};

export default Homepage;
