import React from 'react';
// import { Link } from 'react-router';
import {
  CircleIconColumns,
  ColumnParagraphs,
  CTASection,
  FeaturesColumns,
  Footer,
  PageHeader,
  PageHelmet,
  PlatformsBar,
  ScreenDescriptions,
  TextWithBottomImage,
  TextWithImage
} from '../../components';

const FeaturesPage = () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Features - Syncano Sockets, Data Management, Automations"
        mixpanelTitle="Features"
        description={`Rapidly assemble building blocks for your app without a backend or server. Learn more about what
          you can do with Syncano.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Features"
        textline="Rapidly assemble building blocks for your app without a backend or server."
      />
      <PlatformsBar healine="View our libraries on GitHub" />
      <TextWithImage
        variant="image-right"
        headline="Customize features as Sockets"
        textline={`Sockets are the layer stacked between Syncano’s core and your application. Easily configure,
          combine, and create Sockets for your app. Instantly add new functionality to your applications exactly the
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
              srcSet={`${require('./collaborate-better-with-our-dashboard-small.png')} 1x, ${require('./collaborate-better-with-our-dashboard-small@2x.png')} 2x`}
            />
            <source
              srcSet={`${require('./collaborate-better-with-our-dashboard.png')} 1x, ${require('./collaborate-better-with-our-dashboard@2x.png')} 2x`}
            />
            <img
              className="browser-image"
              src={require('./collaborate-better-with-our-dashboard-small@2x.png')}
              alt="Collaborate better with our Dashboard"
            />
          </picture>
        }
      />
      <ScreenDescriptions headline="Data Management">
        <ScreenDescriptions.Screen
          imageSrc={require('./define-your-classes.png')}
          image2xSrc={require('./define-your-classes@2x.png')}
          imageSmallSrc={require('./define-your-classes-small.png')}
          imageSmall2xSrc={require('./define-your-classes-small@2x.png')}
          headline="Define your Classes"
          text={`Control how you define the structure for each of your Data Objects. Every Data Object you create will
            inherit the properties of its own customized Class.`}
        />
        <ScreenDescriptions.Screen
          variant="image-right"
          imageSrc={require('./customize-class-schemas.png')}
          image2xSrc={require('./customize-class-schemas@2x.png')}
          imageSmallSrc={require('./customize-class-schemas-small.png')}
          imageSmall2xSrc={require('./customize-class-schemas-small@2x.png')}
          headline="Customize Class schemas"
          text={`Create fields with specific types to get a flexible architecture. Our pre-set custom fields include
            string, text, integer, float, Boolean, datetime, file, object, array, and reference.`}
        />
        <ScreenDescriptions.Screen
          imageSrc={require('./create-data-objects.png')}
          image2xSrc={require('./create-data-objects@2x.png')}
          imageSmallSrc={require('./create-data-objects-small.png')}
          imageSmall2xSrc={require('./create-data-objects-small@2x.png')}
          headline="Create Data Objects"
          text={`Store your data as JSON objects that contain key-value pairs that you define. Control what your users
            have access to. Define your own data views on the backend instead of updating every client-side
            application.`}
        />
        <ScreenDescriptions.Screen
          variant="image-right"
          imageSrc={require('./query-away.png')}
          image2xSrc={require('./query-away@2x.png')}
          imageSmallSrc={require('./query-away-small.png')}
          imageSmall2xSrc={require('./query-away-small@2x.png')}
          headline="Query away!"
          text={`Query your data based on built-in or customized fields for each of your objects. Get back the data
            you need with advanced filtering and ordering.`}
        />
      </ScreenDescriptions>
      <ColumnParagraphs
        headline="Server-Side code"
        imageSrc={require('./server-side-code.png')}
        image2xSrc={require('./server-side-code@2x.png')}
        imageSmallSrc={require('./server-side-code-small.png')}
        imageSmall2xSrc={require('./server-side-code-small@2x.png')}
      >
        <ColumnParagraphs.Paragraph
          iconSrc={require('./scripts.svg')}
          headline="Scripts"
          text={`Scripts are snippets of code that allow you to run complex code on Syncano’s servers. We support a wide
            range of environments including Node.js, Python, Swift, Go, PHP, and Ruby.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('./script-endpoint.svg')}
          headline="Script Endpoint"
          text={`Make Scripts public or private, it’s up to you. Send POST or GET requests to your Script and open up
            the possibility of how and where to run it.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('./environmental-variables.svg')}
          headline="Environmental Variables"
          text={`Each Snippet can be set to use environmental variables stored in your configuration settings. You can
            store API keys and frequently used variables in a more permanent way.`}
        />
        <ColumnParagraphs.Paragraph
          iconSrc={require('./integrations.svg')}
          headline="Integrations"
          text={`Connect your app with our constantly growing list of integrations. We’ll help you stay up-to-date with
            new add-ons, keeping your application ahead of the crowd.`}
        />
      </ColumnParagraphs>
      <FeaturesColumns headline="Automations">
        <FeaturesColumns.Column
          iconSrc={require('./real-time-communication.svg')}
          headline="Real-Time Communication"
          text={`Add real-time functionality to your app with Channels. Users can subscribe to Channels and get
            notifications of changes to Data Objects. You can grant users the ability to send custom notification
            messages.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('./schedules.svg')}
          headline="Schedules"
          text={`Execute your Scripts at a desired date and time interval. Choose from CronTabs and seconds as
            scheduling options. We support time zones so you can launch Scripts in around the globe.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('./triggers.svg')}
          headline="Triggers"
          text={`Execute a Server-Side Script when a Data Object inside a selected Class is created, updated, or
            deleted. Each Trigger is customizable to fit your app’s needs.`}
        />
        <FeaturesColumns.Column
          iconSrc={require('./push-notifications.svg')}
          headline="Push Notifications"
          text={`Instantly message your iOS or Android users with timely and relevant content. Use our Dashboard to
            configure and send push notifications with ease.`}
        />
      </FeaturesColumns>
      <CircleIconColumns headline="User authentication">
        <CircleIconColumns.Column
          iconSrc={require('./add-users.svg')}
          headline="Add Users"
          text={`Allow users to register and sign into your app instantly and securely. Customize them with User
            Profiles - add avatars, files, and relevant information.`}
        />
        <CircleIconColumns.Column
          iconSrc={require('./group-users.svg')}
          headline="Group Users"
          text={`Construct different levels of permissions to data stored on Syncano. With groups, you can better
            manage user access controls.`}
        />
        <CircleIconColumns.Column
          iconSrc={require('./social-authentication.svg')}
          headline="Social Authentication"
          text={`Allow your users to sign up with Facebook, Google, Twitter, and Linkedin. We’ll automatically create
            their account in Syncano in the same format as with the traditional login.`}
        />
      </CircleIconColumns>
      {/* <TextWithImage
        variant="image-right"
        theme="gray"
        headline="Scalable and Secure Hosting for Your Websites"
        textline={`Fast website and app hosting made for every developer. You can deploy from the command line,
          or visually manage your files straight from the Dashboard. Publish with confidence and make your app
          rock-solid with our free SSL, versioning, and highly-scalable infrastructure!`}
        image={
          <img
            src={require('./scalable-and-secure-hosting-for-your-websites.svg')}
            alt="Scalable and Secure Hosting for Your Websites"
          />
        }
      >
        <Link
          to="/hosting/"
          className="button"
        >
          More about Hosting
        </Link>
      </TextWithImage> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
