import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import FormInput from './FormInput';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  };

  submit = (model) => {
    const { sendToEmail } = this.props;
    const email = sendToEmail || APP_CONFIG.contactFormEmail;
    const action = `//formspree.io/${email}`;

    this.setState({ status: 'processing' });

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
      <p>{`We'll get back to you soon. In the meantime, check out some of our `}
      <a href="https://www.syncano.io/blog/" target="_blank">recent blog articles</a>.</p>
    </div>
  );

  renderStatus = (status) => (
    <div className="contact-form__box__message">
      {status === 'done' ? this.getThankYouMessage() : this.getErrorMessage()}
    </div>
  );

  renderForm = () => {
    const { status } = this.state;
    const { subject, children, buttonLabel } = this.props;

    return (
      <div className="form">
        <Formsy.Form onValidSubmit={this.submit}>
          <FormInput
            type="hidden"
            name="_subject"
            value={subject}
          />
          <FormInput
            name="_gotcha"
            style={{ display: 'none' }}
          />
          {children}
          <button
            className="button button--large button--filled form__submit"
            disabled={status === 'processing'}
          >
            {buttonLabel || 'Send'}
          </button>
        </Formsy.Form>
      </div>
    );
  };

  render = () => {
    const { status } = this.state;

    return (
      <div className="contact-form">
        {status && status != 'processing' ? this.renderStatus(status) : this.renderForm()}
      </div>
    );
  };
};
