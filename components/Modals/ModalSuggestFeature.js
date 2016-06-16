import React, { Component } from 'react';
import Formsy from 'formsy-react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import ModalTextarea from './ModalTextarea';

class ModalSuggestFeature extends Component {
  getInputClassName = () => {
    const status = 0;

    return classNames({
      'form__input': true,
      'is-invalid': (status === 400)
    });
  };

  getTextareaClassName = () => {
    const status = 0;

    return classNames({
      'form__textarea': true,
      'is-invalid': (status === 400)
    });
  };

  renderErrorMessage = () => (
    <div className="form__message form__error-message">
      <p>Oops! That email was not found.</p>
    </div>
  );

  renderSuccessMessage = () => (
    <div className="modal-box__content_form__success-message">
      <p>Check your inbox. We've sent instructions on how to reset your password.</p>
    </div>
  );

  renderForm = () => {
    const status = '';

    return (
      <div className="modal-box__content_form form">
        <Formsy.Form onValidSubmit="">
          <ModalTextField
            className={this.getInputClassName()}
            name="name"
            type="text"
            placeholder="Name"
            autofocus
            required
          />
          <ModalTextField
            className={this.getInputClassName()}
            name="email"
            validations="isEmail"
            type="email"
            placeholder="E-mail address"
            required
          />
          <ModalTextarea
            className={this.getTextareaClassName()}
            name="message"
            placeholder="Describe suggested feature"
            required
          />
          {this.renderErrorMessage()}
          <button
            className="button button--large button--featured"
            disabled={status === 'processing' || status === 'done'}
          >
            Send message
          </button>
        </Formsy.Form>
      </div>
    );
  };

  render = () => {
    const { modals } = this.context;

    return (
      <ModalWrapper modalName="suggestFeature">
        <div className="modal-box__content">
          <div className="inner">
            <h2>Suggest a feature</h2>

            {this.renderForm()}
          </div>
        </div>
      </ModalWrapper>
    );
  };
};

ModalSuggestFeature.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalSuggestFeature;
