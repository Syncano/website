import React from 'react';

export default ({ headline, children, underColumnsContent }) => {
  return (
    <div className="features-columns">
      <div className="inner">
        <h2>{headline}</h2>
        <div className="features-columns__columns">
          {children}
        </div>
        <footer className="features-columns__footer">
          {underColumnsContent}
        </footer>
      </div>
    </div>
  );
};
