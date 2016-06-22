import React from 'react';
import { ContactFormSection, CTASection, Footer, OfficeAddresses, PageHeader, PageHelmet } from '../../components';

export default () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Get in touch with us | Syncano"
        mixpanelTitle="Contact Us"
        description="Get in touch with us, write your feedback or just say hi! Use the form or just drop us an email."
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Get in touch with us"
        textline={
          <span>
            {`Use the form below or drop us an email at `}
            <a href="mailto:hello@syncano.io" target="_blank">hello@syncano.io</a>
          </span>
        }
      />
      <ContactFormSection />
      <OfficeAddresses />
      <CTASection />
      <Footer />
    </div>
  );
};
