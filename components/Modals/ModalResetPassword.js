import React from 'react';
import Formsy from 'formsy-react';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import AuthHOC from '../AuthHOC';

const ModalResetPassword = (props, { auth, modals }) => {
  return (
    <ModalWrapper modalName="resetPassword">
      <div className="modal-box__content">
        <div className="inner">
          <h2>Forgot your password?</h2>
          <p>We’ll email you instructions on how to reset it.</p>

          <div className="modal-box__content_form form">
            <Formsy.Form onValidSubmit={(model) => auth.handlePasswordReset(model)}>
              <ModalTextField
                className="form__input"
                name="email"
                validations="isEmail"
                type="email"
                placeholder="E-mail address"
                autofocus
                required
              />
              <button className="button button--large button--featured">
                Reset password
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
                      className="github"
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
            Don’t have an account? <strong>Sign up</strong>
          </span>
        </div>
      </footer>
    </ModalWrapper>
  );
};

ModalResetPassword.contextTypes = {
  auth: React.PropTypes.object,
  modals: React.PropTypes.object
};

export default AuthHOC(ModalResetPassword);
