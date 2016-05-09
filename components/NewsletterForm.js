import React from 'react';
import Formsy from 'formsy-react';
import NewsletterFormInput from './NewsletterFormInput';

export default React.createClass({
  getInitialState() {
    return {
      completed: false
    }
  },

  submit(model) {
    const { email } = model;

    analytics.alias(email);
    analytics.identify(email, {
      email: email,
      'Lifecycle stage': 'lead',
      source: 'Newsletter'
    });
    analytics.track('Subscribed to newsletter', {
      email: email
    });
    this.setState({
      completed: true
    });
  },

  renderForm() {
    return (
      <Formsy.Form onValidSubmit={this.submit}>
        <div className="newsletter-form__field">
          <NewsletterFormInput
            type="email"
            name="email"
            validations="isEmail"
            placeholder="E-mail address"
            required
          />
          <button className="newsletter-form__field__button">
            Sign Up
          </button>
        </div>
      </Formsy.Form>
    )
  },

  renderThankyou() {
    return (
      <div className="newsletter-form__alert">
        <p>Thank you for subscribing.</p>
      </div>
    )
  },

  render() {
    const { completed } = this.state;

    return (
      <div className="newsletter-form">
        {completed ? this.renderThankyou() : this.renderForm()}
      </div>
    )
  }
});
