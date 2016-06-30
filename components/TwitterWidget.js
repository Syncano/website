import React from 'react';
import Autolinker from 'autolinker';
import _ from 'lodash';
import LandingSpanLink from './LandingSpanLink';

const TwitterWidget = ({ data }, { isLandingPage }) => {
  const { user, text } = data;
  const { name, screen_name, profile_image_url } = user;

  return (
    <div className="twitter-widget">
      <LandingSpanLink
        className="twitter-widget__header"
        href={`https://twitter.com/${screen_name}`}
        target="_blank"
      >
        <div className="twitter-widget__header__avatar">
          <img
            src={_.replace(profile_image_url, 'http:', '')}
            alt={name}
          />
        </div>
        <div className="twitter-widget__header__user">
          <strong>{name}</strong>
          <div className="twitter-widget__header__user__username">@{screen_name}</div>
        </div>
      </LandingSpanLink>
      <div className="twitter-widget__content">
        <p dangerouslySetInnerHTML={{__html: isLandingPage ? text : Autolinker.link(text, { hashtag: 'twitter' })}} />
      </div>
    </div>
  );
};

TwitterWidget.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default TwitterWidget;
