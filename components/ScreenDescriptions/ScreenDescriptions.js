import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="screen-descriptions">
      <div className="inner">
        <h2>{headline}</h2>
        <div className="screen-descriptions__screens">
          {children}
        </div>
      </div>
    </div>
  );
};
