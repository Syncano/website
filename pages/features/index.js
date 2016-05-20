import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import {
  CircleIconColumns,
  CTASection,
  ColumnParagraphs,
  FeaturesColumns,
  Footer,
  PageHeader,
  ScreenDescriptions,
  TextWithBottomImage,
  TextWithImage
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Features">
      <div>
        <PageHeader
          headline="Features"
          textline="Rapidly assemble building blocks for your app without a backend or server"
        />
        <TextWithImage
          variant="image-right"
          theme="gray"
          headline="Customize features as Sockets"
          textline={`Sockets are the layer stacked between Syncano’s core and your application. Easily configure,
            combine and create Sockets for your app. Instantly add new functionality to your applications exactly the
            way you want.`}
          image={
            <img
              src={require('./customize-individual-features-as-sockets.svg')}
              alt="Customize individual features as Sockets"
            />
          }
        />
        <TextWithBottomImage
          variant="no-bottom-padding minus-bottom-margin"
          theme="purple"
          headline="Collaborate better with our Dashboard"
          textline={`Visualize your data in our Dashboard to have a complete overview of your applications. Edit and
            test your scripts, manage users, collaborate with multiple admins, and more - all from one place.`}
          image={
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./collaborate-better-with-our-dashboard-small.jpg')} 1x, ${require('./collaborate-better-with-our-dashboard-small@2x.jpg')} 2x`}
              />
              <source
                srcSet={`${require('./collaborate-better-with-our-dashboard.jpg')} 1x, ${require('./collaborate-better-with-our-dashboard@2x.jpg')} 2x`}
              />
              <img
                className="browser-image"
                src={require('./collaborate-better-with-our-dashboard-small@2x.jpg')}
                alt="Collaborate better with our Dashboard"
              />
            </picture>
          }
        />
        <ScreenDescriptions headline="Data Management">
          <ScreenDescriptions.Screen
            imageSrc={require('./screen-1.jpg')}
            image2xSrc={require('./screen-1@2x.jpg')}
            imageSmallSrc={require('./screen-1-small.jpg')}
            imageSmall2xSrc={require('./screen-1-small@2x.jpg')}
            headline="Define your classes"
            text={`Control how you define the structure for each of your data objects. Every data object you create will
              inherit the properties of own customized class.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-2.jpg')}
            image2xSrc={require('./screen-2@2x.jpg')}
            imageSmallSrc={require('./screen-2-small.jpg')}
            imageSmall2xSrc={require('./screen-2-small@2x.jpg')}
            headline="Customize class schemas"
            text={`Create fields with specific types to get a flexible architecture. Our pre-set custom fields include
              string, text, integer, float, boolean, datetime, file, object, array and reference.`}
          />
          <ScreenDescriptions.Screen
            imageSrc={require('./screen-3.jpg')}
            image2xSrc={require('./screen-3@2x.jpg')}
            imageSmallSrc={require('./screen-3-small.jpg')}
            imageSmall2xSrc={require('./screen-3-small@2x.jpg')}
            headline="Create data objects"
            text={`Store your data as JSON objects that contain key-value pairs that you define. Control what your users
              have access to. Define your own data views on the backend instead of updating every client-side
              application.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-4.jpg')}
            image2xSrc={require('./screen-4@2x.jpg')}
            imageSmallSrc={require('./screen-4-small.jpg')}
            imageSmall2xSrc={require('./screen-4-small@2x.jpg')}
            headline="Query away!"
            text={`Query your data based on built-in or customized fields for each of your objects. Get back the data
              you need with advanced filtering and ordering.`}
          />
        </ScreenDescriptions>
        <ColumnParagraphs 
          headline="Server-side code"
          imageSrc={require('./server-side-code.jpg')}
          image2xSrc={require('./server-side-code@2x.jpg')}
          imageSmallSrc={require('./server-side-code-small.jpg')}
          imageSmall2xSrc={require('./server-side-code-small@2x.jpg')}
        >
          <ColumnParagraphs.Paragraph
            iconSrc={require('./scripts.svg')}
            headline="Scripts"
            text={`Scripts are snippets of code that allow you to run complex code on Syncano’s servers. We support a
              wide range of environments including NodeJS, Python, Swift, Golang, PHP and Ruby.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./script-endpoint.svg')}
            headline="Script Endpoint"
            text={`Make Scripts public or private, it’s up to you. Send POST or GET requests to your Script and open up
              the possibility of how and where to run it.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./environmental-variables.svg')}
            headline="Environmental variables"
            text={`Each Snippet can be set to use environmental variables stored in your configuration settings. You can
              store API keys and frequently used variables in a more permanent way.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./integrations.svg')}
            headline="Integrations"
            text={`Connect your app with our constantly growing list of integrations. We’ll help you stay up-to-date
              with new addons, keeping your application ahead of the crowd.`}
          />
        </ColumnParagraphs>
        <FeaturesColumns headline="Automations">
          <FeaturesColumns.Column
            iconSrc={require('./realtime-communication.svg')}
            headline="Realtime communication"
            text={`Add realtime functionality to your app with Channels. Users can subscribe to Channels and get
              notifications of changes to data objects. You can grant users the ability to send custom notification
              messages.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./schedules.svg')}
            headline="Schedules"
            text={`Execute your Scripts at a desired date and time interval. Choose from crontabs and seconds as
              scheduling options. We support timezones so you can launch Scripts in around the globe.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./triggers.svg')}
            headline="Triggers"
            text={`Execute a Server-Side Script when a Data Object inside a selected Class is created, updated or
              deleted. Each Trigger is customizable to fit your app’s needs.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./push-notifications.svg')}
            headline="Push Notifications"
            text={`Instantly message your iOS or Android users with timely and relevant content. Use our dashboard to
              configure and send push notifications with ease.`}
          />
        </FeaturesColumns>
        <CircleIconColumns headline="User Authentication">
          <CircleIconColumns.Column
            iconSrc={require('./add-users.svg')}
            headline="Add Users"
            text={`Allow users to register and sign into your app instantly and securely. Customize them with User
              Profiles - add avatars, files and relevant information.`}
          />
          <CircleIconColumns.Column
            iconSrc={require('./group-users.svg')}
            headline="Group users"
            text={`Construct different levels of permissions to data stored on Syncano. With groups, you can better
              manage user’s access control.`}
          />
          <CircleIconColumns.Column
            iconSrc={require('./social-authentication.svg')}
            headline="Social authentication"
            text={`Allow your users to sign up with Facebook, Google, Twitter and Linkedin. We’ll automatically create
              their account in Syncano in the same format as with the traditional login.`}
          />
        </CircleIconColumns>
        <CTASection>
          <h2>Set up your backend in minutes</h2>
          <Link
            className="button button--large button--featured"
            to="/about/"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            6 months free &bull; No credit card required
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
