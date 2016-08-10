import React from 'react';
import { LandingPageHero } from '../../../components';

export default () => {
  return (
    <LandingPageHero
      title="Build realtime apps in half the time | Syncano"
      headline={<span>Build realtime apps<br />in half the time</span>}
      textline={`A platform for building realtime apps. Increase productivity, focus on new features, and scale without
        managing servers.`}
    />
  );
};
