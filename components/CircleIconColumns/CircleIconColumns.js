import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="circle-icon-columns">
      <div className="inner">
        <h2>{headline}</h2>
        <div className="circle-icon-columns__columns">
          {children}
        </div>
      </div>
    </div>
  );
};
