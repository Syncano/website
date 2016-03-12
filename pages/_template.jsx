import React from 'react';
import { RouteHandler, State } from 'react-router';
import { Footer, Header, Landing } from '../components/';
import _ from 'lodash';
import Helmet from 'react-helmet';

require('../css/bootstrap.min.css');
require('../css/bootstrap-theme.min.css');
require('../css/custom.css');
require('../fonts/avenir/avenir.css');

export default React.createClass({
  mixins: [State],

  componentDidMount() {
    this.trackPageView();

    $('.navbar-nav > li > a').click(function() {
      if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-toggle').click();
      }
    });
  },

  componentDidUpdate() {
    this.trackPageView();
  },

  trackPageView() {
    analytics.page('Website', {
      Page: this.getWebsitePageTitle()
    });
  },

  getWebsitePageTitle() {
    let helmet = Helmet.peek();
    let markdownFileData = this.props.page.data;

    if (markdownFileData) {
      return markdownFileData.mixpanel_title;
    }

    return _.result(_.find(helmet.metaTags, 'name', 'mixpanelTitle'), 'content');
  },

  renderHeader() {
    return this.isLandingPage() ? <Landing.Header/> : <Header/>;
  },

  isLandingPage() {
    return this.props.page && _.startsWith(this.props.page.path, '/lp/');
  },

  isDocumentationPage() {
    return this.props.page && _.startsWith(this.props.page.path, '/documentation/');
  },

  renderFooter() {
    return !this.isLandingPage() ? <Footer/> : <Landing.Footer/>;
  },

  renderContent() {
    if (this.isDocumentationPage()) {
      return <RouteHandler {...this.props}/>
    }

    return (
      <div>
        {this.renderHeader()}
        <RouteHandler {...this.props} />
        {this.renderFooter()}
      </div>
    )
  },

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s"
          link={[
            {"rel": "canonical", "href": `${this.props.config.domain}${this.props.state.path}`}
          ]}
        />
        {this.renderContent()}
      </div>
    );
  }
});