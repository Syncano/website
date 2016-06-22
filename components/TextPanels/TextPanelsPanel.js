import React from 'react';
import classNames from 'classnames';

export default ({ theme, headline, children }) => {
  const textPanelsPanelClassName = classNames({
    'text-panels__panel': true,
    'text-panels__panel--azure': (theme === 'azure'),
    'text-panels__panel--silver': (theme === 'silver'),
    'text-panels__panel--purple': (theme === 'purple')
  });

  return (
    <div className={textPanelsPanelClassName}>
      <h3>{headline}</h3>
      {children}
    </div>
  );
}
