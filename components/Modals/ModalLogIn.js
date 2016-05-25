import React, { Component } from 'react';
import Formsy from 'formsy-react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import AuthHOC from '../AuthHOC';

class ModalLogIn extends Component {
  componentDidUpdate(props, state, context) {
    const isOpen = this.context.modals.logIn.isOpen;
    const wasOpen = context.modals.logIn.isOpen;

    if (isOpen !== wasOpen && isOpen) {
      this.trackPageView();
    }
  }

  trackPageView() {
    analytics.page('Website', {
      Page: 'Login'
    });
  }

  render() {
    const { auth, modals } = this.context;
    const isFormInvalid = auth.status !== 'done' && auth.message;

    const inputClassName = classNames({
      'form__input': true,
      'is-invalid': isFormInvalid
    });

    const renderErrorMessage = (message = 'Oops! That email / password combination is not valid.') => (
      <div className="form__message form__error-message">
        <p>{message}</p>
      </div>
    );

    return (
      <ModalWrapper modalName="logIn">
        <div className="modal-box__content">
          <div className="inner">
            <h2>Welcome back!</h2>
            <p>Log in to the Syncano Dashboard below:</p>

            <div className="modal-box__content_form form">
              <Formsy.Form onValidSubmit={(model) => auth.handlePasswordAuth('login', model)}>
                <ModalTextField
                  className={inputClassName}
                  name="email"
                  validations="isEmail"
                  type="email"
                  placeholder="E-mail address"
                  autofocus
                  required
                />
                <ModalTextField
                  className={inputClassName}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {isFormInvalid && renderErrorMessage(auth.message)}
                <button className="button button--large button--featured">
                  Take me to the Dashboard
                </button>
              </Formsy.Form>
            </div>
            <div className="modal-box__content__login-options">
              <h3 className="modal-box__content__login-options__headline">
                <span>or Log in with</span>
              </h3>
              <div className="modal-box__content__login-options__buttons">
                <ul>
                  <li>
                  <span
                    className="button"
                    onClick={() => auth.handleSocialAuth('google')}
                  >
                    <img
                      src={require('./images/google.svg')}
                      alt="Log in with Google"
                    />
                    <span>Google</span>
                  </span>
                  </li>
                  <li>
                  <span
                    className="button"
                    onClick={() => auth.handleSocialAuth('github')}
                  >
                    <img
                      src={require('./images/github.svg')}
                      alt="Log in with GitHub"
                    />
                    <span>GitHub</span>
                  </span>
                  </li>
                  <li>
                  <span
                    className="button"
                    onClick={() => auth.handleSocialAuth('facebook')}
                  >
                    <img
                      className="facebook"
                      src={require('./images/facebook.svg')}
                      alt="Log in with Facebook"
                    />
                    <span>Facebook</span>
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="modal-box__footer">
          <div className="modal-box__footer__column">
          <span onClick={modals.signUp.open}>
            Don’t have an account? <strong>Sign up.</strong>
          </span>
          </div>
          <div className="modal-box__footer__column">
          <span onClick={modals.resetPassword.open}>
            Forgot your password?
          </span>
          </div>
        </footer>
      </ModalWrapper>
    );
  }
}

ModalLogIn.contextTypes = {
  auth: React.PropTypes.object,
  modals: React.PropTypes.object
};

export default AuthHOC(ModalLogIn);
