import React from 'react';

export default ({ avatarSrc, author, children }) => {
  return (
    <div className="slack-message">
      <div className="slack-message__avatar">
        <img
          src={avatarSrc}
          alt={author}
        />
      </div>
      <div className="slack-message__content">
        <strong className="slack-message__content__author">
          {author}
        </strong>
        {children}
      </div>
    </div>
  );
};
