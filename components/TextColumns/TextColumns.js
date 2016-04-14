import React from 'react';

export default ({ children }) => {
  return (
    <div className="text-columns">
      <div className="inner inner--text-columns">
        {children}
      </div>
    </div>
  );
}
