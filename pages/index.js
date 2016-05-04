import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, Hero, Platforms, Testimonials, TextColumns, TextWithBackground, TextWithBottomImage, TextWithImage } from '../components';

export default () => (
  <DocumentTitle title="Syncano">
    <div>
      <Hero
        variant="home"
        headline="Rethink how you build apps"
        textline="A complete platform to orchestrate your app’s ecosystem."
      >
        <Link
          to="/about/"
          className="button button--large button--featured"
        >
          Get Started for Free
        </Link>
      </Hero>
      <Platforms />
      <TextWithImage
        variant="image-left"
        theme="gray"
        image={
          <img
            src={require('../images/illustrations/focus-on-your-app.svg')}
            alt="sample-illustration"
          />
        }
        headline="Focus on your app"
        textline="Forget about managing infrastructure and redundant code. Spend your time writing code specific for your app. Instantly scale to support millions of users without learning the nuts and bolts of handling servers."
      >
        <Link
          to="/about/"
          className="button"
        >
          View All Features
        </Link>
      </TextWithImage>
      <TextWithImage
        variant="image-right"
        theme="purple"
        image={
          <img
            src={require('../images/illustrations/customize-your-apis-and-features.svg')}
            alt="sample-illustration"
          />
        }
        headline="Customize your APIs and features"
        textline="Every app’s needs are different. With Sockets, we give you the flexibility to combine and configure the building blocks your application needs. The backend work is mostly done - you’ll be building stronger and better apps, faster!"
      >
        <Link
          to="/about/"
          className="button"
        >
          More About Sockets
        </Link>
      </TextWithImage>
      <TextColumns>
        <TextColumns.Column
          icon={
            <img
              src={require('../images/icons/stack.svg')}
              alt="stack"
            />
          }
          headline="Simplify your stack"
          text="Stop writing code to connect disparate backend systems. Integrate anything, all from one place. Provide one more line of text here."
        />
        <TextColumns.Column
          icon={
            <img
              src={require('../images/icons/file.svg')}
              alt="file"
            />
          }
          headline="Control your data schema"
          text="Create sophisticated data relations and apply multiple filters. Easily manage your data from our user-friendly dashboard."
        />
        <TextColumns.Column
          icon={
            <img
              src={require('../images/icons/clock.svg')}
              alt="clock"
            />
          }
          headline="Code and prototype faster"
          text="Write your own code snippets and prototype them in the browser with built-in traces. Get your MVP to market and save development costs."
        />
      </TextColumns>
      <TextWithImage
        variant="image-left"
        image={
          <img
            src={require('../images/illustrations/run-server-side-logic-in-the-cloud.svg')}
            alt="sample-illustration"
          />
        }
        headline="Run server-side logic in the cloud"
        textline="With Scripts, run your code in response to events, updates to data, in-app activity or by a particular schedule. Use multiple languages, integrate with anything."
      >
        <Link
          to="/about/"
          className="button"
        >
          More About Scripts
        </Link>
      </TextWithImage>
      <Testimonials />
      <TextWithBottomImage
        headline="Get answers from our developers"
        textline="Our engineers specialize in the tricky and technical investigations of our platform. When you have questions, you’ll get timely answers from our team."
        image={
          <img
            src={require('../images/robot.svg')}
            alt="robot"
          />
        }
      >
        <Link
          to="/about/"
          className="button"
        >
          Get Support
        </Link>
      </TextWithBottomImage>
      <TextWithBackground
        theme="image1"
        headline="We’ll support you every step of the way"
        textline="Mariusz is a great guy and a part of our support team. At Syncano, every team member is here to help you. When you have questions, you’ll get timely answers directly from our team members."
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
          (6 months free • No credit card required)
        </p>
      </CTASection>
      <Footer />
    </div>
  </DocumentTitle>
);
