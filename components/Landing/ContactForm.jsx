const isBrowser = typeof window !== 'undefined';
const Syncano = isBrowser ? require('syncano') : undefined;

import React from 'react';
import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';
import config from '../../config/';

export default React.createClass({

  getInitialState() {
    return {
      canSubmit: true,
      validationErrors: {}
    }
  },

  getStyles() {
    return {
      base: {
        height: 48,
        width: '100%',
        maxWidth: 330,
        margin: '0 auto'
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

  getErrors() {
    let errors = this.state.validationErrors;

    if (_.isEmpty(errors)) {
      return null;
    }

    return (
      <div className="alert alert-danger" role="alert" style={{margin: '0 auto 20px', maxWidth: 330}}>
        {_.map(errors, (error, index) => <div style={{textAlign: 'left'}}><strong>{_.capitalize(index)}:</strong> {error[0]}</div>)}
      </div>
    );
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
      this.setState({validationErrors: JSON.parse(error.message)});
    });
  },

  render() {
    const styles = this.getStyles();

    return (
      <Formsy.Form
        className="contact"
        onValidSubmit={this.submit}
      >
        {this.getErrors()}
        <div className="form-group" id="email">
          <Input style={styles.base} layout="elementOnly" validations="isEmail" type="email" name="email" placeholder="Email" required/>
        </div>
        <div className="form-group" id="password">
          <Input style={styles.base} layout="elementOnly" type="password" name="password" placeholder="Password" required/>
        </div>
        <input type="submit" value="Sign Up for Free" className="btn btn-dark-blue cta-button" style={{width: '100%', background: '#ffcc00', color: '#000', paddingTop: 12, paddingBottom: 12}} disabled={!this.state.canSubmit}/>
      </Formsy.Form>
    )
  }
});