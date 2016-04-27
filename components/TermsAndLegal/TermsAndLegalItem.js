import React from 'react';

export default ({ slug, title, children }) => {
  return (
    <div
      key={slug}
      className="terms-and-legal__page__entry"
      id={slug}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};
