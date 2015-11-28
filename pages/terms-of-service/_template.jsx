import React from 'react';
import { RouteHandler, Link, State, Navigation } from 'react-router';
import sortBy from 'lodash/collection/sortBy';
import { templateChildrenPages } from 'gatsby-helpers';
import Helmet from 'react-helmet';

export default React.createClass({
  mixins: [State, Navigation],

  handleTopicChange(e) {
    return this.transitionTo(e.target.value);
  },

  render() {
    var childPages, docOptions, docPages;
    childPages = templateChildrenPages(__filename, this.props.state).map((child) => {
      return {
        title: child.data ? child.data.title : 'Terms of Service',
        order: child.data ? child.data.order : 0,
        path: child.path
      };
    });
    childPages = sortBy(childPages, (child) => {
      return child.order;
    });
    docOptions = childPages.map((child) => {
      return React.createElement("option", {
        "key": child.path,
        "value": child.path
      }, child.title);
    });
    docPages = childPages.map((function(_this) {
      return function(child) {
        var isActive;
        isActive = _this.isActive(child.path);
        return (
          <li key={child.path} style={{float: 'none'}}>
            <Link
              to={child.path}
              style={{
                textDecoration: 'none'
              }}
            >
              {isActive ? <strong>{child.title}</strong> : child.title }
            </Link>
          </li>
        )
      };
    })(this));

    return (
      <div className="container terms">
        <div className="row">
          <div className="col-md-3">
            <nav>
              <h2>Syncano Terms</h2>
              <ul className="nav">
                {docPages}
              </ul>
            </nav>
          </div>
          <div className="col-md-9">
            <RouteHandler {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
});
