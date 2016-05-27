import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';
import config from '../../config/';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  };

  submit = (model) => {
    const { contactFormEmail } = config;
    const action = `//formspree.io/${contactFormEmail}`;

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
      <p>Sorry about that. Please write us at <a href="mailto:hello@syncano.io">hello@syncano.io</a></p>
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
            value="Contact Form Submission from syncano.io"
          />
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <FormInput
            type="email"
            name="_replyto"
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
            Send message
          </button>
        </Formsy.Form>
      </div>
    );
  };

  render = () => {
    const { status } = this.state;

    return (
      <div className="contact-form">
        <div className="inner">
          <div className="contact-form__box">
            {status ? this.renderStatus(status) : this.renderForm()}
          </div>
        </div>
      </div>
    );
  };
};
