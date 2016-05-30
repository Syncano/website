import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import moment from 'moment';
import StatusImage from './StatusImage';
import SupportForm from './SupportForm';
import config from '../config/';

export default class StatusPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSupportFormVisible: false,
      status: {
        page: {
          url: 'http://status.syncano.com/'
        },
        status: {
          description: 'Fetching current status...',
          indicator: 'loading'
        }
      }
    };
  };

  componentWillMount = () => {
    this.fetchCurrentStatus();
  };

  componentDidMount = () => {
    setInterval(() => {
      this.fetchCurrentStatus();
    }, 60000)
  };

  fetchCurrentStatus = () => {
    const { statusPageStatusUrl } = config;

    axios.get(statusPageStatusUrl).then((response) => this.setState({ status: response.data }));
  };

  getHeadlineText = (status) => {
    if (status === 'minor' || status === 'major') {
      return 'Degraded Performance';
    }

    if (status === 'critical') {
      return 'Partial Outage';
    }

    return status.status.description;
  };

  showSupportForm = () => {
    this.setState({ hasSupportFormVisible: true });
  };

  getStatusPageHeaderClassName = () => {
    const { hasSupportFormVisible } = this.state;

    return classNames({
      'page-header': true,
      'page-header--no-bottom-padding': (hasSupportFormVisible === true)
    });
  };

  render = () => {
    const { hasSupportFormVisible, status } = this.state;

    return (
      <header className={this.getStatusPageHeaderClassName()}>
        <div className="inner">
          <StatusImage
            className="page-header__status"
            indicator={status.status.indicator}
            alt={status.status.description}
          />
          <h2>{this.getHeadlineText(status)}</h2>
          <p>Updated about {moment(status.page.updated_at).fromNow()}. <br /><a href={status.page.url} target="_blank">
          View our status page</a> for more info.</p>
          <a
            className="button button--large button--filled"
            onClick={this.showSupportForm}
          >
            Create Support Ticket
          </a>
          <p className="page-header__more">
            or <a href="http://syncano.io/slack-invite/" target="_blank">chat with us on Slack</a>
          </p>
        </div>
        {hasSupportFormVisible && <SupportForm />}
      </header>
    );
  };
};
