import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
import ContactForm from '../ContactForm';
import FormInputElement from '../FormInputElement';

export default () => {
  return (
    <ModalWrapper modalName="supportTicket">
      <div className="modal-box__content">
        <div className="inner">
          <ContactForm
            title="Create support ticket"
            sendToEmail={APP_CONFIG.supportFormEmail}
            subject="Support Form Submission from syncano.io"
            buttonLabel="Create Ticket"
            buttonIsFeatured={true}
            thankYouMessage={
              <div>
                <h2>Thank you!</h2>
                <p><strong>Your message has been received.</strong></p>
                <p>
                  We'll get back to you soon. In the meantime,<br />
                  take a look at our <a href="http://docs.syncano.io/" target="_blank">Docs</a>.
                </p>
              </div>
            }
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
              placeholder="Describe your issue"
              validations={{ isExisty: true }}
            />
          </ContactForm>
        </div>
      </div>
    </ModalWrapper>
  );
};
