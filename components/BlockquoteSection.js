import React from 'react';

export default ({ children }) => {
  return (
    <div className="blockquote-section">
      <div className="inner">
        <blockquote className="blockquote-section__blockquote">
          {children}
        </blockquote>
      </div>
    </div>
  );
};
