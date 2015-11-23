import React from 'react';
import { Navigation } from 'react-router';

export default React.createClass({

  mixins: [Navigation],

  componentDidMount() {
    this.transitionTo('/blog/')
  },

  render() {
    return null
  }
});
