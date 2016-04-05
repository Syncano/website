import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title="Pricing">
    <div>
      <h2>Pricing</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);
