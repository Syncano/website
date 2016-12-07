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

const Startups = () => (
  <div>
    <PageHelmet
      title="Syncano for Startups"
      mixpanelTitle="Startups"
      description={`Stop wasting time reinventing the wheel and get cracking on the real issues at hand. Make the app
        your users will love. Learn more...`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Syncano for Startups"
      textline={`Is your groundbreaking new app haltered by the tedious work on backend stuff? Stop wasting time
        reinventing the wheel and get cracking on the real issues at hand. Make the app your users will love.`}
    >
      <a
        className="button button--large button--featured"
        href="https://pipedrivewebforms.com/form/c9950aad5f4c79f9ca4b6dc0cffe15c31317049"
        target="_blank"
      >
        Get in touch with us
      </a>
    </PageHeader>
    <TextWithImage
      theme="gray"
      headline="Integrations for more opportunities"
      textline={`Simplify your stack. Piece together one or multiple features as building blocks for your app. Use
        Syncano Sockets as a data hub and easily connect disparate backend systems.`}
      image={
        <img
          src={require('./integrations-for-more-opportunities.svg')}
          alt="Integrations for more opportunities"
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
      headline="Learn how Syncano can accelerate your Startup"
      buttonText="Get in touch with us"
      showButtonDescription={false}
    />
    <Footer />
  </div>
);

export default Startups;
