import React from 'react';
import { ContactForm, CTASection, Footer, OfficeAddresses, PageHeader, PageHelmet } from '../../components';

export default ({ location }) => {
  const { pathname } = location;

  return (
    <div>
      <PageHelmet
        title="Get in touch with us | Syncano"
        mixpanelTitle="Contact Us"
        description={`Get in touch with us, write your feedback or just say hi! Use the form or just drop us an email.`}
        pathname={pathname}
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
