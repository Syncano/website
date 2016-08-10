import React from 'react';
import { LandingPageHero } from '../../../components';

export default () => {
  return (
    <LandingPageHero
      title="Mobile backend as a service for your app | Syncano"
      headline={<span>Mobile backend<br />as a service<br />for your app</span>}
      textline={`An MBaaS platform for building mobile apps. Increase productivity, focus on new features, and scale
        without managing servers.`}
    />
  );
};
