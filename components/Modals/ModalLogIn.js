import React from 'react';
import ModalWrapper from './ModalWrapper';

const ModalLogIn = (props, { modals }) => {
  return (
    <ModalWrapper isOpen={modals.logIn.isOpen}>
      <div className="modal__content">
        <div className="inner">
          <h2>Log in</h2>
          <p>Syncano is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum required libero
          cursus.</p>

          <div className="modal__content_form">
            <form>
              <input
                className="modal__content_form__input"
                type="email"
                placeholder="E-mail address"
                required
              />
              <input
                className="modal__content_form__input"
                type="password"
                placeholder="Password"
                required
              />
              <button className="button button--large button--featured">
                Log In
              </button>
            </form>
          </div>

          <div className="modal__content__login-options">
            <h3 className="modal__content__login-options__headline">
              <span>or Log in with</span>
            </h3>
            <div className="modal__content__login-options__buttons">
              <ul>
                <li>
                  <span className="button">
                    <img
                      src={require('./images/google.svg')}
                      alt="Log in with Google"
                    />
                    <span>Google</span>
                  </span>
                </li>
                <li>
                  <span className="button">
                    <img
                      className="github"
                      src={require('./images/github.svg')}
                      alt="Log in with GitHub"
                    />
                    <span>GitHub</span>
                  </span>
                </li>
                <li>
                  <span className="button">
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
      <footer className="modal__footer">
        <div className="modal__footer__column">
          <span onClick={modals.signUp.open}>
            Don’t have an account? <strong>Sign up here!</strong>
          </span>
        </div>
        <div className="modal__footer__column">
          <span>
            Forgot your password?
          </span>
        </div>
      </footer>
    </ModalWrapper>
  );
};

ModalLogIn.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalLogIn;
