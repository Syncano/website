import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import SupportFormInput from './SupportFormInput';
import SupportFormTextarea from './SupportFormTextarea';
import config from '../../config/';

export default class SupportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  };

  submit = (model) => {
    const { supportFormEmail } = config;
    const action = `//formspree.io/${supportFormEmail}`;

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
      <p>Sorry about that. Please write us at <a href="mailto:support@syncano.io" target="_blank">support@syncano.io</a></p>
    </div>
  );

  getThankYouMessage = () => (
    <div>
      <p><strong>Thank you! Your message has been received.</strong></p>
      <p>We'll get back to you soon. In the meantime, check out some of
      our <a href="https://www.syncano.io/blog/">recent blog articles</a>.
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
          <SupportFormInput
            type="hidden"
            name="_subject"
            value="Support Form Submission from syncano.io"
          />
          <SupportFormInput
            type="email"
            name="email"
            placeholder="E-mail address"
            validations="isEmail"
            required
          />
          <SupportFormTextarea
            name="message"
            placeholder="Message"
            required
          />
          <SupportFormInput
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
