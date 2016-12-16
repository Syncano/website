import React from 'react';

const SlackPromo = () => {
  return (
    <div className="slack-promo">
      <div className="slack-promo__image">
        <a
          href="https://www.syncano.io/slack-invite/"
          target="_blank"
        >
          <img
            src={require('./images/slack.svg')}
            alt="Slack Logo"
          />
        </a>
      </div>
      <div className="slack-promo__content">
        <p>
          Do you want to contribute to make the Syncano experience even better for other mobile
          developers? <a href="https://www.syncano.io/slack-invite/" target="_blank">Joins us on Slack!</a>
        </p>
      </div>
    </div>
  );
};

export default SlackPromo;
