import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import {
  CTASection,
  Footer,
  PageHeader,
  StatusImage,
  SocialProfiles,
  TextPanels,
  TextWithImage
} from '../../components';

const STATUS_URL = 'https://6l1kzwgr7t06.statuspage.io/api/v2/status.json';

export default class HelpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: {
        page: {},
        status: {}
      }
    };
  };

  componentWillMount() {
    this.fetchCurrentStatus();
  };

  componentDidMount() {
    setInterval(() => {
      this.fetchCurrentStatus();
    }, 60000)
  };

  fetchCurrentStatus() {
    axios.get(STATUS_URL).then((response) => this.setState({status: response.data}));
  };

  render() {
    const { status } = this.state;

    return (
      <DocumentTitle title="Help">
        <div>
          <PageHeader
            overHeadlineContent={<StatusImage className="page-header__status" />}
            headline={status.status.description}
            textlineHTML={`Updated about ${moment(status.page.updated_at).fromNow()}. <br /><a href=${status.page.url} target="_blank">View
            our status page</a> for more info.`}
          >
            <Link
              to="/"
              className="button button--large button--filled"
            >
              Create Support Ticket
            </Link>
            <p className="page-header__more">
              or <a href="https://syncano-community.slack.com/" target="_blank">chat with us on Slack</a>
            </p>
          </PageHeader>
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
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">JavaScript</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">iOS</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Android</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Python</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Ruby</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Arduino</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Angular</a></li>
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
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Create iOS chat app</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with React</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Intro to Flask</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Docker</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Swift</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Docker</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Getting started with Swift</a></li>
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
              theme="silver"
              headline="Popular docs"
            >
              <div className="text-panels__panel__list">
                <ul>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">CodeBox overview</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Classes</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">User management</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects filtering</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">REST API</a></li>
                  <li><a href="https://www.syncano.io/blog/queries-with-ember-syncano/">Data Objects</a></li>
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
            <Link
              to="/about/"
              className="button"
            >
              View FAQ
            </Link>
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
  }
};
