import React from 'react';
import ContactForm from '../ContactForm';
import FormInputElement from '../FormInputElement';

export default () => {
  return (
    <div className="contact-form-section">
      <div className="inner">
        <div className="contact-form-section__box">
          <ContactForm
            subject="Contact Form Submission from syncano.io"
            buttonLabel="Send message"
          >
            <FormInputElement
              type="text"
              name="name"
              placeholder="Name"
              validations={{ isExisty: true }}
              autofocus
            />
            <FormInputElement
              type="text"
              name="_replyto"
              placeholder="E-mail address"
              validations={{
                isExisty: true,
                isEmail: true
              }}
            />
            <FormInputElement
              element="textarea"
              name="message"
              placeholder="Message"
              validations={{ isExisty: true }}
            />
          </ContactForm>
        </div>
      </div>
    </div>
  );
};
