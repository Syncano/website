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
  ParagraphsWithIconList,
  TextWithImage
} from '../../components';

const FullStackPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Instant Backend Solution for React Developers - Syncano"
        mixpanelTitle="React Developers"
        description={`Build your React application backend in minutes. Cloud database management, server-side functions,
          user management, and more - all in one place.`}
        ogImageSrc={`${redirect_uri}${require('file-loader!./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('file-loader!./twitter-image.png')}`}
      />
      <PageHeader
        iconSrc={require('./the-instant-backend-solution-for-react-developers.svg')}
        iconAlt="React logo"
        headline={<span>The Instant Backend Solution<br className="force" />for React Developers</span>}
        textline={`Build your React application backend in minutes. Cloud database management, server-side functions,
          user management, and more - all in one place.`}
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
        headline="Why choose Syncano for your React app"
        textline={<span>Syncano is a serverless platform that gives you the tools you need as a React developer to
          create a perfect backend ecosystem.<br /><br />Watch as the backend development process transforms from months
          of work to just a few days of development by only you.</span>}
        image={
          <img
            src={require('./why-choose-syncano-for-your-react-app.svg')}
            alt="Why choose Syncano for your React app"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><strong>Speed</strong> - run complex code in the cloud and save resources on the client-side</li>
            <li><strong>Data</strong> - Sync all your data in one place, and easily manage it with your choice of local Store</li>
            <li><strong>Users</strong> - Create and manage users in minutes with minimal setup time</li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        headline="Resources to get you started fast"
        textline={`Fast development and great resources go hand-in-hand, so we have curated some for you here!`}
        image={
          <img
            src={require('./resources-to-get-you-started-fast.svg')}
            alt="Resources to get you started fast"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>New to React? Here’s a <a href="https://www.syncano.io/blog/getting-started-reactjs-tutorial/" target="_blank">Quick start guide</a></li>
            <li>Try out building a <a href="https://www.syncano.io/blog/build-pokemon-radar-app/" target="_blank">Pokemon Go Radar</a></li>
            <li>Take a look at the <a href="http://docs.syncano.io/docs/javascript" target="_blank">JavaScript Library</a></li>
          </ul>
        </div>
      </TextWithImage>
      <TextWithImage
        variant="image-right"
        theme="gray"
        headline="Store data any way you want"
        textline={<span>Syncano works with a myriad of React libraries and packages. Need to see it to believe it? Our
          entire Dashboard is built in React! We
          have <a href="https://www.syncano.io/blog/open-source-dashboard/" target="_blank">opened sourced all of the
          code</a>.<br /><br />Syncano works great with:</span>}
        image={
          <img
            src={require('./store-data-any-way-you-want.svg')}
            alt="Store data any way you want"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>Redux</li>
            <li>MobX</li>
            <li>GraphQL</li>
            <li>And more!</li>
          </ul>
        </div>
      </TextWithImage>
      <ContentSection
        headline="How can Syncano help?"
        align="center"
      >
        <ParagraphsWithIconList>
          <ParagraphsWithIconList.Item iconSrc={require('./data-management.svg')}>
            <p>
              <strong>Data Management</strong> - Not only is data management with Syncano made easy, but querying for
              the exact data you want is just as simple! With Data Endpoints, your data is securely at your fingertips.
            </p>
          </ParagraphsWithIconList.Item>
          <ParagraphsWithIconList.Item iconSrc={require('./endpoints-for-your-code.svg')}>
            <p>
              <strong>Endpoints for your code</strong> - Running your code in the cloud is as beneficial as it sounds -
              less resources! On top of that, you can add your own private or public endpoints to send GET, POST, or
              PATCH requests to.
            </p>
          </ParagraphsWithIconList.Item>
          <ParagraphsWithIconList.Item iconSrc={require('./automation-is-key.svg')}>
            <p>
              <strong>Automation is key</strong> - There are times when you need to schedule code to run, or trigger it
              based on data changes. We made this possible with Schedule and Trigger functionality. Work smarter, not
              harder.
            </p>
          </ParagraphsWithIconList.Item>
          <ParagraphsWithIconList.Item iconSrc={require('./user-management.svg')}>
            <p>
              <strong>User Management</strong> - Create and manage users all from the platform, including social
              integration. Not only can you skip the strenuous user database setup, but your users will be well
              integrated!
            </p>
          </ParagraphsWithIconList.Item>
        </ParagraphsWithIconList>
        <Link
          to="/features/"
          className="button"
        >
          View all features
        </Link>
      </ContentSection>
      <CTASection headline="Build your React app backend with Syncano" />
      <Footer />
    </div>
  );
};

FullStackPage.contextTypes = {
  modals: PropTypes.object
};

export default FullStackPage;
