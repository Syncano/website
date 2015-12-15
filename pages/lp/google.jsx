import React from 'react';
import request from 'superagent';
import { Hello } from '../../components/';
import config from '../../config/';

export default React.createClass({

  handleClick(event) {
    event.preventDefault();

    Hello('google').login().then((data) => {
      if (data.network === 'google') {
        data.network = 'google-oauth2';
      }

      request
        .post(`${config.apiUrl}v1/account/auth/${data.network}/`)
        .send({access_token: data.authResponse.access_token})
        .end((err, res) => {
          console.error(err, res);
          if(!err) {
            this.setState({converted: true});
            let redirectUrl = `${config.dashboardUrl}?token=${res.body.account_key}`;
            window.location.href = redirectUrl;
          }
        });
    }, (error) => {
      console.error('error', error);
    });
  },

  render() {
    return (
      <a href="https://dashboard.syncano.io/#/signup" onClick={this.handleClick} className="btn btn-dark-blue cta-button mixpanel-btn" id="homepage-hero" style={{marginBottom: 0, background: '#ffcc00', color: '#000'}}>SIGN UP FOR FREE</a>
    )
  }
});
