import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
import ContactForm from '../ContactForm';
import FormInputElement from '../FormInputElement';

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
            <FormInputElement
              type="text"
              name="name"
              placeholder="Name"
              validations={{ isExisty: true }}
              autofocus
            />
            <FormInputElement
              type="email"
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
              placeholder="Describe your issue"
              validations={{ isExisty: true }}
            />
          </ContactForm>
        </div>
      </div>
    </ModalWrapper>
  );
};
