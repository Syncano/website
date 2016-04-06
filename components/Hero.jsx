import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import classNames  from 'classnames';

export default React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    var heroClass = classNames({
      'hero': true,
      'hero--home': (this.props.variant == 'home'),
    });

    return (
      <div className={heroClass}>
        <div className="inner">
          <h2>{this.props.headline}</h2>
          <p>{this.props.textline}</p>
          {this.props.children}
        </div>
      </div>
    )
  }
});
