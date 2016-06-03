import React from 'react';

export default () => {
  return (
    <div className="twitter-widget">
      <a
        className="twitter-widget__header"
        href="https://twitter.com/BizziBodyDotCom"
        target="_blank"
      >
        <div className="twitter-widget__header__avatar">
          <img src="https://unsplash.it/72" alt="" />
        </div>
        <div className="twitter-widget__header__user">
          <strong>Bizzi Body</strong>
          <div className="twitter-widget__header__user__username">@BizziBodyDotCom</div>
        </div>
      </a>
      <div className="twitter-widget__content">
        <p>It's great to see this platform growing - it's really worth some minutes of your time to investigate. <a href="https://t.co/pMW4qn1Ly6" rel="nofollow" target="_blank"><span className="u-hiddenVisually">https://</span>twitter.com/Syncano/status<span className="u-hiddenVisually">/712692528307421184&nbsp;</span>…</a></p>
      </div>
    </div>
  );
};
