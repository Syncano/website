import React from 'react';
import { Router, RouteHandler, Link } from 'react-router';
import _ from 'lodash';

import Helmet from 'react-helmet';
import { link, templateChildrenPages } from 'gatsby-helpers';
import { BlogPostItem, Newsletter, Pagination } from '../../components/';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Syncano Blog",
      description: "We covers serverless app development in a realtime world. Learn tips and tricks to develop your applications with out a server!",
      mixpanelTitle: "Blog"
    }
  },

  sortItem(item) {
    return item.data ? item.data.date : null;
  },

  getPostsCount() {
    let allBlogPages = this.getAllBlogPages();
    let posts = _.filter(allBlogPages, (page) => page.data);
    let postsCount = posts.length;

    return postsCount;
  },

  renderSingleItem(item, index) {
    return <BlogPostItem key={index} item={item} index={index}/>
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
    let pageLinks = _.map(this.getCurrentPagePosts(ref), this.renderSingleItem);

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
      <div key={`blog-subscribe-${id}`} id={`blog-subscribe-${id}`} className="container">
        <div className="col-md-2">
          <img src={require('../../images/mascot.png')} alt="mascot"/>
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

  renderPagination() {
    return (
      <Pagination
        currentPage={this.props.params.pageId || 1}
        postsCount={this.getPostsCount()}
        postsPerPage={this.props.config.postsPerPage}
      />
    )
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="blog">
        <Helmet
          title={SEO.title}
          meta={[
            {"name": "description", "content": SEO.description},
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle}
          ]}
        />
        <div className="container blog" style={{paddingBottom: 40}}>
          <div className="posts">
            {this.renderPageLinks()}
          </div>
          {this.renderPagination()}
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
});
