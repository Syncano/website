import React from 'react';
import { Link, RouteHandler } from 'react-router';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { link, templateChildrenPages } from 'gatsby-helpers';

import { BlogNav, BlogPostItem, Newsletter } from '../../../components';

export default React.createClass({

  sortItem(item) {
    return item.data ? item.data.date : null;
  },

  renderSingleItem(item, index) {
    return <BlogPostItem key={index} item={item} index={index}/>
  },

  getCategorySlug(category) {
    let target = category ? category : this.props.page.file.name;

    if (!target) {
      return false;
    }

    return _.kebabCase(target);
  },

  getCategoryName(categorySlug) {
    let categoryName = _.find(this.getCategoriesList(), (category) => {
      return this.getCategorySlug(category) === this.getCategorySlug();
    });

    return categoryName;
  },

  getCategoriesList() {
    let posts = this.getPosts();
    let categories = _.sortBy(_.uniq(_.flatten(_.map(posts, (post) => post.data.categories))));

    return categories;
  },

  getPostsFromCategory(allPosts) {
    let postsFromCategory = _.filter(allPosts, (post) => {
      if (!post.data) {
        return false;
      }
      let postCategories = _.map(post.data.categories, (category) => _.kebabCase(category));
      return _.indexOf(postCategories, this.getCategorySlug()) > -1;
    });

    return postsFromCategory;
  },

  isBlogPage(page) {
    return !_.isEmpty(page.data) && _.startsWith(page.path, '/blog/') && !_.startsWith(page.path, '/blog/category/');
  },

  getAllBlogPages() {
    return _.filter(this.props.pages, this.isBlogPage);
  },

  getPosts() {
    let allBlogPages = this.getAllBlogPages();

    return this.getPostsFromCategory(allBlogPages);
  },

  renderPageLinks() {
    let ref = _.sortBy(this.getPosts(), this.sortItem).reverse();
    let pageLinks = _.map(ref, this.renderSingleItem);

    if (pageLinks.length > 11) {
      pageLinks.splice(11, 0, this.renderNewsletterBox(2));
    }

    if (pageLinks.length > 3) {
      pageLinks.splice(3, 0, this.renderNewsletterBox());
    }

    return pageLinks;
  },

  renderNewsletterBox(id = 1) {
    return (
      <div key={`blog-subscribe-${id}`} id="blog-subscribe" className="container">
        <div className="col-md-2">
          <img src={require('../../../images/mascot.png')}/>
        </div>
        <div className="col-md-8 col-md-offset-2">
          <h2>Hei, Hi, Hola</h2>
          <h3>Sign up here to receive our latest posts in your inbox.</h3>
          <Newsletter
            submitStyle={{
              backgroundColor: '#2278cf',
              border: 0,
              padding: '7px 25px',
              color: '#fff',
              marginLeft: 5
            }}/>
        </div>
      </div>
    )
  },

  renderHeadline() {
    return (
      <h1 style={{paddingTop: 30}} className="text-center">
        All posts for category: {this.getCategoryName()}
      </h1>
    )
  },

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s"/>
        <BlogNav {...this.props}/>
        <div className="blog">
          <div className="container blog" style={{paddingBottom: 40}}>
            <div className="posts">
              {this.renderHeadline()}
              {this.renderPageLinks()}
            </div>
            <RouteHandler {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
});
