import React, { Component } from 'react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ContactForm from '../ContactForm';
import FormInputElement from '../FormInputElement';

export default () => {
  return (
    <ModalWrapper modalName="suggestFeature">
      <div className="modal-box__content">
        <div className="inner">
          <h2>Suggest a feature</h2>
          <ContactForm
            subject="Suggest a Feature Form Submission from syncano.io"
            buttonLabel="Send message"
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
              placeholder="Describe suggested feature"
              validations={{ isExisty: true }}
            />
          </ContactForm>
        </div>
      </div>
    </ModalWrapper>
  );
};
