import React from 'react';
import { RouteHandler } from 'react-router';
import Helmet from 'react-helmet';
import { BlogNav } from '../../components/';

export default React.createClass({
  render() {
    return (
      <div>
        <BlogNav {...this.props}/>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});
