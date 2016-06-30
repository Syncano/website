import React, { Component } from 'react';
import { Modals, ModalsHOC, TopBar } from '../components';
import Helmet from 'react-helmet';
import _ from 'lodash';
import 'normalize.css';
import 'styles/styles';

class Template extends Component {
  static childContextTypes = {
    location: React.PropTypes.object,
    isLandingPage: React.PropTypes.bool
  };

  getChildContext = () => {
    return {
      location: this.props.location,
      isLandingPage: this.props.location.pathname === '/lp/'
    };
  };

  componentDidMount() {
    this.trackPageView();
  }

  componentDidUpdate(prevProps) {
    const currentPath = this.props.location.pathname;
    const previousPath = prevProps.children.props.location.pathname;
    if (currentPath !== previousPath) {
      this.trackPageView();
    }
  }

  trackPageView() {
    analytics.page('Website', {
      Page: this.getWebsitePageTitle()
    });
  }

  getWebsitePageTitle() {
    const helmet = Helmet.peek();

    return _.result(_.find(helmet.metaTags, [ 'name', 'mixpanelTitle' ]), 'content');
  }

  render() {
    const { location, children } = this.props;

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
