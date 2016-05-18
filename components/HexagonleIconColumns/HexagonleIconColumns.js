import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="hexagon-icon-columns">
      <div className="inner inner--hexagon-icon-columns">
        <h2>{headline}</h2>
        <div className="hexagon-icon-columns__columns">
          {children}
        </div>
      </div>
    </div>
  );
};
