import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default () => (
  <DocumentTitle title="Features">
    <div>
      <h2>Features</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);
