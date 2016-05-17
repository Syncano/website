import React, { Component } from 'react';
import Syncano from 'syncano';
import axios from 'axios';
import Hello from './Hello';
import config from '../../config/';

export default (ComposedComponent) => (
  class AuthHOC extends Component {
    constructor(props) {
      super(props);
    };

    static childContextTypes = {
      auth: React.PropTypes.object
    };

    getChildContext = () => {
      const auth = {
        handlePasswordAuth: this.handlePasswordAuth,
        handleSocialAuth: this.handleSocialAuth
      };

      return { auth };
    };

    handlePasswordAuth = (type, { email, password }) => {
      const { syncanoAPIBaseUrl } = config;
      const { Account } = Syncano({ baseUrl: syncanoAPIBaseUrl });

      Account[type]({ email, password })
        .then((data) => this.redirectToDashboard(data.account_key))
        .catch((error) => {
        // error message here
      });
    };

    handleSocialAuth = (network) => {
      Hello(network).login().then((data) => {
        const { access_token } = data.authResponse;

        if (data.network === 'google') {
          data.network = 'google-oauth2';
        }

        axios
          .post(`${config.syncanoAPIBaseUrl}v1/account/auth/${data.network}/`, { access_token })
          .then((response) => this.redirectToDashboard(response.data.account_key))
          .catch((error) => {
            // error message here
          });
      });
    };

    redirectToDashboard = (token) => {
      const { dashboardUrl } = config;
      const redirectUrl = `${dashboardUrl}?token=${token}`;

      window.location.href = redirectUrl;
    };

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    };
  }
);
