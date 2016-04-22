import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="hamburger-menu">
      <div className="inner">
        <ul>
          <li>
            <Link
              to="/features/"
              className="button button--noborder"
              activeClassName="is-active"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/pricing/"
              className="button button--noborder"
              activeClassName="is-active"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/docs/"
              className="button button--noborder"
              activeClassName="is-active"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
              className="button button--noborder"
              activeClassName="is-active"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
