import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import ModalTextarea from './ModalTextarea';

class ModalSuggestFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  };

  submit = (model) => {
    const action = `//formspree.io/${APP_CONFIG.contactFormEmail}`;

    axios.post(action, model)
      .then(this.onSubmitSuccess)
      .catch(this.showError);
  };

  onSubmitSuccess = ({ statusText }) => {
    statusText === 'OK' ? this.showThankYou() : this.showError();
  };

  showError = () => {
    this.setState({ status: 'error' });
  };

  showThankYou = () => {
    this.setState({ status: 'done' });
  };

  getErrorMessage = () => (
    <div>
      <p><strong>There was an error sending your message.</strong></p>
      <p>Sorry about that. Please write us at <a href="mailto:hello@syncano.io">hello@syncano.io</a>.</p>
    </div>
  );

  getThankYouMessage = () => (
    <div>
      <p><strong>Thank you! Your message has been received.</strong></p>
      <p>{`We'll get back to you soon. In the meantime, check out some of our`}
      <a href="https://www.syncano.io/blog/" target="_blank">recent blog articles</a>.</p>
    </div>
  );

  renderStatus = (status) => (
    <div className="contact-form__box__message">
      {status === 'done' && this.getThankYouMessage() }
      {status === 'error' && this.getErrorMessage() }
    </div>
  );

  getInputClassName = () => {
    const { status } = this.state;

    return classNames({
      'form__input': true,
      'is-invalid': (status === 400)
    });
  };

  getTextareaClassName = () => {
    const { status } = this.state;

    return classNames({
      'form__textarea': true,
      'is-invalid': (status === 400)
    });
  };

  renderForm = () => {
    const { status } = this.state;

    return (
      <div className="modal-box__content_form form">
        <Formsy.Form onValidSubmit={this.submit}>
          <ModalTextField
            type="hidden"
            name="_subject"
            value="Suggest a Feature Form Submission from syncano.io"
          />
          <ModalTextField
            className={this.getInputClassName()}
            type="text"
            name="name"
            placeholder="Name"
            autofocus
            required
          />
          <ModalTextField
            className={this.getInputClassName()}
            type="email"
            validations="isEmail"
            name="_replyto"
            placeholder="E-mail address"
            required
          />
          <ModalTextarea
            className={this.getTextareaClassName()}
            name="message"
            placeholder="Describe suggested feature"
            required
          />
          <ModalTextField
            name="_gotcha"
            style={{ display: 'none' }}
          />
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
    const { status } = this.state;

    return (
      <ModalWrapper modalName="suggestFeature">
        <div className="modal-box__content">
          <div className="inner">
            <h2>Suggest a feature</h2>
            {status ? this.renderStatus(status) : this.renderForm()}
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
