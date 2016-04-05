import React from 'react';
import { Link } from 'react-router';

import './sitemap.scss';

export default () => (
  <div className="sitemap">
    <ul>
      <li><Link to="/pricing/">Pricing</Link></li>
      <li><Link to="/features/">Features</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/randomwordsfor404error/">404</Link></li>
    </ul>
  </div>
);
