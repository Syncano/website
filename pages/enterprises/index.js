import React from 'react';
import {
  CTASection,
  CustomerSection,
  Footer,
  Link,
  PageHeader,
  PageHelmet,
  TextWithBackground,
  TextWithImage
} from '../../components';

const { redirect_uri } = APP_CONFIG;

const Enterprises = () => (
  <div>
    <PageHelmet
      title="Syncano for Enterprises"
      mixpanelTitle="Enterprises"
      description={`Achieve a competitive advantage by unlocking the potential of thousands of developers across the
        world. Learn more...`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Syncano for Enterprises"
      textline={`Is app development taking too long due to all features and functionalities that are just adding more
        to-dos to the backlog? Achieve a competitive advantage by unlocking the potential of thousands of developers
        across the world.`}
    >
      Get in touch with us
    </PageHeader>
    <TextWithImage
      theme="gray"
      headline="Integrations to help you connect systems"
      textline={`Simplify your stack. Piece together one or multiple features as building blocks for your app. Use
        Syncano Sockets as a data hub and easily connect disparate backend systems.`}
      image={
        <img
          src={require('./integrations-to-help-you-connect-systems.svg')}
          alt="Integrations to help you connect systems"
        />
      }
    />
    <TextWithImage
      variant="image-right"
      headline="Building blocks for faster innovation"
      textline={`Sockets are the layer stacked between Syncano’s core and your application. Easily configure, combine,
        and create Sockets for your app. Instantly add new functionality to your applications exactly the way you
        want.`}
      image={
        <img
          src={require('./customize-individual-features-as-sockets.svg')}
          alt="Customize individual features as Sockets"
        />
      }
    />
    <TextWithImage
      variant="image-left"
      theme="gray"
      image={
        <img
          src={require('./pricing-that-scales-with-your-users.svg')}
          alt="pricing chart"
        />
      }
      headline="Pricing that scales with your users"
      textline={`Apps come in different shapes and sizes. As you grow, you can adjust your plan based on your needs. Pay
        fair overage rates when you see the number of your users skyrocket and exceed the limits of your current plan.`}
    />
    <CustomerSection
      headline="Get inspired"
      textline={`Dashflow is an app build on top of Syncano. It makes it easy to track all of your financial goals on a
        customizable dashboard.`}
      imageSrc={require('./dashflow-track-all-your-money-goals.png')}
      image2xSrc={require('./dashflow-track-all-your-money-goals@2x.png')}
      imageSmallSrc={require('./dashflow-track-all-your-money-goals-small.png')}
      imageSmall2xSrc={require('./dashflow-track-all-your-money-goals-small@2x.png')}
    >
      <Link
        to="/customers/"
        className="button"
      >
        See apps made with Syncano
      </Link>
    </CustomerSection>
    <TextWithBackground
      theme="image1"
      headline="We’ll support you every step of the way"
      textline={`Adam is a great guy and a part of our support team. At Syncano, every team member is here to help you.
        When you have questions, you’ll get timely answers directly from our team members.`}
    />
    <CTASection
      headline="Learn how Syncano can help your Enterprise"
      buttonText="Get in touch with us"
      showButtonDescription={false}
    />
    <Footer />
  </div>
);

export default Enterprises;
