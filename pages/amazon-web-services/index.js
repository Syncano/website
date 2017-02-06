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
        title="Syncano - The faster alternative to AWS"
        mixpanelTitle="Syncano - The faster alternative to AWS"
        description={'Syncano is the perfect backend solution for every developer. All the tools you need out of the box with no complex set up.'}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        iconSrc={require('./syncano_icon_hex.svg')}
        iconAlt="Syncano vs AWS"
        headline={<span>Syncano - The faster alternative to AWS</span>}
        textline={'Syncano is the perfect backend solution for every developer. All the tools you need out of the box with no complex set up.'}
      />
      <TextWithImage
        align="left"
        theme="gray"
        headline="Syncano is the ultimate serverless platform"
        textline={
          <div>
            <p>
              Syncano is a serverless development platform built for developers, by developers, giving you the best opportunity to create the perfect backend ecosystem for your application.
            </p>
            <p>
              Supporting both web and mobile, Syncano delivers unrivaled flexibility. Manage your data, authenticate users, and run your custom server-side code - all from the same platform.
            </p>
          </div>
        }
        image={
          <img
            src={require('./syncano-symbol.svg')}
            alt="Syncano"
          />
        }
      />
      <TextWithImage
        variant="image-right"
        headline="Syncano gives you cloud server-side code out-of-the-box"
        textline={
          <div>
            <p>
              Are you spending too much time configuring your AWS Lambda containers? With Syncano, you can start developing right away! With support for multiple programming languages, building your server-side code in the cloud is even easier than local development.
            </p>
            <p>
              Each Script can have public or private endpoints, giving you complete control over the security of your code. Run complex code in the cloud right from your client-side without a single server on your end.
            </p>
          </div>
        }
        image={
          <div>
            <img
              src={require('./cloud-coding-.svg')}
              alt="Cloud coding"
            />
            <img
              src={require('./opened-packaged.svg')}
              alt="Opened packaged"
            />
          </div>
        }
      />
      <TextWithImage
        theme="gray"
        headline="Syncano gives you a pre-built database with complex querying"
        textline={
          <div>
            <p>
               Managing your applications data is made simple with the Syncano platform. Our pre-built Postgres database gives you the jumpstart you need to develop quickly, without hindering your need for complex solutions.
            </p>
            <p>
              On top of being able to start out of the box, the Syncano platform has tons of querying options available including relations and references, array filtering, multi-level querying, and much more! Not to mention you can use these queries as well as create, update, and delete your data and rows right from the customizable API.
            </p>
          </div>
        }
        image={
          <img
            src={require('./server.svg')}
            alt="Server"
          />
        }
      />
      <TextWithImage
        headline="Syncano provides secure user authentication and social login"
        variant="image-right"
        textline={
          <div>
            <p>
              Building your app is important, but having users is crucial! With Syncano, you can immediately and securely onboard your users, with either social logins like Facebook and Twitter or standard signup methods.
            </p>
            <p>
              Seamlessly authenticate your users with your application, and establish the proper permissions for those users from your client-side code or the Syncano platform.
            </p>
          </div>
        }
        image={
          <div>
            <img
              src={require('./community-manager.svg')}
              alt="Community Icon"
            />
            <img
              src={require('./locked-padlock-outline.svg')}
              alt="Locked Icon"
            />
          </div>
        }
      />
      <TextWithImage
        headline="Syncano gives you simple 5-minute hosting with free SSL"
        textline={
          <div>
            <p>
              Set up hosting for your site in just 5 minutes with the Syncano platform. With AWS, you have the tedious task of setting up S3, resulting in confusion and wasted time. With Syncano, the hosting is made simple with a guided command line tool, resulting in a quick and easy setup.
            </p>
            <p>
              With Syncano’s highly-scalable hosting, you’re given free SSL for your hosting, providing you with the security you need to keep up with the modern web - at no extra cost.
            </p>
          </div>
        }
        image={
          <img
            src={require('./hosting-ssl.svg')}
            size={250}
            alt="Hosting SSL"
          />
        }
      />
      <TextWithBottomImage
        theme="gray"headline="Schedules, Triggers and more to help you automate the backend"
        textline={'Unlike AWS, Syncano provides you with all the tools, plus more out of the box. On top of all of the features mentioned above, Syncano also gives you the following features not directly offered by AWS:'}
        image={
          <div className="flex-row">
            <img
              src={require('./triggers.svg')}
              alt="Triggers"
            />
            <img
              src={require('./schedules.svg')}
              alt="Schedules"
            />
            <img
              src={require('./real-time-communication.svg')}
              alt="Real-time Communication"
            />
            <img
              src={require('./push-notifications.svg')}
              alt="Push Notification"
            />
            <img
              src={require('./push-notifications.svg')}
              alt="Backups"
            />
          </div>
        }
      >
        <div className="text-with-bottom-image__text__list">
          <ul>
            <li>
              <strong>Trigger</strong> server-side code based on data manipulation
            </li>
            <li>
              <strong>Schedule</strong> code to run on at a custom time
            </li>
            <li>
              Interact with your data in <strong>real time</strong>
            </li>
            <li>
              Send and manage <strong>push notifications</strong> to iOS and Android devices
            </li>
            <li>
              Multiple <strong>client-side libraries</strong> including JavaScript, Python, React, Angular, and more!
            </li>
            <li>
              <strong>Easy backup & restore</strong> functionality
            </li>
          </ul>
        </div>
      </TextWithBottomImage>
      <CTASection
        headline="Build your app backend with Syncano"
      />
      <Footer />
    </div>
  );
};

export default AmazonWebServicesPage;
