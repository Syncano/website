import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title='404'>
    <div>
      <h2>404</h2>
      <Link to={prefixLink('/')}>Back to Home</Link>
    </div>
  </DocumentTitle>
);