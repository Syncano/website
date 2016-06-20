import React, { Component } from 'react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ContactForm from '../ContactForm';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';

export default () => {
  return (
    <ModalWrapper modalName="supportTicket">
      <div className="modal-box__content">
        <div className="inner">
          <h2>Create support ticket</h2>
          <ContactForm
            sendToEmail={APP_CONFIG.supportFormEmail}
            subject="Support Form Submission from syncano.io"
            buttonLabel="Create Ticket"
            buttonIsFeatured={true}
          >
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              autofocus
              required
            />
            <FormInput
              type="email"
              validations="isEmail"
              name="_replyto"
              placeholder="E-mail address"
              required
            />
            <FormTextarea
              name="message"
              placeholder="Describe your issue"
              required
            />
          </ContactForm>
        </div>
      </div>
    </ModalWrapper>
  );
};
