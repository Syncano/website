import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { link, templateChildrenPages } from 'gatsby-helpers';
import { Footer, Header, Landing, LatestBlogPosts, Newsletter} from '../components/';
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
  },

  componentDidUpdate() {
    this.trackPageView();
  },

  trackPageView() {
    let isPage = this.props.page;
    let pageTitle;

    if (isPage) {
      pageTitle = this.isBlogPost() ? this.getBlogPostTitle() : this.getWebsitePageTitle();
    }

    if (!isPage && this.isBlogCategory()) {
      pageTitle = 'Blog'
    }

    analytics.page('Website', {
      Page: pageTitle
    });
  },

  isBlogPost() {
    let page = this.props.page;

    return (page && _.startsWith(page.requirePath, 'blog/') && !_.startsWith(page.requirePath, 'blog/category/') && _.isObject(page.data));
  },

  isBlogCategory() {
    return _.startsWith(this.props.state.path, '/blog/category/');
  },

  getBlogPostTitle() {
    return this.props.page.data.title;
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

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/') && !_.startsWith(page.requirePath, 'blog/category/')).reverse();

    return posts;
  },


  getCategoriesList() {
    let posts = this.getAllPosts();
    let categories = _.sortBy(_.uniq(_.flatten(_.map(posts, (post) => post.data.categories))));

    return categories;
  },

  renderCategoriesLinks(categories) {
    return _.map(categories, this.renderCategoryLink);
  },

  renderCategoryLink(category) {
    let categoryName = _.kebabCase(category);
    let categoryUrl = `/blog/category/${categoryName}/`;

    return (
      <li><Link to={categoryUrl} style={{borderBottom: 0}}>{category}</Link></li>
    )
  },

  isLandingPage() {
    return this.props.page && _.startsWith(this.props.page.path, '/landing-page/');
  },

  renderFooter() {
    return !this.isLandingPage() ? <Footer/> : null;
  },

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s" />
        {this.renderHeader()}
        <RouteHandler {...this.props}/>
        {this.renderFooter()}
      </div>
    );
  }
});