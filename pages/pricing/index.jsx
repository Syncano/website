import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default () => (
  <DocumentTitle title="Pricing">
    <div>
      <h2>Pricing</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);
