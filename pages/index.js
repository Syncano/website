import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Hero from '../components/Hero';
import Platforms from '../components/Platforms';
import TextWithImage from '../components/TextWithImage';

export default () => (
  <DocumentTitle title="Syncano">
    <div>
      <Hero
        variant="home"
        headline="Rethink how you build apps"
        textline="A complete platform to orchestrate your app’s ecosystem."
      >
        <Link
          to="/about/"
          className="button button-large button-featured"
        >
          Get Started for Free
        </Link>
      </Hero>
      <Platforms />
      <TextWithImage
        variant=""
        imageSrc={prefixLink('images/sample-illustration.svg')}
        headline="Focus on your app"
        textline="Forget about managing infrastructure and redundant code. Spend your time writing code specific for your app. Instantly scale to support millions of users without learning the nuts and bolts of handling servers."
      >
        <Link
          to="/about/"
          className="button"
        >
          View All Features
        </Link>
      </TextWithImage>
      <TextWithImage
        variant=""
        theme="purple"
        imageSrc={prefixLink('images/sample-illustration.svg')}
        headline="Customize your APIs and features"
        textline="Every app’s needs are different. With Sockets, we give you the flexibility to combine and configure the building blocks your application needs. The backend work is mostly done - you’ll be building stronger and better apps, faster!"
      >
        <Link
          to="/about/"
          className="button"
        >
          More About Sockets
        </Link>
      </TextWithImage>
    </div>
  </DocumentTitle>
);
