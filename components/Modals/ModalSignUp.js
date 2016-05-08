import React from 'react';
import ModalWrapper from './ModalWrapper';

const ModalSignUp = (props, { modals }) => {
  return (
    <ModalWrapper isOpen={modals.signUp.isOpen}>
      <div className="modal__content">
        <div className="inner">
          <h2>Sign up for free!</h2>
          <p>Syncano is a lorem ipsum dolor sit amet, consectetur adipiscing elit. No credit card required libero
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
                Start Building for Free
              </button>
            </form>
          </div>

          <div className="modal__content__login-options">
            <h3 className="modal__content__login-options__headline">
              <span>or Sign up with</span>
            </h3>
            <div className="modal__content__login-options__buttons">
              <ul>
                <li>
                  <span className="button">
                    <img
                      src={require('./images/google.svg')}
                      alt="Sign up with Google"
                    />
                    <span>Google</span>
                  </span>
                </li>
                <li>
                  <span className="button">
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
      <footer className="modal__footer">
        <div className="modal__footer__column">
          <span onClick={modals.logIn.open}>
            Already have an account? <strong>Log in here!</strong>
          </span>
        </div>
      </footer>
    </ModalWrapper>
  );
};

ModalSignUp.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalSignUp;
