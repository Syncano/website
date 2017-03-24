import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import 'normalize.css';
import 'styles/styles';
import { MODALS } from '../components/Modals/Modals';
import Helmet from 'react-helmet';
import { LoggedInHOC, Modals, ModalsHOC, TopBar, BetaSignUp, Dialog, BetaDialogContent } from '../components';
import GLOBAL_CONFIG from '../config/global';

class Template extends Component {
  static contextTypes = {
    modals: PropTypes.object,
    location: PropTypes.object
  };

  static childContextTypes = {
    location: PropTypes.object,
    isLandingPage: PropTypes.bool,
    topBarHeight: PropTypes.number,
    closeBanner: PropTypes.func,
    onApplyBeta: PropTypes.func,
    onRequestClose: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      topBarHeight: 0,
      isDialogOpen: false,
      closeBetaBanner: localStorage.getItem('closeBetaBanner')
    };
  };

  getChildContext() {
    return {
      location: this.props.location,
      isLandingPage: _.includes(GLOBAL_CONFIG.landingPagesSlugs, this.props.location.pathname),
      topBarHeight: this.state.topBarHeight,
      closeBanner: this.closeBetaBanner.bind(this),
      onApplyBeta: this.onApplyBeta.bind(this),
      onRequestClose: this.closeDialog.bind(this)
    };
  };

  componentDidMount() {
    this.setState({
      closeBetaBanner: localStorage.getItem('closeBetaBanner')
    })
    this.handleGetModalFromQuery() ? this.handleOpenModal() : this.trackPageView();
    this.setTopBarHeight();
  };

  componentDidUpdate(prevProps) {
    const { pathname, state, hash, action } = this.props.location;
    const { pathname: previousPath, hash: previousHash }= prevProps.location;
    const forceTrack = state && state.forceTrack;

    if (pathname !== previousPath || forceTrack) {
      this.trackPageView();
    }
  };

  setTopBarHeight = () => {
    const { topBarHeight } = this.state;

    if (topBarHeight) return null;

    const getTopBarHeight = utils.getElementHeight('top-bar');

    this.setState({ topBarHeight: getTopBarHeight });
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

  closeBetaBanner() {
    localStorage.setItem('closeBetaBanner', false);
    this.setState({ closeBetaBanner: true, isDialogOpen: false, });
  };

  closeDialog() {
    this.setState({ isDialogOpen: false })
  }

  onApplyBeta() {

    this.setState({ isDialogOpen: true })
  };

  render() {
    const { children } = this.props;
    const { isDialogOpen } = this.state;
    const showBetaBanner = !this.state.closeBetaBanner;
    const styles = isDialogOpen && {
      content: {
        filter: 'blur(5px)',
        overflow: 'hidden',
        height: '100vh'
      }
    };

    return (
      <div>
        {showBetaBanner && <BetaSignUp />}
        <TopBar 
          style={styles.content}
          showBetaBanner={showBetaBanner}
        />
        <div 
          className="wrapper"
          style={styles.content}
        >
          {children}
        }
        </div>
        <Dialog
          isOpen={this.state.isDialogOpen}
        >
          <BetaDialogContent />
        </Dialog>
        <Modals />
      </div>
    );
  };
}

export default LoggedInHOC(ModalsHOC(Template));
