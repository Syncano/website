import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  ContentSection,
  CTASection,
  Footer,
  LoggedInContent,
  LoggedOutContent,
  PageHeader,
  PageHelmet,
  PlatformsBar,
  SlackPromo,
  TextWithImage
} from '../../components';

const MobileDevelopersPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano for Mobile Developers"
        mixpanelTitle="Mobile Developers"
        description={`Increase your productivity and focus on user experience. Build powerful backends for your apps in
          half the time and scale without managing servers.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Syncano for Mobile Developers"
        textline={`Increase your productivity and focus on user experience. Build powerful backends for your apps in
          half the time and scale without managing servers.`}
      >
        <LoggedOutContent>
          <span
            className="button button--large button--featured"
            onClick={modals.signUp.open}
          >
            Get Started for Free
          </span>
        </LoggedOutContent>
        <LoggedInContent>
          <a
            className="button button--large button--featured"
            href={APP_CONFIG.dashboardUrl}
          >
            Go to Dashboard
          </a>
        </LoggedInContent>
        <p className="page-header__button-description">
          30 days free &bull; No credit card required
        </p>
      </PageHeader>
      <PlatformsBar
        healine="View our mobile libraries on GitHub"
        variant="mobile"
        size="large"
      />
      <TextWithImage
        theme="cyan"
        headline="Backend Services for iOS and Android Developers"
        textline={`Syncano is made with functions suited for you as a mobile developer. We support iOS as well as
          Android, and you can work with all the newest frameworks, like React Native.`}
        image={
          <img
            src={require('./backend-services-for-ios-and-android-developers.svg')}
            alt="Backend Services for iOS and Android Developers"
          />
        }
      />
      <TextWithImage
        variant="image-right"
        headline="Library Quick Starts"
        textline={`When you are building a mobile app, it is essential that you can access rich libraries. Here are the
          most popular ones:`}
        image={
          <img
            src={require('./library-quick-starts.svg')}
            alt="Library Quick Starts"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="http://docs.syncano.io/docs/ios/" target="_blank">iOS SDK Quick Start Guide</a></li>
            <li><a href="http://docs.syncano.io/docs/android/" target="_blank">Android SDK Quick Start Guide</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        theme="purple"
        headline="Improve Your Skills with Tutorials"
        textline={`Syncano is great for building new apps that no one else has made before. But, to jump right in, you
          may want to start by looking at how efficiently you can build these everyday apps:`}
        image={
          <img
            src={require('./improve-your-skills-with-tutorials.svg')}
            alt="Improve Your Skills with Tutorials"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="https://www.syncano.io/blog/create-ios-chat-app-part1/" target="_blank">Create an iOS chat app</a></li>
            <li><a href="https://www.syncano.io/blog/build-pokemon-radar-app/" target="_blank">Build a Pokemon Radar app</a></li>
            <li><a href="https://www.syncano.io/blog/ios-photo-app-part-1/" target="_blank">Build an iOS photo app</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        variant="image-right"
        headline="Learn as you go with our Documentation"
        textline={`Want to know all the details? Good documentation is the key to good app building practices. Here are
          some must-reads for mobile developers:`}
        image={
          <img
            src={require('./learn-as-you-go-with-our-documentation.svg')}
            alt="Learn as you go with our Documentation"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="http://docs.syncano.io/docs/android-push-notifications-app/" target="_blank">Using Android GCM Push Notifications</a></li>
            <li><a href="http://docs.syncano.io/docs/ios-push-notifications-app/" target="_blank">Using iOS push notifications</a></li>
          </ul>
        </div>
      </TextWithImage>
      <ContentSection
        align="center"
        headline="Help and Support"
      >
        <p>
          Make sure you see the <a href="http://docs.syncano.io/docs/faq/" target="_blank">FAQ</a> to get answers to
          your questions. And keep an eye out for our latest articles on
          the <a href="https://www.syncano.io/blog/" target="_blank">blog</a> - we strive to deliver the best content
          for mobile developers.
        </p>
        <Link
          to="/help/"
          className="button"
        >
          Visit our Help Page
        </Link>
        <SlackPromo />
      </ContentSection>
      <CTASection headline="Rethink how you build apps" />
      <Footer />
    </div>
  );
};

MobileDevelopersPage.contextTypes = {
  modals: PropTypes.object
};

export default MobileDevelopersPage;
