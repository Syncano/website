import React from 'react';
import classNames from 'classnames';

const BrowserWindow = ({ variant, children }) => {
  const className = classNames({
    'browser-window': true,
    'browser-window--large': (variant === 'large')
  });

  return (
    <div className={className}>
      <div className="browser-window__top">
        <div className="browser-window__top__button" />
        <div className="browser-window__top__button" />
        <div className="browser-window__top__button" />
      </div>
      {children}
    </div>
  );
};

export default BrowserWindow;
