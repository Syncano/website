import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

export default class SupportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  };

  submit = (model) => {
    const action = `//formspree.io/${APP_CONFIG.supportFormEmail}`;

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
      <p>Sorry about that. Please write us at <a href="mailto:support@syncano.io">support@syncano.io</a>.</p>
    </div>
  );

  getThankYouMessage = () => (
    <div>
      <p><strong>Thank you! Your message has been received.</strong></p>
      <p>We'll get back to you soon. In the meantime, check out some of
      our <a href="https://www.syncano.io/blog/" target="_blank">recent blog articles</a>.
      </p>
    </div>
  );

  renderStatus = (status) => (
    <div className="contact-form__box__message">
      {status === 'done' ? this.getThankYouMessage() : this.getErrorMessage() }
    </div>
  );

  renderForm = () => {
    return (
      <div className="contact-form__box__form form">
        <Formsy.Form onValidSubmit={this.submit}>
          <FormInput
            type="hidden"
            name="_subject"
            value="Support Form Submission from syncano.io"
          />
          <FormInput
            type="email"
            name="email"
            placeholder="E-mail address"
            validations="isEmail"
            required
          />
          <FormTextarea
            name="message"
            placeholder="Message"
            required
          />
          <FormInput
            name="_gotcha"
            style={{ display: 'none' }}
          />
          <button className="button button--large button--filled">
            Send
          </button>
        </Formsy.Form>
      </div>
    );
  };

  render = () => {
    const { status } = this.state;

    return (
      <div className="contact-form contact-form--support-form">
        <div className="inner">
          <div className="contact-form__box">
            {status ? this.renderStatus(status) : this.renderForm()}
          </div>
        </div>
      </div>
    );
  };
};
