import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { MODALS } from '../components/Modals/Modals';
import Helmet from 'react-helmet';
import { LoggedInHOC, Modals, ModalsHOC, TopBar } from '../components';
import GLOBAL_CONFIG from '../config/global';
import 'normalize.css';
import 'styles/styles';
import mainUtils from '../utils/mainUtils';

class Template extends Component {
  static contextTypes = {
    modals: PropTypes.object
  };

  static childContextTypes = {
    location: PropTypes.object,
    isLandingPage: PropTypes.bool,
    topBarHeight: PropTypes.number
  };

  constructor() {
    super();

    this.state = {
      topBarHeight: 0
    };
  };

  getChildContext = () => {
    return {
      location: this.props.location,
      isLandingPage: _.includes(GLOBAL_CONFIG.landingPagesSlugs, this.props.location.pathname),
      topBarHeight: this.state.topBarHeight
    };
  };

  componentDidMount() {
    this.handleGetModalFromQuery() ? this.handleOpenModal() : this.trackPageView();
    this.scrollToHash();
  };

  componentDidUpdate(prevProps) {
    const { pathname, state } = this.props.location;
    const previousPath = prevProps.children.props.location.pathname;
    const forceTrack = state && state.forceTrack;

    if (pathname !== previousPath || forceTrack) {
      this.trackPageView();
    }
  };

  getTopBarHeight = () => {
    const topBarHeight = mainUtils.getElementHeight('top-bar');

    this.setState({ topBarHeight });

    return topBarHeight;
  };

  scrollToHash = () => {
    const { hash } = window.location;

    if (hash) {
      const name = hash.replace('#', '');
      const elementToScrollTo = document.getElementsByName(name)[0];
      const topBarHeight = this.getTopBarHeight();

      if (elementToScrollTo) {
        setTimeout(() => {
          elementToScrollTo.scrollIntoView();
          // scroll up as TopBar hides content
          window.scrollBy(0, -topBarHeight);
        }, 0);
      }
    };
  };

  trackPageView() {
    analytics.page('Website', {
      Page: this.getWebsitePageTitle()
    });
  };

  handleGetModalFromQuery() {
    const { query } = this.props.location;
    const queryKeys = _.keys(query);
    const modalToOpen = _.find(queryKeys, (key) => _.includes(MODALS, key));

    return modalToOpen;
  };

  handleOpenModal() {
    const { modals } = this.context;
    const modalName = this.handleGetModalFromQuery();

    modals[modalName].open();
  };

  getWebsitePageTitle() {
    const helmet = Helmet.peek();

    return _.result(_.find(helmet.metaTags, [ 'name', 'mixpanelTitle' ]), 'content');
  };

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

export default LoggedInHOC(ModalsHOC(Template));
