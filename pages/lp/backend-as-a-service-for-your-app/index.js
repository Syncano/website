import React from 'react';
import { LandingPageHero } from '../../../components';

export default () => {
  return (
    <LandingPageHero
      title="Backend as a service for your app"
      headline={<span>Backend as a service<br />for your app</span>}
      textline={`A BaaS platform for building powerful apps. Increase productivity, focus on new features, and scale
        without managing servers.`}
    />
  );
};
