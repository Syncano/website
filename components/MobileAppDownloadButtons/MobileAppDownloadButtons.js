import React from 'react';

export default ({ googlePlayUrl, itunesUrl }) => {
  if (!googlePlayUrl && !itunesUrl) {
    return null;
  }

  return (
    <div className="mobile-app-download-buttons">
      {googlePlayUrl && <div className="mobile-app-download-buttons__button">
        <a
          href={googlePlayUrl}
          target="_blank"
        >
          <img
            src={require('./images/google-play-badge.svg')}
            alt="Google Play Badge"
          />
        </a>
      </div>}
      {itunesUrl && <div className="mobile-app-download-buttons__button">
        <a
          href={itunesUrl}
          target="_blank"
        >
          <img
            src={require('./images/app-store-badge.svg')}
            alt="App Store Badge"
          />
        </a>
      </div>}
    </div>
  );
};
