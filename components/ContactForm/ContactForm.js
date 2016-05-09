import React from 'react';

export default () => {
  return (
    <div className="contact-form">
      <div className="inner">
        <div className="contact-form__box">
          <div className="contact-form__box__form form">
            <form>
              <input
                className="form__input"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="form__input"
                type="email"
                placeholder="E-mail address"
                required
              />
              <textarea
                className="form__textarea"
                placeholder="Message"
                required
              />
              <button className="button button--large button--featured">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
