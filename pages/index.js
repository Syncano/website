import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import {
  CodePreview,
  CTASection,
  FeaturesColumns,
  Footer,
  Hero,
  SlackSlider,
  PlatformsSection,
  TextWithBackground,
  TextWithBottomImage,
  TextWithImage,
  TwitterSlider
} from '../components';

export default () => {
  return (
    <DocumentTitle title="Syncano">
      <div>
        <Hero
          headline={<span>Build powerful apps<br />in half the time</span>}
          textline="Automate the backend. Set up your own serverless architecture in minutes."
          image={
            <img
              src={require('./home/hero.svg')}
              alt="serverless app platform"
            />
          }
        >
          <Link
            to="/features/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
          <p className="hero__text__button-description">
            (6 months free &bull; No credit card required)
          </p>
        </Hero>
        <TextWithBottomImage
          theme="gray"
          headline="A serverless app platform to design, publish and manage your API"
          textline={`Make your own custom API’s in the cloud. Instantly scale for the web, mobile, and the Internet of
            Things. Support millions of users without learning the nuts and bolts of handling servers.`}
          image={
            <img
              src={require('./home/serverless-app-platform.svg')}
              alt="serverless app platform"
            />
          }
        />
        <TwitterSlider />
        <TextWithImage
          headline="Assemble your backend with building blocks"
          textline={`Simplify your stack. Piece together one or multiple features as building blocks for your app. Use
            Syncano as a data hub and easily connect disparate backend systems.`}
          image={
            <img
              src={require('./home/assemble-your-backend-with-building-blocks.svg')}
              alt="sample-illustration"
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
            iconSrc={require('./home/polygon-index-your-data-for-search.svg')}
            headline="Index your data for search"
            text={`Easily search for the data you need. Create sophisticated data relations and apply multiple filters.
              Specify your queries with your own custom endpoints.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/polygon-customize-your-output.svg')}
            headline="Customize your output"
            text={`Save valuable client-side resources to make your app faster. Use Templates to change the output of
              your data to the response format you need, including JSON, XML, and HTML.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/polygon-add-push-notifications.svg')}
            headline="Add push notifications"
            text={`Boost your engagement. Add powerful push notifications to your app with a few clicks in your
              Dashboard. Send relevant notifications to users.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./home/polygon-run-server-side-logic-in-the-cloud.svg')}
            headline="Run server-side logic in the cloud"
            text={`Execute code on API calls, in response to events, updates to data, in-app activity or by a schedule.
              Leverage hundreds of available libraries. Write your scripts in NodeJS, Golang, Swift, Python, Ruby, and
              PHP.`}
          />
        </FeaturesColumns>
        <PlatformsSection
          headline="Use the frameworks and languages you already know"
          bottomContentHeadline="Add realtime communication with a few lines of code"
        >
          <CodePreview variant="no-bottom-radius">
            <CodePreview.Item
              title="Swift"
              languageClassName="swift"
              code={require('!raw!./home/realtime-sync-swift.txt')}
            />
            <CodePreview.Item
              title="Objective-C"
              languageClassName="objectivec"
              code={require('!raw!./home/realtime-sync-objectivec.txt')}
            />
            <CodePreview.Item
              title="JavaScript"
              languageClassName="javascript"
              code={require('!raw!./home/realtime-sync-javascript.txt')}
            />
            <CodePreview.Item
              title="Java"
              languageClassName="java"
              code={require('!raw!./home/realtime-sync-java.txt')}
            />
          </CodePreview>
        </PlatformsSection>
        <SlackSlider />
        <TextWithBackground
          theme="image1"
          headline="We’ll support you every step of the way"
          textline={`Mariusz is a great guy and a part of our support team. At Syncano, every team member is here to
            help you. When you have questions, you’ll get timely answers directly from our team members.`}
        >
          <Link
            to="/help/"
            className="button"
          >
            Get Help
          </Link>
        </TextWithBackground>
        <CTASection>
          <h2>Rethink how you build apps. Go serverless!</h2>
          <Link
            to="/about/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            (6 months free &bull; No credit card required)
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
