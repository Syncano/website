import React, { Component } from 'react';
import Formsy from 'formsy-react';
import request from 'superagent';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  };

  submit(model) {
    const email = 'wojciech.pasinski+test4723645723654@syncano.com';

    request.post(`//formspree.io/${email}`).type('form').send(model).end(this.showThankyou);
  };

  showThankyou() {
    this.setState({ completed: true });
  };

  renderForm() {
    return (
      <div className="contact-form__box__form form">
        <Formsy.Form onValidSubmit={this.submit} method="POST">
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="form__input"
            type="email"
            name="_replyto"
            placeholder="E-mail address"
            validations="isEmail"
            required
          />
          <textarea
            className="form__textarea"
            name="message"
            placeholder="Message"
            required
          />
          <input
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

  renderThankyou() {
    return (
      <div className="contact-form__box__message">
        <p>
          <strong>Thank you! Your message has been received.</strong>
        </p>
        <p>We’ll get back to you soon. In the mean time, check out some of our recent <a href="https://www.syncano.io/blog/">blog articles</a>.</p>
      </div>
    );
  };

  render() {
    const { completed } = this.state;

    return (
      <div className="contact-form">
        <div className="inner">
          <div className="contact-form__box">
            {completed ? this.renderThankyou() : this.renderForm()}
          </div>
        </div>
      </div>
    );
  };
};
