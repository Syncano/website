import React from 'react';
import { RouteHandler } from 'react-router';

export default React.createClass({
  render() {
    return <RouteHandler {...this.props}/>;
  }
});