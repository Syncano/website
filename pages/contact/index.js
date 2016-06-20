import React from 'react';
import {
  ContactForm,
  ContactFormSection,
  CTASection,
  Footer,
  FormInput,
  FormTextarea,
  OfficeAddresses,
  PageHeader,
  PageHelmet
} from '../../components';

export default () => {
  return (
    <div>
      <PageHelmet
        title="Get in touch with us | Syncano"
        mixpanelTitle="Contact Us"
        description="Get in touch with us, write your feedback or just say hi! Use the form or just drop us an email."
      />
      <PageHeader
        headline="Get in touch with us"
        textline={<span>Use the form below or drop us an email at <a href="mailto:hello@syncano.io" target="_blank">hello@syncano.io</a></span>}
      />
      <ContactFormSection>
        <ContactForm
          subject="Contact Form Submission from syncano.io"
          buttonLabel="Send message"
        >
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <FormInput
            type="email"
            name="_replyto"
            placeholder="E-mail address"
            validations="isEmail"
            required
          />
          <FormTextarea
            name="message"
            placeholder="Message"
            required
          />
        </ContactForm>
      </ContactFormSection>
      <OfficeAddresses />
      <CTASection />
      <Footer />
    </div>
  );
};
