import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
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
        variant="image-left"
        imageSrc={'images/sample-illustration.svg'}
        imageAlt="sample-illustration"
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
        variant="image-right"
        theme="purple"
        imageSrc={'images/sample-illustration.svg'}
        imageAlt="sample-illustration"
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
      <TextWithImage
        variant="image-left"
        imageSrc={'images/sample-illustration.svg'}
        imageAlt="sample-illustration"
        headline="Run server-side logic in the cloud"
        textline="With Scripts, run your code in response to events, updates to data, in-app activity or by a particular schedule. Use multiple languages, integrate with anything."
      >
        <Link
          to="/about/"
          className="button"
        >
          More About Scripts
        </Link>
      </TextWithImage>
    </div>
  </DocumentTitle>
);
