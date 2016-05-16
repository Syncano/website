import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="about-us">
      <div className="inner">
        <h2>{headline}</h2>
        {children}
      </div>
    </div>
  );
};
