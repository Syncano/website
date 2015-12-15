const isBrowser = typeof window !== 'undefined';
const Syncano = isBrowser ? require('syncano') : undefined;

import React from 'react';
import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';
import config from '../../config/';

export default React.createClass({

  submit(model) {
    let syncano = new Syncano({baseUrl: config.apiUrl});

    syncano.register({email: model.email, password: model.password}).then((data) => {
      this.setState({converted: true});
      let redirectUrl = `${config.dashboardUrl}?token=${data.account_key}`;
      window.location.href = redirectUrl;
    }).catch((error) => {
      console.error('error', error);
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
        <div className="form-group" id="email">
          <Input layout="elementOnly" validations="isEmail" type="email" name="email" placeholder="Email" required/>
        </div>
        <div className="form-group" id="password">
          <Input layout="elementOnly" type="password" name="password" placeholder="Password" required/>
        </div>
        <input type="submit" value="Sign Up for Free" className="btn btn-dark-blue" style={{width: '100%', background: '#ffcc00', color: '#000'}}/>
      </Formsy.Form>
    )
  }
});