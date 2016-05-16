import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="team">
      <div className="inner">
        <h2>{headline}</h2>
        <div className="team__list">
          <ul>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};
