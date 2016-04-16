import React from 'react';

export default () => {
  return (
    <div className="social-profiles">
      <div className="inner">
        <div className="social-profiles__group">
          <h4>Fork us on GitHub</h4>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon" 
              href="#"
              target="_blank"
            >
              <img
                src={require('./images/github.svg')}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div className="social-profiles__group">
          <h4>Follow us</h4>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon"
              href="#"
              target="_blank"
            >
              <img
                src={require('./images/facebook.svg')}
                alt="Facebook"
              />
            </a>
            <a
              className="social-profiles__group__profiles__icon"
              href="#"
              target="_blank"
            >
              <img
                src={require('./images/twitter.svg')}
                alt="Twitter"
              />
            </a>
            <a
              className="social-profiles__group__profiles__icon"
              href="#"
              target="_blank"
            >
              <img
                src={require('./images/twitter.svg')}
                alt="Twitter"
              />
              <div className="social-profiles__group__profiles__icon__dot">
                <img
                  src={require('./images/signal.svg')}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div className="social-profiles__group">
          <h4>Join the community</h4>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon"
              href="#"
              target="_blank"
            >
              <img
                src={require('./images/slack.svg')}
                alt="Slack"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
