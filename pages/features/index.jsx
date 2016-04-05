import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title="Features">
    <div>
      <h2>Features</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);
