import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default () => {
  return (
    <DocumentTitle title="Contact">
      <div>
        <h2>Contact</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </DocumentTitle>
  );
};
