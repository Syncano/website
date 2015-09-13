import React from 'react';
import Radium from 'radium';

import Formsy from 'formsy-react';
import Input from './NewsletterInput';


export default Radium(React.createClass({

  getInitialState() {
    return {
      canSubmit: false,
      completed: false
    }
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submit(model) {
    let subscribeEmail = model.email;
    analytics.alias(subscribeEmail);
    analytics.identify(subscribeEmail, {
      email: subscribeEmail,
      'Lifecycle stage': 'lead',
      source: 'Newsletter'
    });
    analytics.track('Subscribed to newsletter', {email: subscribeEmail});
    this.setState({
      completed: true
    })
  },

  getStyles() {
    return {
      submit: {
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid #E9E9E9',
        marginLeft: -3
      }
    }
  },

  renderForm() {
    return (
      <Formsy.Form className="form-inline" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <Input name="email" validations="isEmail" validationError="This is not a valid email" placeholder="you@example.com" required/>
        <button type="submit" disabled={!this.state.canSubmit} style={[this.getStyles().submit, this.props.submitStyle]} className="btn btn-default">Join</button>
      </Formsy.Form>
    )
  },

  renderThankyou() {
    return (
      <div className="alert alert-success alert-dismissible show" role="alert" id="successful-subscribe">
        Thank you for subscribing.
      </div>
    )
  },

  render() {
    let content = this.state.completed ? this.renderThankyou() : this.renderForm();

    return (
      <div className="newsletter">
        <h4>Join Our Newsletter</h4>
        {content}
      </div>
    )
  }
}));