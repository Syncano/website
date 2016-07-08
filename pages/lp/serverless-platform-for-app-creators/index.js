import React from 'react';
import { LandingPageContent } from '../../../components';

export default () => {
  return (
    <LandingPageContent
      heroHeadline={<span>Serverless platform<br />for app creators</span>}
      heroTextline={`Increase your productivity, focus on new features, and scale beyond millions of users without
        managing servers.`}
    />
  );
};
