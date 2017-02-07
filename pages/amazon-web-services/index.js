import React from 'react';
import {
  CTASection,
  Footer,
  PageHeader,
  PageHelmet,
  TextWithBottomImage,
  TextWithImage
} from '../../components';

const AmazonWebServicesPage = () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano - The Faster Alternative To AWS"
        mixpanelTitle="AWS"
        description={`Syncano is the perfect backend solution for every developer. All the tools you need out of the box
          with no complex set up. Learn more...`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        iconSrc={require('./syncano-the-faster-alternative-to-aws.svg')}
        iconAlt="Syncano as faster alternative to AWS"
        headline="Syncano - The faster alternative to AWS"
        textline={`Syncano is the perfect backend solution for every developer. All the tools you need out of the box
          with no complex set up.`}
      />
      <TextWithImage
        theme="gray"
        headline="Syncano is the ultimate serverless platform"
        textline={<span>Syncano is a serverless development platform built for developers, by developers, giving you the
          best opportunity to create the perfect backend ecosystem for your application.<br /><br />Supporting both web
          and mobile, Syncano delivers unrivaled flexibility. Manage your data, authenticate users, and run your custom
          server-side code - all from the same platform.</span>}
        image={
          <img
            src={require('./syncano-is-the-ultimate-serverless-platform.svg')}
            alt="Syncano logo"
          />
        }
      />
      <TextWithImage
        variant="image-right"
        headline="Syncano gives you cloud server-side code out-of-the-box"
        textline={<span>Are you spending too much time configuring your AWS Lambda containers? With Syncano, you can
          start developing right away! With support for multiple programming languages, building your server-side code
          in the cloud is even easier than local development.<br /><br />Each Script can have public or private
          endpoints, giving you complete control over the security of your code. Run complex code in the cloud right
          from your client-side without a single server on your end.</span>}
        image={
          <img
            src={require('./syncano-gives-you-cloud-server-side-code-out-of-the-box.svg')}
            alt="server-side code out-of-the-box"
          />
        }
      />
      <TextWithImage
        theme="gray"
        headline="Syncano gives you a pre-built database with complex querying"
        textline={<span>Managing your applications data is made simple with the Syncano platform. Our pre-built Postgres
          database gives you the jumpstart you need to develop quickly, without hindering your need for complex
          solutions.<br /><br />On top of being able to start out of the box, the Syncano platform has tons of querying
          options available including relations and references, array filtering, multi-level querying, and much more!
          Not to mention you can use these queries as well as create, update, and delete your data and rows right from
          the customizable API.</span>}
        image={
          <img
            src={require('./syncano-gives-you-a-pre-built-database-with-complex-querying.svg')}
            alt="pre-built database with complex querying"
          />
        }
      />
      <TextWithImage
        headline="Syncano provides secure user authentication and social login"
        variant="image-right"
        textline={<span>Building your app is important, but having users is crucial! With Syncano, you can immediately
          and securely onboard your users, with either social logins like Facebook and Twitter or standard signup
          methods.<br /><br />Seamlessly authenticate your users with your application, and establish the proper
          permissions for those users from your client-side code or the Syncano platform.</span>}
        image={
          <img
            src={require('./syncano-provides-secure-user-authentication-and-social-login.svg')}
            alt="secure user authentication and social login"
          />
        }
      />
      <TextWithImage
        theme="gray"
        headline="Syncano gives you simple 5-minute hosting with free SSL"
        textline={<span>Set up hosting for your site in just 5 minutes with the Syncano platform. With AWS, you have the
          tedious task of setting up S3, resulting in confusion and wasted time. With Syncano, the hosting is made
          simple with a guided command line tool, resulting in a quick and easy setup.<br /><br />With Syncano’s
          highly-scalable hosting, you’re given free SSL for your hosting, providing you with the security you need to
          keep up with the modern web - at no extra cost.</span>}
        image={
          <img
            src={require('./syncano-gives-you-simple-5-minute-hosting-with-free-ssl.svg')}
            alt="simple 5-minute hosting with free SSL"
          />
        }
      />
      <TextWithBottomImage
        headline="Schedules, Triggers and more to help you automate the backend"
        textline={`Unlike AWS, Syncano provides you with all the tools, plus more out of the box. On top of all of the
          features mentioned above, Syncano also gives you the following features not directly offered by AWS:`}
        image={
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={require('./schedules-triggers-and-more-to-help-you-automate-the-backend-medium.svg')}
            />
            <source srcSet={require('./schedules-triggers-and-more-to-help-you-automate-the-backend.svg')} />
            <img
              src={require('./schedules-triggers-and-more-to-help-you-automate-the-backend.svg')}
              alt="Schedules, Triggers and more to help you automate the backend"
            />
          </picture>
        }
      >
        <div className="text-with-bottom-image__text__list content-section__content__list--center">
          <ul>
            <li><strong>Trigger</strong> server-side code based on data manipulation</li>
            <li><strong>Schedule</strong> code to run on at a custom time</li>
            <li>Interact with your data in <strong>real time</strong></li>
            <li>Send and manage <strong>push notifications</strong> to iOS and Android devices</li>
            <li>Multiple <strong>client-side libraries</strong> including JavaScript, Python, React, Angular, and more!</li>
            <li><strong>Easy backup & restore</strong> functionality</li>
          </ul>
        </div>
      </TextWithBottomImage>
      <CTASection headline="Build your app backend with Syncano" />
      <Footer />
    </div>
  );
};

export default AmazonWebServicesPage;
