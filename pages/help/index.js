import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import {
  CTASection,
  Footer,
  StatusPageHeader,
  SocialProfiles,
  TextPanels,
  TextWithImage
} from '../../components';

export default () => {
  return (
    <DocumentTitle title="Help">
      <div>
        <StatusPageHeader>
          <Link
            to="/"
            className="button button--large button--filled"
          >
            Create Support Ticket
          </Link>
          <p className="page-header__more">
            or <a href="http://syncano-community.github.io/slack-invite/" target="_blank">chat with us on Slack</a>
          </p>
        </StatusPageHeader>
        <TextWithImage
          variant="image-right"
          theme="gray"
          image={
            <img
              src={require('../../images/illustrations/getting-started-with-syncano.svg')}
              alt="getting started"
            />
          }
          headline="Getting started with Syncano"
          textline={`Learn Syncano basics, terms or any questions you might have. Join us on Slack, read tutorials or
          simply for our open source code.`}
        >
          <Link
            to="/about/"
            className="button"
          >
            Learn The Basics
          </Link>
        </TextWithImage>
        <TextPanels>
          <TextPanels.Panel
            theme="purple"
            headline="Libraries quickstart"
          >
            <div className="text-panels__panel__list">
              <ul>
                <li><a href="http://docs.syncano.io/docs/javascript/">JavaScript</a></li>
                <li><a href="http://docs.syncano.io/docs/ng-syncano/">AngularJS</a></li>
                <li><a href="http://docs.syncano.io/docs/ember-syncano/">Ember.js</a></li>
                <li><a href="http://docs.syncano.io/docs/ios/">iOS</a></li>
                <li><a href="http://docs.syncano.io/docs/android/">Android</a></li>
                <li><a href="http://docs.syncano.io/docs/python/">Python</a></li>
                <li><a href="http://docs.syncano.io/docs/ruby/">Ruby</a></li>
                <li><a href="http://docs.syncano.io/docs/arduino/">Arduino</a></li>
              </ul>
            </div>
            <a
              href="http://docs.syncano.io/docs/syncano-libraries/"
              className="button"
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
                <li><a href="https://www.syncano.io/blog/create-ios-chat-app-part1/">Create iOS chat app</a></li>
                <li><a href="https://www.syncano.io/blog/getting-started-reactjs-tutorial/">Getting started with React</a></li>
                <li><a href="https://www.syncano.io/blog/flask-micro-framework-introduction/">Intro to Flask</a></li>
                <li><a href="https://www.syncano.io/blog/getting-started-with-docker/">Getting started with Docker</a></li>
                <li><a href="https://www.syncano.io/blog/getting-started-swift-playground/">Getting started with Swift</a></li>
              </ul>
            </div>
            <a
              href="https://www.syncano.io/blog/tag/tutorials/"
              className="button"
            >
              View All Tutorials
            </a>
          </TextPanels.Panel>
          <TextPanels.Panel
            theme="silver"
            headline="Popular docs"
          >
            <div className="text-panels__panel__list">
              <ul>
                <li><a href="http://docs.syncano.io/v1.0/docs/codebox-overview/">CodeBox overview</a></li>
                <li><a href="http://docs.syncano.io/docs/data-objects/">Data Objects</a></li>
                <li><a href="http://docs.syncano.io/docs/classes/">Classes</a></li>
                <li><a href="http://docs.syncano.io/docs/user-management/">User management</a></li>
                <li><a href="http://docs.syncano.io/docs/data-objects-filtering/">Data Objects Filtering & Ordering</a></li>
                <li><a href="http://docs.syncano.io/v0.1.1/docs/general-information/">REST API</a></li>
              </ul>
            </div>
            <a
              href="http://docs.syncano.io/"
              className="button"
            >
              Browse All Docs
            </a>
          </TextPanels.Panel>
        </TextPanels>
        <TextWithImage
          variant="image-left"
          image={
            <img
              src={require('../../images/illustrations/get-answers-to-common-questions.svg')}
              alt="lifebuoy"
            />
          }
          headline="Get answers to common questions"
          textline="Get answers to your frequently asked questions and more&hellip;"
        >
          <div className="text-with-image__text__list">
            <ul>
              <li><Link to="/about/">General answers</Link></li>
              <li><Link to="/about/">Platform Specific answers</Link></li>
              <li><Link to="/about/">Pricing/Billing answers</Link></li>
            </ul>
          </div>
          <a
            href="http://docs.syncano.io/docs/faq"
            className="button"
          >
            View FAQ
          </a>
        </TextWithImage>
        <SocialProfiles />
        <CTASection>
          <h2>Rethink how you build apps. Go serverless!</h2>
          <Link
            to="/about/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            (6 months free &bull; No credit card required)
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
