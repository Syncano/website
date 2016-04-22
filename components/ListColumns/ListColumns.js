import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="list-columns">
      <div className="inner inner--list-columns">
        <h2>{headline}</h2>
        <div className="list-columns__columns">
          {children}
        </div>
      </div>
    </div>
  );
}
