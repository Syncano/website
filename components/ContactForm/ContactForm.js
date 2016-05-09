import React, { Component } from 'react';
import Formsy from 'formsy-react';
import axios from 'axios';
import ContactFormInput from './ContactFormInput';
import ContactFormTextarea from './ContactFormTextarea';
import config from '../../config/';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };

    this.submit = this.submit.bind(this);
  };

  submit(model) {
    const { contactFormEmail } = config;
    const action = `//formspree.io/${contactFormEmail}`;

    axios.post(action, model)
      .then(({ statusText }) => {
        if (statusText == 'OK') {
          this.showThankYou();
        } else {
          this.showError();
        }
      })
      .catch(() => this.showError());
  };

  showError() {
    this.setState({ status: 'error' });
  };

  showThankYou() {
    this.setState({ status: 'done' });
  };

  renderStatus(status) {
    let message = (
      <div>
        <p><strong>There was an error sending your message.</strong></p>
        <p>Please try again later or <a href="https://syncano-community.slack.com/" target="_blank">join the
        community</a> on Slack.</p>
      </div>
    );

    if (status == 'done') {
      message = (
        <div>
          <p><strong>Thank you! Your message has been received.</strong></p>
          <p>We’ll get back to you soon. In the mean time, check out some of our
          recent <a href="https://www.syncano.io/blog/">blog articles</a>.</p>
        </div>
      );
    }

    return (
      <div className="contact-form__box__message">
        {message}
      </div>
    );
  };

  renderForm() {
    return (
      <div className="contact-form__box__form form">
        <Formsy.Form onValidSubmit={this.submit}>
          <ContactFormInput
            type="hidden"
            name="_subject"
            value="Contact Form Submission from syncano.io"
          />
          <ContactFormInput
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <ContactFormInput
            type="email"
            name="_replyto"
            placeholder="E-mail address"
            validations="isEmail"
            required
          />
          <ContactFormTextarea
            name="message"
            placeholder="Message"
            required
          />
          <ContactFormInput
            name="_gotcha"
            style={{ display: 'none' }}
          />
          <button className="button button--large button--featured">
            Send
          </button>
        </Formsy.Form>
      </div>
    );
  };

  render() {
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
