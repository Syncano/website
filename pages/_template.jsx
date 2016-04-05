import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes () {
    return {
     children: React.PropTypes.any,
    }
  },

  render () {
    return (
      <div>
        <div>
          <Link to="/">Syncano</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});
