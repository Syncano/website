import React, { Component } from 'react';
import axios from 'axios';
import StatusImage from './StatusImage';

class StatusPageHeader extends Component {
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
    axios.get(APP_CONFIG.statusPageStatusUrl).then((response) => this.setState({ status: response.data }));
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

  render() {
    const { status } = this.state;

    return (
      <div className="status-topbar__status-column__status-info">
        <StatusImage
          className="status-topbar__status-column__status-info__icon blink_me"
          indicator={status.status.indicator}
          alt={status.status.description}
        />
        {this.getHeadlineText(status)}
      </div>
    );
  };
}

export default StatusPageHeader;
