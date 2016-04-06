import React from 'react';
import { Link } from 'react-router';

import 'normalize.css/normalize.css';
import 'styles/styles';

export default React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    return (
      <div>
        <div className="wrapper">
        {this.props.children}
        </div>
      </div>
    )
  }
});
