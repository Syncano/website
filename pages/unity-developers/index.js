import React, { PropTypes } from 'react';
import {
  CTASection,
  Footer,
  PageHeader,
  PageHelmet,
  LoggedOutContent,
  LoggedInContent,
  TextWithImage,
  ContentSection,
  CodePreview,
  TwitterSlider
} from '../../components';

const UnityDevelopersPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="The Ultimate Cloud Backend for Unity Developers"
        mixpanelTitle="Unity Developers"
        description={`Create a customize, highly-scalable backend for your games. Cloud real-time data management,
          server-side code, and more - all in one platform.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        iconSrc={require('./the-ultimate-cloud-backend-for-unity-developers.svg')}
        iconAlt="The Ultimate Cloud Backend for Unity Developers"
        headline={<span>The Ultimate Cloud Backend<br className="force" />for Unity Developers</span>}
        textline={`Create a customize, highly-scalable backend for your games. Cloud real-time data management,
          server-side code, and more - all in one platform.`}
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
      <TextWithImage
        variant="image-right"
        theme="gray"
        headline="What is Syncano?"
        textline={<span>Syncano is a development platform that gives you the tools you need as a Unity game developer to
          create a perfect backend, completely custom to your needs.<br /><br />Sync data across every device, integrate
          3rd-party resources, and run complex calculations in the cloud, all without managing the server yourself.
        </span>}
        image={
          <img
            src={require('./what-is-syncano.svg')}
            alt="What is Syncano?"
          />
        }
      />
      <ContentSection headline="Here’s how Syncano helps Unity game developers">
        <p>
          The Syncano platform provides you with an extensive, custom API based on simple building blocks that you can
          mix-and-match to build the perfect backend. Manage your data and files, execute server-side code, and
          integrate your backend services or third-party APIs.
        </p>
        <div className="content-section__content__list">
          <ul>
            <li>No long-term contracts</li>
            <li>Adjust to the plan that fits your needs</li>
            <li>Set soft and hard limits to monitor your usage</li>
            <li>Move to a paid package when you’re ready</li>
            <li>No credit card required to start building apps</li>
            <li>30-day money back guarantee</li>
            <li>All major credit cards accepted through Stripe</li>
          </ul>
        </div>
        <h3 className="txt-center">Create objects in a few lines of code</h3>
        <CodePreview>
          <CodePreview.Item
            title="Objective-C"
            languageClassName="objectivec"
            code={require('./create-objects-in-a-few-lines-of-code.txt')}
          />
        </CodePreview>
      </ContentSection>
      <ContentSection
        theme="gray"
        headline="Integration is easy with the Syncano Unity library"
      >
        <p>
          Integration from Unity to Syncano is seamless with our brand-new Unity library. Import the Unity library
          directly into your project’s assets.
        </p>
        <a
          className="button"
          href="http://docs.syncano.io/docs/unity/"
          target="_blank"
        >
          Download our Unity library
        </a>
      </ContentSection>
      <TextWithImage
        headline="Get the best out of Syncano for your games"
        textline="Fast game development and great resources go hand-in-hand, so we have curated some for you here:"
        image={
          <img
            src={require('./get-the-best-out-of-syncano-for-your-games.svg')}
            alt="Get the best out of Syncano for your games"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="https://www.syncano.io/blog/build-a-multiplatform-quiz-game-with-unity-3d-and-syncano/" target="_blank">Learn to build a multi platform quiz game with Syncano</a></li>
            <li><a href="https://www.syncano.io/blog/how-to-create-a-player-profile-system/" target="_blank">Create and manage a player profiles system</a></li>
            <li><a href="https://www.syncano.io/blog/how-to-create-a-leaderboard-in-your-game-with-a-few-lines-of-code/" target="_blank">Quickly create a real-time in-game leaderboard</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TwitterSlider
        theme="gray"
        headline="What are developers saying?"
        filter="unity"
        arrows={false}
        hideButton={true}
      />
      <CTASection headline="Create your next Unity project with Syncano" />
      <Footer />
    </div>
  );
};

UnityDevelopersPage.contextTypes = {
  modals: PropTypes.object
};

export default UnityDevelopersPage;
