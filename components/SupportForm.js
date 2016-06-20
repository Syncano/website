import React, { Component } from 'react';
import Formsy from 'formsy-react';
import ContactForm from './ContactForm';
import ContactFormSection from './ContactFormSection';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

export default class SupportForm extends Component {
  render = () => {
    return (
      <ContactFormSection variant="support-form">
        <ContactForm
          sendToEmail={APP_CONFIG.supportFormEmail}
          subject="Support Form Submission from syncano.io"
        >
          <FormInput
            type="email"
            name="email"
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
    );
  };
};
