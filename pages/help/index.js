import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import {
  CTASection,
  Footer,
  StatusPageHeader,
  SocialProfiles,
  TextPanels,
  TextWithImage
} from '../../components';

export default ({ location }) => {
  const { pathname } = location;
  const title = 'Help & Status | Syncano';
  const description = `Learn the basics of how to get up and running on Syncano. Get answers to your questions. Join us
    on Slack, read tutorials or simply fork our open source code.`;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: `${description}`
          },
          {
            name: 'mixpanelTitle',
            content: 'Help & Status'
          },
          {
            property: 'og:title',
            content: `${title}`
          },
          {
            property: 'og:url',
            content: `http://www.syncano.io${pathname}`
          },
          {
            name: 'twitter:title',
            content: `${title}`
          },
          {
            name: 'twitter:description',
            content: `${description}`
          }
        ]}
      />
      <StatusPageHeader />
      <TextWithImage
        variant="image-right"
        theme="gray"
        image={
          <img
            src={require('./get-started-with-syncano.svg')}
            alt="Get started with Syncano"
          />
        }
        headline="Get started with Syncano"
        textline={`Learn the basic steps of how to get up and running on Syncano. Get answers to your questions. Join
          us on Slack, read tutorials, or simply fork our open source code.`}
      >
        <a
          className="button"
          href="http://docs.syncano.io/docs/getting-started-with-syncano/"
          target="_blank"
        >
          Learn The Basics
        </a>
      </TextWithImage>
      <TextPanels>
        <TextPanels.Panel
          theme="purple"
          headline="Libraries quickstarts"
        >
          <div className="text-panels__panel__list">
            <ul>
              <li><a href="http://docs.syncano.io/docs/javascript/" target="_blank">JavaScript</a></li>
              <li><a href="http://docs.syncano.io/docs/ios/" target="_blank">iOS</a></li>
              <li><a href="http://docs.syncano.io/docs/android/" target="_blank">Android</a></li>
              <li><a href="http://docs.syncano.io/docs/python/" target="_blank">Python</a></li>
              <li><a href="http://docs.syncano.io/docs/ng-syncano/" target="_blank">AngularJS</a></li>
              <li><a href="http://docs.syncano.io/docs/ruby/" target="_blank">Ruby</a></li>
              <li><a href="http://docs.syncano.io/docs/ember-syncano/" target="_blank">Ember.js</a></li>
              <li><a href="http://docs.syncano.io/docs/arduino/" target="_blank">Arduino</a></li>
            </ul>
          </div>
          <a
            className="button"
            href="http://docs.syncano.io/docs/syncano-libraries/"
            target="_blank"
          >
            Libraries Overview
          </a>
        </TextPanels.Panel>
        <TextPanels.Panel
          theme="azure"
          headline="Popular tutorials"
        >
          <div className="text-panels__panel__list">
            <ul>
              <li><a href="https://www.syncano.io/blog/create-ios-chat-app-part1/" target="_blank">Create iOS chat app</a></li>
              <li><a href="https://www.syncano.io/blog/ember-syncano-addon/" target="_blank">Build an Ember Todo app</a></li>
              <li><a href="https://www.syncano.io/blog/sendgrid-integration/" target="_blank">Add SendGrid integration</a></li>
              <li><a href="http://docs.syncano.io/docs/weather-app-js/" target="_blank">Make a JavaScript weather app</a></li>
              <li><a href="https://www.syncano.io/blog/intro-iot-with-syncano/" target="_blank">Build an Arduino weather station</a></li>
              <li><a href="https://www.syncano.io/blog/ngsyncano-series-a-simple-list/" target="_blank">Build a list with Angular</a></li>
              <li><a href="https://www.syncano.io/blog/craigslist-scraper-solution/" target="_blank">Learn how to scrape Craiglist</a></li>
              <li><a href="http://docs.syncano.io/docs/twitter-social-authentication-js/" target="_blank">Implement Twitter authentication</a></li>
            </ul>
          </div>
          <a
            className="button"
            href="https://www.syncano.io/blog/tag/tutorials/"
            target="_blank"
          >
            View All Tutorials
          </a>
        </TextPanels.Panel>
        <TextPanels.Panel
          theme="silver"
          headline="Most-read docs"
        >
          <div className="text-panels__panel__list">
            <ul>
              <li><a href="http://docs.syncano.io/docs/data-objects/" target="_blank">Data Objects</a></li>
              <li><a href="http://docs.syncano.io/docs/user-management/" target="_blank">User management</a></li>
              <li><a href="http://docs.syncano.io/docs/classes/" target="_blank">Classes</a></li>
              <li><a href="http://docs.syncano.io/docs/authentication/" target="_blank">Authentication</a></li>
              <li><a href="http://docs.syncano.io/docs/realtime-communication/" target="_blank">Realtime communication</a></li>
              <li><a href="http://docs.syncano.io/docs/data-objects-filtering-ordering/" target="_blank">Data Objects filtering</a></li>
              <li><a href="http://docs.syncano.io/docs/endpoints-data/" target="_blank">Data Endpoints</a></li>
              <li><a href="http://docs.syncano.io/docs/snippets-scripts/" target="_blank">Snippet Scripts</a></li>
            </ul>
          </div>
          <a
            className="button"
            href="http://docs.syncano.io/"
            target="_blank"
          >
            Browse All Docs
          </a>
        </TextPanels.Panel>
      </TextPanels>
      <TextWithImage
        image={
          <img
            src={require('./get-answers-to-common-questions.svg')}
            alt="lifebuoy"
          />
        }
        headline="Get answers to common questions"
      >
        <div className="text-with-image__text__list">
          <ul>
            <li><a href="http://docs.syncano.io/docs/faq#general-questions" target="_blank">General answers</a></li>
            <li><a href="http://docs.syncano.io/docs/faq#platform-specific-questions" target="_blank">Platform-specific answers</a></li>
            <li><a href="http://docs.syncano.io/docs/faq#pricingbilling-questions" target="_blank">Pricing/Billing answers</a></li>
          </ul>
        </div>
        <a
          className="button"
          href="http://docs.syncano.io/docs/faq/"
          target="_blank"
        >
          View FAQ
        </a>
      </TextWithImage>
      <SocialProfiles />
      <CTASection />
      <Footer />
    </div>
  );
};
