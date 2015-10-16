import React from 'react';
import { Link, RouteHandler } from 'react-router';
import _ from 'lodash';

export default React.createClass({

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

  renderAllLink() {
    let activeClassName = 'none';

    if (this.props.page && this.props.page.path === '/blog/') {
      activeClassName = 'active'
    }

    return (
      <li><Link activeClassName={activeClassName} to="blog-template">All</Link></li>
    )
  },

  renderBlogNav() {
    return (
      <nav className="categories navbar visible-lg" style={{marginBottom: 0}}>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2" aria-expanded="true" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-2" aria-expanded="false">
            <ul className="nav navbar-nav">
              {this.renderAllLink()}
              <li><Link to="/blog/category/tutorials">Tutorials</Link></li>
              <li className="dropdown-toggle visible-lg">
                <a href="#">Browse Categories <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {this.renderCategoriesLinks(this.getCategoriesList())}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  },

  render() {
    return (
      <div>
        {this.renderBlogNav()}
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});
