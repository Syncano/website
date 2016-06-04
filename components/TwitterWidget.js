import React from 'react';
import Autolinker from 'autolinker';

export default ({ data }) => {
  const { user, text } = data;
  const { name, screen_name, profile_image_url } = user;

  return (
    <div className="twitter-widget">
      <a
        className="twitter-widget__header"
        href={`https://twitter.com/${screen_name}`}
        target="_blank"
      >
        <div className="twitter-widget__header__avatar">
          <img
            src={profile_image_url}
            alt={name}
          />
        </div>
        <div className="twitter-widget__header__user">
          <strong>{name}</strong>
          <div className="twitter-widget__header__user__username">@{screen_name}</div>
        </div>
      </a>
      <div className="twitter-widget__content">
        <p dangerouslySetInnerHTML={{__html: Autolinker.link(text, { hashtag: 'twitter' })}} />
      </div>
    </div>
  );
};
