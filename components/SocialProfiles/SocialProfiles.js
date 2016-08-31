import React from 'react';

export default () => {
  return (
    <div className="social-profiles">
      <div className="inner">
        <div className="social-profiles__group">
          <h3>Fork us on GitHub</h3>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon"
              href="https://github.com/Syncano/"
              target="_blank"
              title="GitHub"
            >
              <img
                src={require('./images/github.svg')}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div className="social-profiles__group">
          <h3>Follow us</h3>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon"
              href="https://www.facebook.com/syncano/"
              target="_blank"
              title="Facebook"
            >
              <img
                src={require('./images/facebook.svg')}
                alt="Facebook"
              />
            </a>
            <a
              className="social-profiles__group__profiles__icon"
              href="https://twitter.com/Syncano/"
              target="_blank"
              title="Twitter"
            >
              <img
                src={require('./images/twitter.svg')}
                alt="Twitter"
              />
            </a>
            <a
              className="social-profiles__group__profiles__icon"
              href="https://twitter.com/SyncanoStatus/"
              target="_blank"
              title="Twitter Status"
            >
              <img
                src={require('./images/twitter.svg')}
                alt="Twitter Status"
              />
              <div className="social-profiles__group__profiles__icon__dot">
                <img
                  src={require('./images/status.svg')}
                  alt="Status"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="social-profiles__group">
          <h3>Join the community</h3>
          <div className="social-profiles__group__profiles">
            <a
              className="social-profiles__group__profiles__icon"
              href="https://www.syncano.io/slack-invite/"
              target="_blank"
              title="Slack"
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
