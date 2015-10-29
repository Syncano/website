import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import colorPairsPicker from 'color-pairs-picker';
import chroma from 'chroma-js';
import includes from 'underscore.string/include';
import { link, templateChildrenPages } from 'gatsby-helpers';
import Newsletter from '../components/Newsletter';
import _ from 'lodash';
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap';
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

    return (page && _.startsWith(page.requirePath, 'blog/') && _.isObject(page.data));
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

  renderNav() {
    let brand = (
      <Link to="/">
        <img className="light-version" src={require('../images/syncano-white.png')} alt="Syncano Logo white"/>
      </Link>
    );

    return (
      <Navbar bsStyle="" brand={brand} className="navbar navbar-fixed-top dark" style={{background: '#244273', boxShadow: 'none'}} toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <li><a href="http://docs.syncano.com/" target="_blank">Docs</a></li>
            <li><Link to="/support/">Support</Link></li>
            <li><Link to="/solutions/">Solutions</Link></li>
            <li><Link to="/pricing/">Pricing</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </Nav>
          <Nav navbar right>
             <li><a href="https://dashboard.syncano.io/#/login" className="btn btn-blue mixpanel-login" target="_blank">Login</a></li>
             <li><a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue mixpanel-btn" target="_blank">Sign Up</a></li>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  },

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/')).reverse();

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

  renderFooter() {
    return (
      <div>
        <footer className="columns" style={{marginTop: 0, paddingBottom: 50}}>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-xs-12 logo">
                <img src={require('../images/syncano-oval.png')} alt="syncano logo small" width="84"/>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about/">About Us</Link></li>
                  <li><Link to="/jobs/">Superstar Jobs</Link></li>
                  <li><Link to="/contact/">Contact Us</Link></li>
                  <li><Link to="/terms-of-service/">Terms and Legal</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 resources">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="blog-template">Blog</Link></li>
                  <li><a href="http://docs.syncano.com/" target="_blank">Docs</a></li>
                  <li><Link to="/pricing/">Pricing</Link></li>
                  <li><Link to="/solutions/">Solutions</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 no-header resources">
                <ul>
                  <li><Link to="/support/">Support</Link></li>
                  <li><Link to="/blog/category/tutorials/">Tutorials</Link></li>
                  <li><a href="http://docs.syncano.com/docs/syncano-libraries/" target="_blank">Libraries</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12">
                <h4>Latest Blog Posts</h4>
                <ul>
                  <li><Link to="/blog/create-ios-chat-app-part1/">Create an iOS Chat App using JSQMessagesViewController – Part 1</Link></li>
                  <li><Link to="/blog/syncano-is-going-places-literally/">Syncano Is Going Places, Literally</Link></li>
                </ul>
                <Newsletter/>
              </div>
            </div>
          </div>
        </footer>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p className="copyright">&copy; 2015 Syncano. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 col-sm-5 social">
                <a target="_blank" href="https://github.com/Syncano"><i className="fa fa-github-alt"> </i></a>
                <a target="_blank" href="https://plus.google.com/104508582055074736934"><i className="fa fa-google-plus"> </i></a>
                <a target="_blank" href="https://www.facebook.com/syncano"><i className="fa fa-facebook"> </i></a>
                <a target="_blank" href="http://www.linkedin.com/company/syncano"><i className="fa fa-linkedin"> </i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  },

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Syncano.io" />
        {this.renderNav()}
        <RouteHandler {...this.props}/>
        {this.renderFooter()}
      </div>
    );
  }
});