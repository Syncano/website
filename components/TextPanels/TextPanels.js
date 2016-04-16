import React from 'react';

export default ({ children }) => {
  return (
    <div className="text-panels">
      <div className="inner">
        {children}
      </div>
    </div>
  );
}
