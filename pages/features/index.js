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
  TextWithBottomImage
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Features">
      <div>
        <PageHeader
          headline="Features"
          textline="Rapidly assemble and orchestrate building blocks for your app without a backend or server."
        />
        <TextWithBottomImage
          theme="gray"
          headline="Customize individual features as Sockets"
          textline={`Sockets are the layer stacked between Syncano’s infrastructure and core, and your application.
            Easily configure, combine and create your own Sockets for your app. Instantly add new functionality to your
            applications exactly the way you want. `}
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
          textline={`Visualize your data in our Dashboard instead of building out your own UI. Edit and test your
            scripts, manage all of your apps and users in one place, collaborate with multiple admins, and more - all
            from one place.`}
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
            headline="Define Your Classes"
            text={`Control how you define the templates for each of your data objects. Every data object you create will
              be defined by your own customized class.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-2.jpg')}
            image2xSrc={require('./screen-2@2x.jpg')}
            imageSmallSrc={require('./screen-2-small.jpg')}
            imageSmall2xSrc={require('./screen-2-small@2x.jpg')}
            headline="Customize Class Schemas"
            text={`Create fields with specific types to give you complete flexibility with no loss in complexity. Our
              pre-set custom fields supporting several different data types include string, text, integer, float,
              boolean, datetime, file and reference. Arrays are coming soon!`}
          />
          <ScreenDescriptions.Screen
            imageSrc={require('./screen-3.jpg')}
            image2xSrc={require('./screen-3@2x.jpg')}
            imageSmallSrc={require('./screen-3-small.jpg')}
            imageSmall2xSrc={require('./screen-3-small@2x.jpg')}
            headline="Objects"
            text={`Store your data on Syncano’s relational database as JSON objects that contain key-value pairs that
              you define. Control what your users have access to. Define your own data views on the backend instead of
              updating every client-side application.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-4.jpg')}
            image2xSrc={require('./screen-4@2x.jpg')}
            imageSmallSrc={require('./screen-4-small.jpg')}
            imageSmall2xSrc={require('./screen-4-small@2x.jpg')}
            headline="Query Away!"
            text={`Query your data based on any existing field or customized field for each of your objects. Get back
              the data you need with complex filtering and ordering! `}
          />
        </ScreenDescriptions>
        <ColumnParagraphs headline="Server-side Code">
          <ColumnParagraphs.Paragraph
            iconSrc={require('./snippets.svg')}
            headline="Scripts"
            text={`Scripts are snippets of code that allow you to run complex code on Syncano’s servers. We support a
              wide range of languages including NodeJS, Python, Swift, Golang, PHP or Ruby. Learn about all the ways you
              can run them under Automations.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./script-endpoint.svg')}
            headline="Script Endpoint"
            text={`Each Snippet comes with the ability to enable or disable their public endpoint. Make POST or GET
              requests to your Snippet and open up the possibility of how and where to run your Snippet Script.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./cloud-code-editor.svg')}
            headline="Cloud Code Editor"
            text={`Edit your Snippet Script with our Dashboard. Our code editor allows you to write, run and trace your
              code right inside our Dashboard. Now you can work on your app all in one place.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./environmental-variables.svg')}
            headline="Environmental Variables"
            text={`Each Snippet can be set to environmental variables stored in your configuration settings. Store API
              keys and frequently used variables in a more permanent way!`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./integrate.svg')}
            headline="Integrate"
            text={`Connect your app with our constantly updating list of integrations. We’ll help you stay up-to-date
              with new integrations, keeping your app up-to-speed with the rest of the world.`}
          />
        </ColumnParagraphs>
        <FeaturesColumns headline="Automations">
          <FeaturesColumns.Column
            iconSrc={require('./realtime-communication.svg')}
            headline="Realtime Communication"
            text={`Add realtime functionality to your app with Channels. Users can subscribe to Channels to get
              notifications of changes that happen to Objects connected to those Channels. Grant your users the ability
              to send custom notification messages.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./set-schedules.svg')}
            headline="Set Schedules"
            text={`Execute your Scripts at a desired date and/or time interval by setting the desired time interval to
              interval_sec or crontab. We even support timezones so you can launch different schedules at different
              times!`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./create-triggers.svg')}
            headline="Create Triggers"
            text={`Execute a Server-Side Script when a Data Object inside a selected Class is created, updated or
              deleted. Each Trigger is customizable to fit your app’s needs.`}
          />
          <FeaturesColumns.Column
            iconSrc={require('./push-notifications.svg')}
            headline="Push Notifications"
            text={`Instantly message your Android or iPhone users with timely and relevant content instead of
              programming it yourself.`}
          />
        </FeaturesColumns>
        <CircleIconColumns headline="User Authentication">
          <CircleIconColumns.Column
            iconSrc={require('./create-custom-users.svg')}
            headline="Create Custom Users"
            text={`Allow users to register and sign into your app instantly and securely. Customize your users with User
              Profiles - define custom fields to segment your users with data Classes.`}
          />
          <CircleIconColumns.Column
            iconSrc={require('./adding-users-with-groups.svg')}
            headline="Adding Users with Groups"
            text={`Construct different levels of permission to data stored on Syncano. With groups, you control the data
              that your users have control over.`}
          />
          <CircleIconColumns.Column
            iconSrc={require('./instant-social-authentication.svg')}
            headline="Instant Social Authentication"
            text={`Allow your users to sign up with Facebook, Google, Twitter and Linkedin, and we’ll automatically
              create their account in Syncano in the same format as a traditional username/password login`}
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
