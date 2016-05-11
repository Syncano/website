import React from 'react';

export default ({ quote }) => {
  return (
    <div className="blockquote-section">
      <div className="inner">
        <blockquote className="blockquote-section__blockquote">
          {quote}
        </blockquote>
      </div>
    </div>
  );
};
