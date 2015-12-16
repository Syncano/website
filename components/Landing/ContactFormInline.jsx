const isBrowser = typeof window !== 'undefined';
const Syncano = isBrowser ? require('syncano') : undefined;

import React from 'react';
import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';
import config from '../../config/';

export default React.createClass({

  getInitialState() {
    return {
      canSubmit: true
    }
  },

  getStyles() {
   return {
     base: {
       height: 60,
       width: '100%'
     },
     column: {
       padding: '0 5px'
     },
     input: {

     },
     submit: {
       padding: 0
     }
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
    this.disableButton();

    let syncano = new Syncano({baseUrl: config.apiUrl});

    syncano.register({email: model.email, password: model.password}).then((data) => {
      this.setState({converted: true});
      let redirectUrl = `${config.dashboardUrl}?token=${data.account_key}`;
      window.location.href = redirectUrl;
    }).catch((error) => {
      this.enableButton();
      console.error('error', error);
    });
  },

  render() {
    const styles = this.getStyles();

    return (
      <Formsy.Form
        className="contact form-inline"
        onValidSubmit={this.submit}
      >
        <div className="form-group col-sm-4" id="email" style={styles.column}>
          <Input style={styles.base} layout="elementOnly" validations="isEmail" type="email" name="email" placeholder="Email" required/>
        </div>
        <div className="form-group col-sm-4" id="password" style={styles.column}>
          <Input style={styles.base} layout="elementOnly" type="password" name="password" placeholder="Password" required/>
        </div>
        <div className="form-group col-sm-4" style={styles.column}>
          <input type="submit" value="Sign Up for Free" className="btn btn-dark-blue cta-button" style={{background: '#ffcc00', color: '#000'}} disabled={!this.state.canSubmit}/>
        </div>
      </Formsy.Form>
    )
  }
});