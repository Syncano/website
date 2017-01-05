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

const FullStackPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano for Full-Stack Developers"
        mixpanelTitle="Full-Stack Developers"
        description={`Build your backend in minutes and save yourself the gray hairs. Leave server management to us!
          Learn more...`}
        ogImageSrc={`${redirect_uri}${require('file-loader!./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('file-loader!./twitter-image.png')}`}
      />
      <PageHeader
        headline="Syncano for Full-Stack Developers"
        textline={`Increase productivity and scale without managing servers. Build your backend in minutes and save
          yourself the gray hairs. Leave server management to us!`}
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
        healine="View our libraries on GitHub"
        variant="full-stack"
      />
      <TextWithImage
        headline="Backend Services for Full Stack Developers"
        textline={<span>Whether you are developing a full-scale web app, or building your own API to be used across
          multiple applications, Syncano provides you with the tools you need to build and launch these applications in
          half the time.<br /><br />We support many of the most popular web programming languages. Our Libraries and
          SDKs make integration into your current front-end code fast and easy, and allow you to have full control over
          your data.</span>}
        image={
          <img
            src={require('./backend-services-for-full-stack-developers.svg')}
            alt="Backend Services for Full Stack Developers"
          />
        }
      />
      <TextWithImage
        variant="image-right"
        theme="gray"
        headline="Library Quick Starts"
        textline={`Everything in the Syncano platform is available via a REST API endpoint, but to make development in
          client-side code even easier we have created libraries and SDKs. With these libraries, you can quickly
          integrate user management, data management, Syncano-side Script endpoints, and so much more!`}
        image={
          <img
            src={require('./library-quick-starts.svg')}
            alt="Library Quick Starts"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="http://docs.syncano.io/docs/javascript/" target="_blank">JavaScript Library Quick Start Guide</a></li>
            <li><a href="http://docs.syncano.io/docs/python/" target="_blank">Python Library Quick Start Guide</a></li>
            <li><a href="http://docs.syncano.io/docs/ng-syncano/" target="_blank">AngularJS Library Quick Start Guide</a></li>
            <li><a href="http://docs.syncano.io/docs/ember-syncano/" target="_blank">EmberJS Library Quick Start Guide</a></li>
            <li><a href="http://docs.syncano.io/docs/ruby/" target="_blank">Ruby Library Quick Start Guide</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        theme="cyan"
        headline="Improve Your Skills with Tutorials"
        textline={`Syncano is great for building amazing and complex applications that no one else has made before. But
          in order to learn the system, you might want to start by looking at how efficiently you can build something
          when the concept is already made:`}
        image={
          <img
            src={require('./improve-your-skills-with-tutorials.svg')}
            alt="Improve Your Skills with Tutorials"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="https://www.syncano.io/blog/build-a-hacker-news-clone-with-syncano/" target="_blank">How to Build a Hacker News Clone</a></li>
            <li><a href="https://www.syncano.io/blog/build-pokemon-radar-app/" target="_blank">Build a Pokémon Radar App in React with Syncano</a></li>
            <li><a href="https://www.syncano.io/blog/build-a-multiplatform-quiz-game-with-unity-3d-and-syncano/" target="_blank">Build a Multiplatform Quiz Game with Unity 3D and Syncano</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        variant="image-right"
        theme="gray"
        headline="Learn as you go with our Documentation"
        textline={`There are endless possibilities with the Syncano platform, but with our documentation you can get
          started quickly. Here are some essential reads for full-stack developers:`}
        image={
          <img
            src={require('./learn-as-you-go-with-our-documentation.svg')}
            alt="Learn as you go with our Documentation"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="http://docs.syncano.io/docs/quick-start-tutorial/" target="_blank">Jump right in with our quick start guide</a></li>
            <li><a href="http://docs.syncano.io/docs/snippets-scripts/" target="_blank">Run your servers-side code as endpoints on Syncano with Scripts</a></li>
            <li><a href="http://docs.syncano.io/docs/endpoints-data/" target="_blank">Manage data your way with Data Endpoints</a></li>
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

FullStackPage.contextTypes = {
  modals: PropTypes.object
};

export default FullStackPage;
