import React from 'react';
import Platforms from './Platforms';

export default ({ headline, children, bottomContentHeadline }) => {
  return (
    <div className="platforms-section">
      <div className="inner">
        <h2>{headline}</h2>
        <Platforms />
        <h3>{bottomContentHeadline}</h3>
        {children}
      </div>
    </div>
  );
};
