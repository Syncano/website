import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import moment from 'moment';
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

  static childContextTypes = {
    modals: PropTypes.object
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
    const { modals } = this.context;
    const { status } = this.state;

    return (
      <header className="page-header">
        <div className="inner">
          <StatusImage
            className="page-header__status"
            indicator={status.status.indicator}
            alt={status.status.description}
          />
          <h1>{this.getHeadlineText(status)}</h1>
          <h2>
            Updated about {moment(status.page.updated_at).fromNow()}. <br /><a href={status.page.url} target="_blank">
            View our status page</a> for more info or <a href="https://www.syncano.io/slack-invite/" target="_blank">
            join us on Slack</a>.
          </h2>
          <a
            className="button button--large button--filled"
            onClick={modals.supportTicket.open}
          >
            Create Support Ticket
          </a>
          <p className="page-header__more">
            or <span onClick={modals.suggestFeature.open}>suggest a feature</span>
          </p>
        </div>
      </header>
    );
  };
};

StatusPageHeader.contextTypes = {
  modals: PropTypes.object
};

export default StatusPageHeader;
