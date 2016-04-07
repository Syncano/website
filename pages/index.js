import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import Hero from '../components/Hero';
import Platforms from '../components/Platforms';

export default () => (
  <DocumentTitle title="Syncano">
    <div>
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
      <Platforms />
    </div>
  </DocumentTitle>
);
