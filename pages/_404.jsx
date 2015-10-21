import React from 'react';
import { Navigation } from 'react-router';
import _ from 'lodash';

export default React.createClass({

  mixins: [Navigation],

  getAllPosts() {
    let posts = _.filter(this.props.pages, (page) => page.data && _.startsWith(page.requirePath, 'blog/'));

    return posts;
  },

  componentDidMount() {
    let newBlogPostPath = `/blog${this.props.state.path}`;
    let isBlogpost = _.some(this.getAllPosts(), { path: newBlogPostPath});

    if (isBlogpost) {
      this.replaceWith(newBlogPostPath)
    }
  },

  render() {
    return <div>404</div>
  }
});
