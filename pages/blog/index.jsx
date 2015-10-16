import React from 'react';
import { Router, RouteHandler, Link } from 'react-router';
import _ from 'lodash';

import Helmet from 'react-helmet';
import { link, templateChildrenPages } from 'gatsby-helpers';
import Pagination from '../../components/Pagination';
import Newsletter from '../../components/Newsletter';
import BlogPostItem from '../../components/BlogPostItem';

export default React.createClass({

  sortItem(item) {
    return item.data ? item.data.date : null;
  },

  getPostsCount() {
    let allBlogPages = templateChildrenPages(__filename, this.props.state);
    let posts = _.filter(allBlogPages, (page) => page.data);
    let postsCount = posts.length;

    return postsCount;
  },

  renderSingleItem(item, index) {
    return <BlogPostItem item={item} index={index}/>
  },

  getCategorySlug(category) {
    let target = category ? category : this.props.params.splat;

    if (!target) {
      return false;
    }

    return _.chain(target).trimLeft('category').trim('/').kebabCase().value();
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

  getAllBlogPages() {
    return templateChildrenPages(__filename, this.props.state);
  },

  getPosts() {
    let allBlogPages = this.getAllBlogPages();

    if (this.isCategory()) {
      return this.getPostsFromCategory(allBlogPages);
    }

    return _.filter(allBlogPages, (page) => page.data);
  },

  getCurrentPagePosts(ref) {
    let currentPage = this.props.params.pageId || 1;
    let postsPerPage = this.props.config.postsPerPage;
    let offset = (currentPage - 1) * postsPerPage;

    return _.slice(ref, offset, (offset + postsPerPage));
  },


  renderPageLinks() {
    let ref = _.sortBy(this.getPosts(), this.sortItem).reverse();
    let pageLinks = [];

    if (this.isCategory()) {
      pageLinks = _.map(ref, this.renderSingleItem);
    } else {
      pageLinks = _.map(this.getCurrentPagePosts(ref), this.renderSingleItem);
    }

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
          <img src={require('../../images/mascot.png')}/>
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

  isCategory() {
    return _.startsWith(this.props.params.splat, 'category/');
  },

  renderCategoryHeadline() {
    if (!this.isCategory()) {
      return null;
    }

    return (
      <h1 style={{paddingTop: 30}} className="text-center">
        All posts for category: {this.getCategoryName()}
      </h1>
    )
  },

  renderPagination() {
    if (this.isCategory()) {
      return null;
    }

    return (
      <Pagination
        currentPage={this.props.params.pageId || 1}
        postsCount={this.getPostsCount()}
        postsPerPage={this.props.config.postsPerPage}
      />
    )
  },

  render() {
    return (
      <div className="blog">
        <Helmet title={this.props.config.blogTitle}/>
        <div className="container blog" style={{paddingBottom: 40}}>
          <div className="posts">
            {this.renderCategoryHeadline()}
            {this.renderPageLinks()}
          </div>
          {this.renderPagination()}
        </div>
      </div>
    );
  }
});
