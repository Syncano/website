import React from 'react';
import DocumentTitle from 'react-document-title';

import Sitemap from '../components/sitemap';

export default () => (
  <DocumentTitle title="Syncano">
    <div>
      <Sitemap />
    </div>
  </DocumentTitle>
);
