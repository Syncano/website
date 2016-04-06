import React from 'react';
import DocumentTitle from 'react-document-title';
import Hero from '../components/Hero';
import { Link } from 'react-router';

export default () => (
  <DocumentTitle title="Syncano">
    <Hero
      headline="Rethink how you build apps"
      textline="A complete platform to orchestrate your app's ecosystem."
      variant="home"
    >
      <Link
        to="/about/"
        className="button button-large button-featured"
      >
        Get Started for Free
      </Link>
    </Hero>
  </DocumentTitle>
);
