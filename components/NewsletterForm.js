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
    const subscribeEmail = model.email;

    analytics.alias(subscribeEmail);
    analytics.identify(subscribeEmail, {
      email: subscribeEmail,
      'Lifecycle stage': 'lead',
      source: 'Newsletter'
    });
    analytics.track('Subscribed to newsletter', {
      email: subscribeEmail
    });

    this.setState({
      completed: true
    })
  },

  renderForm() {
    return (
      <Formsy.Form onSubmit={this.submit}>
        <div className="newsletter-form__field">
          <NewsletterFormInput
            name="email"
            validations="isEmail"
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
    const {completed} = this.state;
    const content = completed ? this.renderThankyou() : this.renderForm();

    return (
      <div className="newsletter-form">
        {content}
      </div>
    )
  }
});
