import React from 'react';
import Formsy from 'formsy-react';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import AuthHOC from '../AuthHOC';

const ModalSignUp = (props, { auth, modals }) => {
  return (
    <ModalWrapper modalName="signUp">
      <div className="modal-box__content">
        <div className="inner">
          <h2>Sign up and start building</h2>
          <p>Build serverless apps on Syncano for free.<br/>Setup your backend in minutes!</p>

          <div className="modal-box__content_form form">
            <Formsy.Form onValidSubmit={(model) => auth.handlePasswordAuth('register', model)}>
              <ModalTextField
                className="form__input"
                name="email"
                validations="isEmail"
                type="email"
                placeholder="E-mail address"
                autofocus
                required
              />
              <ModalTextField
                className="form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="button button--large button--featured">
                Start Building for Free
              </button>
            </Formsy.Form>
          </div>

          <div className="modal-box__content__login-options">
            <h3 className="modal-box__content__login-options__headline">
              <span>or Sign up with</span>
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
                      alt="Sign up with Google"
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
                      alt="Sign up with GitHub"
                    />
                    <span>GitHub</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="modal-box__footer">
        <div className="modal-box__footer__column">
          <span onClick={modals.logIn.open}>
            Already have an account? <strong>Log in</strong> to your dashboard.
          </span>
        </div>
      </footer>
    </ModalWrapper>
  );
};

ModalSignUp.contextTypes = {
  auth: React.PropTypes.object,
  modals: React.PropTypes.object
};

export default AuthHOC(ModalSignUp);
