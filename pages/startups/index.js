import React from 'react';
import {
  CustomerSection,
  CTASection,
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
      title="Plans & Pricing at Syncano"
      mixpanelTitle="Pricing"
      description={`Get started with Syncano for free and scale to millions of users. Upgrade, downgrade or cancel at
          any time. 30 day money back guarantee. Read more...`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Syncano for Startups"
      textline="Rapidly assemble building blocks for your app without a backend or server."
    />
    <TextWithImage
      headline="Assemble your backend with building blocks"
      textline={`Simplify your stack. Piece together one or multiple features as building blocks for your app. Use
          Syncano Sockets as a data hub and easily connect disparate backend systems.`}
      image={
        <img
          src={require('./assemble-your-backend-with-building-blocks.svg')}
          alt="Assemble yo ur backend with building blocks"
        />
      }
    />
    <TextWithImage
      variant="image-right"
      headline="Create and request Sockets"
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
      textline={`Apps come in different shapes and sizes. As you grow, you can adjust your plan based on your needs.
          Pay fair overage rates when you see the number of your users skyrocket and exceed the limits of your current
          plan.`}
    />
    <CustomerSection
      headline="Apps made on Syncano"
      textline={`Stay on top of your budget, organize your bills, get reminders, and achieve your goals for savings,
          budget, debt, and net worth. DashFlow makes it easy to track all of your financial goals on a customizable
          dashboard.`}
      imageSrc={require('./dashflow-track-all-your-money-goals.png')}
      image2xSrc={require('./dashflow-track-all-your-money-goals@2x.png')}
      imageSmallSrc={require('./dashflow-track-all-your-money-goals-small.png')}
      imageSmall2xSrc={require('./dashflow-track-all-your-money-goals-small@2x.png')}
      url="http://dashflow.co/"
      buttonText="View apps made with syncano"
    />
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
);

export default Enterprises;