import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, TextPanels, TextWithImage } from '../../components';

export default () => (
  <DocumentTitle title="Help">
    <div>
      <PageHeader
        status="ok"
        headline="All systems operational"
        textlineHTML="Updated about one minute ago. <a href='http://syncano.statuspage.io' target='_blank'>View our status page</a> for more info."
      >
        <Link
          to="/"
          className="button button--large"
        >
          Create Support Ticket
        </Link>
        <p className="page-header__more">or chat with us on <a href="https://syncano-community.slack.com/" target="_blank">Slack</a></p>
      </PageHeader>
      <TextWithImage
        variant="image-right"
        theme="gray"
        image={
          <img
            src={require('../../images/illustrations/getting-started.svg')}
            alt="getting-started"
          />
        }
        headline="Getting started with Syncano"
        textline="Learn Syncano basics, terms or any questions you might have. Join us on Slack, read tutorials or simply for our open source code."
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
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">JavaScript</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">iOS</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Android</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Python</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Ruby</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Arduino</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Angular</a>
              </li>
            </ul>
          </div>
          <Link
            to="/about/"
            className="button"
          >
            Libraries Overview
          </Link>
        </TextPanels.Panel>
        <TextPanels.Panel
          theme="azure"
          headline="Popular tutorials"
        >
          <div className="text-panels__panel__list">
            <ul>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Create iOS chat app</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with React</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Intro to Flask</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Docker</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Swift</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Docker</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Swift</a>
              </li>
            </ul>
          </div>
          <Link
            to="/about/"
            className="button"
          >
            View All Tutorials
          </Link>
        </TextPanels.Panel>
        <TextPanels.Panel
          theme="graphite"
          headline="Popular docs"
        >
          <div className="text-panels__panel__list">
            <ul>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">CodeBox overview</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Classes</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">User management</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects filtering</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">REST API</a>
              </li>
              <li>
                <a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects</a>
              </li>
            </ul>
          </div>
          <Link
            to="/about/"
            className="button"
          >
            Browse All Docs
          </Link>
        </TextPanels.Panel>
      </TextPanels>
      <TextWithImage
        variant="image-left"
        image={
          <img
            src={require('../../images/illustrations/common-questions.svg')}
            alt="common-questions"
          />
        }
        headline="Get answers to common questions"
        textline="Get answers to your frequently asked questions and more..."
      >
        <Link
          to="/about/"
          className="button"
        >
          View FAQ
        </Link>
      </TextWithImage>
      <CTASection>
        <Link
          to="/about/"
          className="button button--large button--featured"
        >
          Get Started for Free
        </Link>
      </CTASection>
      <Footer />
    </div>
  </DocumentTitle>
);
