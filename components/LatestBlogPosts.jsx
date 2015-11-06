import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

export default React.createClass({

  renderList() {
    let recentBlogPosts = _.slice(this.props.posts, 0, 2);

    return _.map(recentBlogPosts, this.renderLink);
  },

  renderLink(link) {
    let data = link.data;

    return (
      <li key={data.path}>
        <Link to={data.path}>
          {data.title}
        </Link>
      </li>
    )
  },

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
});
