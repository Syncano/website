import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import StatusImage from './StatusImage';
import config from '../config/';

export default class StatusPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render = () => {
    const { status } = this.state;
    const { children } = this.props;

    return (
      <header className="page-header">
        <div className="inner">
          <StatusImage
            className="page-header__status"
            indicator={status.status.indicator}
            alt={status.status.description}
          />
          <h2>{status.status.description}</h2>
          <p>Updated about {moment(status.page.updated_at).fromNow()}. <br /><a href={status.page.url} target="_blank">
          View our status page</a> for more info.</p>
          {children}
        </div>
      </header>
    );
  };
};
