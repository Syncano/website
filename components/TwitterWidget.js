import React, { PropTypes } from 'react';
import Autolinker from 'autolinker';
import _ from 'lodash';
import Link from './Link';

const TwitterWidget = ({ data }, { isLandingPage }) => {
  const { user, text } = data;
  const { name, screen_name, profile_image_url } = user;
  const contentText = isLandingPage ? text : Autolinker.link(text, { hashtag: 'twitter', mention: 'twitter' });

  return (
    <div className="twitter-widget">
      <Link
        tagName="a"
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
      </Link>
      <div className="twitter-widget__content">
        <p dangerouslySetInnerHTML={{__html: contentText }} />
      </div>
    </div>
  );
};

TwitterWidget.contextTypes = {
  isLandingPage: PropTypes.bool
};

export default TwitterWidget;
