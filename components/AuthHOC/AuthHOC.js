import React, { Component } from 'react';
import Syncano from 'syncano';
import Hello from './Hello';

export default (ComposedComponent) => (
  class AuthHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        status: null,
        message: null
      };
    };

    static childContextTypes = {
      auth: React.PropTypes.object
    };

    getChildContext = () => {
      const auth = {
        status: this.state.status,
        message: this.state.message,
        resetStatus: this.resetStatus,
        handlePasswordAuth: this.handlePasswordAuth,
        handlePasswordReset: this.handlePasswordReset,
        handleSocialAuth: this.handleSocialAuth
      };

      return { auth };
    };

    resetStatus = () => {
      this.setState({
        status: null,
        message: null
      });
    };

    setStatus = (status, message) => {
      this.setState({
        status: status,
        message: message
      });
    };

    handlePasswordAuth = (type, { email, password }) => {
      const { Account } = Syncano({ baseUrl: APP_CONFIG.syncanoAPIBaseUrl });

      this.resetStatus();
      this.setStatus('processing');

      Account[type]({ email, password })
        .then((data) => this.redirectToDashboard(data.account_key))
        .catch((error) => this.setStatus(error.status, error.message));
    };

    handlePasswordReset = ({ email }) => {
      const { Account } = Syncano({ baseUrl: APP_CONFIG.syncanoAPIBaseUrl });

      this.resetStatus();
      this.setStatus('processing');

      Account.resetPassword(email)
        .then((data) => this.setState({ status: 'done' }))
        .catch((error) => this.setStatus(error.status, error.message));
    };

    handleSocialAuth = (network) => {
      const { Account } = Syncano({ baseUrl: APP_CONFIG.syncanoAPIBaseUrl });

      Hello(network).login().then((data) => {
        const { access_token } = data.authResponse;

        if (data.network === 'google') {
          data.network = 'google-oauth2';
        }

        Account.socialLogin(data.network, access_token)
          .then((data) => this.redirectToDashboard(data.account_key))
          .catch((error) => this.setStatus(error.status, error.message));
      }, (error) => this.setState({
        message: error.error.message
      }));
    };

    redirectToDashboard = (token) => {
      const redirectUrl = `${APP_CONFIG.dashboardUrl}#/login?token=${token}`;

      window.location.href = redirectUrl;
    };

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    };
  }
);
