import React from 'react';
import { Navigation } from 'react-router';
import _ from 'lodash';

export default React.createClass({
  mixins: [Navigation],

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/'));

    return posts;
  },

  getRouteId() {
    return _.trimRight(this.props.params.splat, '/');
  },

  componentWillMount() {
    let routeId = this.getRouteId();
    let newBlogPostPath = `/blog/${routeId}/`;
    let isBlogpost = _.some(this.getAllPosts(), { path: newBlogPostPath});

    if (isBlogpost) {
      this.replaceWith(newBlogPostPath)
    }
  },

  render() {
    return <div>404</div>
  }
});
