import React from 'react';
import { CTASection, Footer, PageHeader, PageHelmet, ArchitecturePresentationSection } from '../../components';

export default () => (
  <div>
    <PageHelmet
      title="Syncano Serverless Architecture"
      mixpanelTitle="Serverless Architecture"
      description={`Take a look at this 3D interactive presentation that explains our platform architecture. Click to
        explore!`}
    />
    <PageHeader
      headline="Syncano Serverless Architecture"
      textline={`Take a look at this 3D interactive presentation that explains our platform architecture. Click to
        explore!`}
    />
    <ArchitecturePresentationSection />
    <CTASection />
    <Footer />
  </div>
);
