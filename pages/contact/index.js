import React from 'react';
import Helmet from 'react-helmet';
import { ContactForm, CTASection, Footer, OfficeAddresses, PageHeader } from '../../components';

export default () => {
  return (
    <div>
      <Helmet
        title="Get in touch with us | Syncano"
        meta={[
          {
            name: 'description',
            content: 'Get in touch with us, write your feedback or just say hi! Use the form or just drop us an email.'
          },
          {
            name: 'mixpanelTitle',
            content: 'Contact Us'
          }
        ]}
      />
      <PageHeader
        headline="Get in touch with us"
        textline={<span>Use the form below or drop us an email at <a href="mailto:hello@syncano.io" target="_blank">hello@syncano.io</a></span>}
      />
      <ContactForm />
      <OfficeAddresses />
      <CTASection />
      <Footer />
    </div>
  );
};
