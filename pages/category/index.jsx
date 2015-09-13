import React from 'react';
import { RouteHandler, Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

import Helmet from 'react-helmet';
import { link, templateChildrenPages } from 'gatsby-helpers';
import Pagination from '../../components/Pagination';
import Newsletter from '../../components/Newsletter';

export default React.createClass({

  sortItem(item) {
    return item.data ? item.data.date : null;
  },

  renderDate(date) {
    if (date) {
      let itemDate = moment(date).format('DD. MMMM YYYY');

      return (
        <span className="date">{itemDate}</span>
      );
    }
  },

  renderCategoryLink(category) {
    let categoryName = _.kebabCase(category);
    let categoryUrl = `/category/${categoryName}/`;

    return (
      <Link to={categoryUrl}>{category}</Link>
    )
  },

  renderSeparator() {
    return <span className="sep">, </span>;
  },

  renderCategories(categories) {
    let categoriesLinks = _.map(categories, this.renderCategoryLink);
    let separatedCategoriesLinks = [];

    _.map(categoriesLinks, (link, index) => {
      separatedCategoriesLinks.push(link);
      separatedCategoriesLinks.push(this.renderSeparator());
    });

    return (
      <span className="categories">
        {separatedCategoriesLinks}
      </span>
    )
  },

  renderHeader(item) {
    let dataIsObject = _.isObject(item.data);
    let title = dataIsObject ? item.data.title : item.path;

    return (
      <header>
        <h2 className="title"><Link to={item.path}>{title}</Link></h2>
        <div className="meta">
          {this.renderDate(item.data.date)}
          {this.renderCategories(item.data.categories)}
        </div>
      </header>
    )
  },

  renderSingleItem(item) {
    let dataIsObject = _.isObject(item.data);
    let isDraft = dataIsObject ? item.data.draft : false;
    let title = dataIsObject ? item.data.title : item.path;
    let heroImage = dataIsObject && item.data.image ? item.data.image : '/blog/default-blogpost-hero.png';
    let heroImageURL = dataIsObject && item.data.image ? `${item.data.path}${heroImage}` : heroImage;

    if (item.path !== link("/") && dataIsObject && !isDraft) {
      return (
        <div
          className="row"
          key={item.path}>
          <div className="post-content">
            <Link to={item.path} className="permalink">
              <span className="author"><img src={`/about/${item.data.author}.png`} alt="Eric Schles" /></span>
              <img src={heroImageURL} alt={title} name={title} height="auto"/>
            </Link>
            {this.renderHeader(item)}
            <div className="summary">{item.data.summary}</div>
            <footer>
              <div>
                <div className="pull-left"><Link to={item.path}>MORE</Link></div>
                <div className="pull-right">
                  <div className="share-links">
                    <span><img src={require('../../images/share.png')} alt="share" style={{height: 20, width: 20, border: 'none'}}/></span>
                    <div className="links social-share">
                      <div className="arrow-down"></div>
                      <a className="fa fa-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
                      <a className="fa fa-twitter" href={`https://twitter.com/intent/tweet?text=Blog&url=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
                      <a className="fa fa-google" href={`https://plus.google.com/share?url=http://www.syncano.com/blog${item.path}`} target="_blank"></a>
                      <a className="fa fa-pinterest" href={`http://pinterest.com/pin/create/button/?url=http://www.syncano.com/blog${item.path}&description=${title}&media=${heroImageURL}`} target="_blank"></a>
                    </div>
                  </div>
                </div>
                <div style={{clear: 'both'}}></div>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  },

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/')).reverse();

    return posts;
  },

  getCategoryName() {
    if (!this.props.params.splat) {
      return false;
    }

    return _.kebabCase(_.trimRight(this.props.params.splat, '/'));
  },

  getPostsFromCategory() {
    let postsFromCategory = _.filter(this.getAllPosts(), (post) => {
      let postCategories = _.map(post.data.categories, (category) => _.kebabCase(category));
      return _.indexOf(postCategories, this.getCategoryName()) > -1;
    });

    return postsFromCategory;
  },

  renderNewsletterBox(id = 1) {
    return (
      <div key={`blog-subscribe-${id}`} id="blog-subscribe" className="container">
        <div className="col-md-2">
          <img src={require('../../images/mascot.png')}/>
        </div>
        <div className="col-md-8 col-md-offset-2">
          <h2>Hei, Hi, Hola</h2>
          <h3>Sign up here to receive our latest posts in your inbox.</h3>
          <Newsletter submitStyle={{backgroundColor: '#2278cf',
            border: 0,
            padding: '7px 25px',
            color: '#fff',
            marginLeft: 5
            }}/>
        </div>
      </div>
    )
  },

  render() {
    let ref = _.sortBy(this.props.pages, this.sortItem).reverse();
    let pageLinks = _.map(this.getPostsFromCategory(), this.renderSingleItem);
    pageLinks.splice(3, 0, this.renderNewsletterBox());

    return (
      <div>
        <Helmet title={this.props.config.blogTitle}/>
        <div className="container">
          <div className="posts" style={{paddingTop: 70, paddingBottom: 40}}>
            <h1 className="text-center">All posts for category: {_.startCase(this.getCategoryName())}</h1>
            {pageLinks}
          </div>
          <Pagination
            currentPage={this.props.params.pageId || 1}
            postsCount={this.getPostsFromCategory().length}
            postsPerPage={this.props.config.postsPerPage}/>
        </div>
      </div>
    );
  }
});
