import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default () => (
  <DocumentTitle title="404">
    <div>
      <h2>404</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);
