import React from 'react';
import ContactForm from '../ContactForm';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';

export default () => {
  return (
    <div className="contact-form-section">
      <div className="inner">
        <div className="contact-form-section__box">
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
        </div>
      </div>
    </div>
  );
};
