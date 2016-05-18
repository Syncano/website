import React from 'react';

export default ({ headline, children }) => {
  return (
    <div className="column-paragraphs">
      <div className="inner inner--column-paragraphs">
        <h2>{headline}</h2>
        <div className="column-paragraphs__paragraphs">
          {children}
        </div>
      </div>
    </div>
  );
};
