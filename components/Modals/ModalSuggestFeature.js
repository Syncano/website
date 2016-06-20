import React, { Component } from 'react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ContactForm from '../ContactForm';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';

export default () => {
  return (
    <ModalWrapper modalName="suggestFeature">
      <div className="modal-box__content">
        <div className="inner">
          <h2>Suggest a feature</h2>
          <ContactForm
            subject="Suggest a Feature Form Submission from syncano.io"
            buttonLabel="Send message"
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
              placeholder="Describe suggested feature"
              required
            />
          </ContactForm>
        </div>
      </div>
    </ModalWrapper>
  );
};
