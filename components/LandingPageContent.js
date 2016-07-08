import React from 'react';
import PageHelmet from './PageHelmet';
import Hero from './Hero';
import TextWithBottomImage from './TextWithBottomImage';
import TextWithImage from './TextWithImage';
import ScreenDescriptions from './ScreenDescriptions';
import ColumnParagraphs from './ColumnParagraphs';
import FeaturesColumns from './FeaturesColumns';
import CircleIconColumns from './CircleIconColumns';
import TwitterSlider from './TwitterSlider';
import PlatformsSection from './PlatformsSection';
import CodePreview from './CodePreview';
import TextWithBackground from './TextWithBackground';
import CTASection from './CTASection';
import LandingFooter from './LandingFooter';

const LandingPageContent = ({ heroHeadline, heroTextline }, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Build powerful apps in half the time | Syncano"
        mixpanelTitle="Home"
        description={`Learn the basics of how to get up and running on Syncano. Get answers to your questions. Join us
          on Slack, read tutorials or simply fork our open source code.`}
        ogImageSrc={`${redirect_uri}${require('../pages/home/og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('../pages/home/twitter-image.png')}`}
        noindexNofollow={true}
      />
      <Hero
        headline={heroHeadline || <span>Build powerful apps<br />in half the time</span>}
        textline={heroTextline || `A platform for building serverless apps. Increase productivity, focus on new
          features, and scale without managing servers.`}
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
              srcSet={`${require('../pages/home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small.jpg')} 1x, ${require('../pages/home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small@2x.jpg')} 2x`}
            />
            <source
              srcSet={`${require('../pages/home/a-serverless-app-platform-to-design-publish-and-manage-your-api.jpg')} 1x, ${require('../pages/home/a-serverless-app-platform-to-design-publish-and-manage-your-api@2x.jpg')} 2x`}
            />
            <img
              className="browser-image browser-image--no-bottom-radius browser-image--dark"
              src={require('../pages/home/a-serverless-app-platform-to-design-publish-and-manage-your-api-small@2x.jpg')}
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
            src={require('../pages/home/assemble-your-backend-with-building-blocks.svg')}
            alt="Assemble your backend with building blocks"
          />
        }
      />
      <ScreenDescriptions headline="Data Management">
        <ScreenDescriptions.Screen
          imageSrc={require('../pages/features/define-your-classes.png')}
          image2xSrc={require('../pages/features/define-your-classes@2x.png')}
          imageSmallSrc={require('../pages/features/define-your-classes-small.png')}
          imageSmall2xSrc={require('../pages/features/define-your-classes-small@2x.png')}
          headline="Define your Classes"
          text={`Control how you define the structure for each of your Data Objects. Every Data Object you create will
            inherit the properties of its own customized Class.`}
        />
        <ScreenDescriptions.Screen
          variant="image-right"
          imageSrc={require('../pages/features/customize-class-schemas.png')}
          image2xSrc={require('../pages/features/customize-class-schemas@2x.png')}
          imageSmallSrc={require('../pages/features/customize-class-schemas-small.png')}
          imageSmall2xSrc={require('../pages/features/customize-class-schemas-small@2x.png')}
          headline="Customize Class schemas"
          text={`Create fields with specific types to get a flexible architecture. Our pre-set custom fields include
            string, text, integer, float, Boolean, datetime, file, object, array, and reference.`}
        />
        <ScreenDescriptions.Screen
          imageSrc={require('../pages/features/create-data-objects.png')}
          image2xSrc={require('../pages/features/create-data-objects@2x.png')}
          imageSmallSrc={require('../pages/features/create-data-objects-small.png')}
          imageSmall2xSrc={require('../pages/features/create-data-objects-small@2x.png')}
          headline="Create Data Objects"
          text={`Store your data as JSON objects that contain key-value pairs that you define. Control what your users
            have access to. Define your own data views on the backend instead of updating every client-side
            application.`}
        />
        <ScreenDescriptions.Screen
          variant="image-right"
          imageSrc={require('../pages/features/query-away.png')}
          image2xSrc={require('../pages/features/query-away@2x.png')}
          imageSmallSrc={require('../pages/features/query-away-small.png')}
          imageSmall2xSrc={require('../pages/features/query-away-small@2x.png')}
          headline="Query away!"
          text={`Query your data based on built-in or customized fields for each of your objects. Get back the data
            you need with advanced filtering and ordering.`}
        />
        <footer className="screen-descriptions__footer">
          <span
            className="button button--large button--featured"
            onClick={modals.signUp.open}
          >
            Get Started for Free
          </span>
        </footer>
      </ScreenDescriptions>
      <ColumnParagraphs
        headline="Server-Side Code"
        imageSrc={require('../pages/features/server-side-code.png')}
        image2xSrc={require('../pages/features/server-side-code@2x.png')}
        imageSmallSrc={require('../pages/features/server-side-code-small.png')}
        imageSmall2xSrc={require('../pages/features/server-side-code-small@2x.png')}
      >
        <ColumnParagraphs.Paragraph
          iconSrc={require('../pages/features/scripts.svg')}
          headline="Scripts"
          text={`Scripts are snippets of code that allow you to run complex code on Syncano’s servers. We support a
            wide range of environments including Node.js, Python, Swift, Go, PHP, and Ruby.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('../pages/features/script-endpoint.svg')}
          headline="Script Endpoint"
          text={`Make Scripts public or private, it’s up to you. Send POST or GET requests to your Script and open up
            the possibility of how and where to run it.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('../pages/features/environmental-variables.svg')}
          headline="Environmental Variables"
          text={`Each Snippet can be set to use environmental variables stored in your configuration settings. You can
            store API keys and frequently used variables in a more permanent way.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('../pages/features/integrations.svg')}
          headline="Integrations"
          text={`Connect your app with our constantly growing list of integrations. We’ll help you stay up-to-date
            with new add-ons, keeping your application ahead of the crowd.`}
        />
      </ColumnParagraphs>
      <FeaturesColumns headline="Automations">
        <FeaturesColumns.Column
          iconSrc={require('../pages/features/real-time-communication.svg')}
          headline="Real-Time Communication"
          text={`Add real-time functionality to your app with Channels. Users can subscribe to Channels and get
            notifications of changes to Data Objects. You can grant users the ability to send custom notification
            messages.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('../pages/features/schedules.svg')}
          headline="Schedules"
          text={`Execute your Scripts at a desired date and time interval. Choose from CronTabs and seconds as
            scheduling options. We support time zones so you can launch Scripts in around the globe.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('../pages/features/triggers.svg')}
          headline="Triggers"
          text={`Execute a Server-Side Script when a Data Object inside a selected Class is created, updated, or
            deleted. Each Trigger is customizable to fit your app’s needs.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('../pages/features/push-notifications.svg')}
          headline="Push Notifications"
          text={`Instantly message your iOS or Android users with timely and relevant content. Use our Dashboard to
            configure and send push notifications with ease.`}
        />
      </FeaturesColumns>
      <CircleIconColumns headline="User authentication">
        <CircleIconColumns.Column
          iconSrc={require('../pages/features/add-users.svg')}
          headline="Add Users"
          text={`Allow users to register and sign into your app instantly and securely. Customize them with User
            Profiles - add avatars, files, and relevant information.`}
        />
        <CircleIconColumns.Column
          iconSrc={require('../pages/features/group-users.svg')}
          headline="Group Users"
          text={`Construct different levels of permissions to data stored on Syncano. With groups, you can better
            manage user access controls.`}
        />
        <CircleIconColumns.Column
          iconSrc={require('../pages/features/social-authentication.svg')}
          headline="Social Authentication"
          text={`Allow your users to sign up with Facebook, Google, Twitter, and Linkedin. We’ll automatically create
            their account in Syncano in the same format as with the traditional login.`}
        />
      </CircleIconColumns>
      <TwitterSlider isOnLanding={true} />
      <PlatformsSection
        headline="Use the frameworks and languages you like"
        bottomContentHeadline="Add data with a few lines of code"
        isOnLanding={true}
      >
        <CodePreview variant="no-bottom-radius">
          <CodePreview.Item
            title="Javascript"
            languageClassName="javascript"
            code={require('../pages/home/realtime-sync-javascript.txt')}
          />
          <CodePreview.Item
            title="Python"
            languageClassName="python"
            code={require('../pages/home/realtime-sync-python.txt')}
          />
          <CodePreview.Item
            title="Android"
            languageClassName="java"
            code={require('../pages/home/realtime-sync-android.txt')}
          />
          <CodePreview.Item
            title="Objective-C"
            languageClassName="objectivec"
            code={require('../pages/home/realtime-sync-objectivec.txt')}
          />
          <CodePreview.Item
            title="Swift"
            languageClassName="swift"
            code={require('../pages/home/realtime-sync-swift.txt')}
          />
          <CodePreview.Item
            title="AngularJS"
            languageClassName="javascript"
            code={require('../pages/home/realtime-sync-angular.txt')}
          />
          <CodePreview.Item
            title="Ruby"
            languageClassName="ruby"
            code={require('../pages/home/realtime-sync-ruby.txt')}
          />
          <CodePreview.Item
            title="Ember"
            languageClassName="javascript"
            code={require('../pages/home/realtime-sync-ember.txt')}
          />
          <CodePreview.Item
            title="Arduino"
            languageClassName="cpp"
            code={require('../pages/home/realtime-sync-arduino.txt')}
          />
        </CodePreview>
      </PlatformsSection>
      <TextWithBackground
        theme="image1"
        headline="We’ll support you every step of the way"
        textline={`Adam is a great guy and a part of our support team. At Syncano, every team member is here to help
          you. When you have questions, you’ll get timely answers directly from our team members.`}
      />
      <CTASection />
      <LandingFooter />
    </div>
  );
};

LandingPageContent.contextTypes = {
  modals: React.PropTypes.object
};

export default LandingPageContent;
