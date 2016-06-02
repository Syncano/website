import React from 'react';
import Helmet from 'react-helmet';
import { ContactForm, CTASection, Footer, OfficeAddresses, PageHeader } from '../../components';

export default ({ location }) => {
  const { pathname } = location;
  const title = 'Get in touch with us | Syncano';
  const description = `Get in touch with us, write your feedback or just say hi! Use the form or just drop us an
    email.`;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: `${description}`
          },
          {
            name: 'mixpanelTitle',
            content: 'Contact Us'
          },
          {
            property: 'og:title',
            content: `${title}`
          },
          {
            property: 'og:url',
            content: `http://www.syncano.io${pathname}`
          },
          {
            name: 'twitter:title',
            content: `${title}`
          },
          {
            name: 'twitter:description',
            content: `${description}`
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
