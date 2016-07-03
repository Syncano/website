import React, { Component } from 'react';
import { Modals, ModalsHOC, TopBar } from '../components';
import { MODALS } from '../components/Modals/Modals';
import Helmet from 'react-helmet';
import _ from 'lodash';
import 'normalize.css';
import 'styles/styles';

class Template extends Component {
  static contextTypes = {
    modals: React.PropTypes.object
  };

  static childContextTypes = {
    location: React.PropTypes.object
  };

  getChildContext = () => {
    return {
      location: this.props.location
    };
  };

  componentDidMount() {
    this.handleGetModalFromQuery() ? this.handleOpenModal() : this.trackPageView();
  }

  componentDidUpdate(prevProps) {
    const currentPath = this.props.location.pathname;
    const previousPath = prevProps.children.props.location.pathname;
    const currentQuery = this.props.location.query;
    const previousQuery = prevProps.children.props.location.query;

    if (currentPath !== previousPath || currentQuery !== previousQuery) {
      this.trackPageView();
    }
  }

  trackPageView() {
    analytics.page('Website', {
      Page: this.getWebsitePageTitle()
    });
  }

  handleGetModalFromQuery() {
    const { query } = this.props.location;
    const queryKeys = _.keys(query);
    const modalToOpen = _.find(queryKeys, (key) => _.includes(MODALS, key));

    return modalToOpen;
  }

  handleOpenModal() {
    const { modals } = this.context;
    const modalName = this.handleGetModalFromQuery();

    modals[modalName].open();
  }

  getWebsitePageTitle() {
    const helmet = Helmet.peek();

    return _.result(_.find(helmet.metaTags, [ 'name', 'mixpanelTitle' ]), 'content');
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <TopBar />
        <div className="wrapper">
          {children}
        </div>
        <Modals />
      </div>
    );
  };
}

export default ModalsHOC(Template);
