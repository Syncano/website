import React from 'react';
import {Navigation} from 'react-router';
import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';
import request from 'superagent';

export default React.createClass({

  mixins: [Navigation],

  getInitialState() {
    return {
      canSubmit: false
    }
  },

  getDefaultProps() {
    return {
      mail: 'support@syncano.com'
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
    request.post(`//formspree.io/${this.props.mail}`).type('form').send(model).end(() => {
      this.transitionTo('/thank-contacting-us/');
    });
  },

  render() {

    return (
      <Formsy.Form
        className="contact"
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <input type="hidden" name="_subject" value="Contact Form Submission from syncano.io"/>
        <input name="_gotcha" style={{display: 'none'}}/>
        <input type="hidden" name="_next" value="/thank-contacting-us/"/>
        <div className="form-group" id="name">
          <Input layout="elementOnly" name="name" placeholder="Name" required/>
        </div>
        <div className="form-group" id="email">
          <Input validations="isEmail" layout="elementOnly" type="email" name="_replyto" placeholder="Email" required/>
        </div>
        <div className="form-group">
          <Textarea layout="elementOnly" rows={3} name="message" placeholder="Message" />
        </div>
        <input type="submit" value="Send" className="btn btn-dark-blue" disabled={!this.state.canSubmit}/>
      </Formsy.Form>
    )
  }
});