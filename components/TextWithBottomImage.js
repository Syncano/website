import React from 'react';

export default ({ headline, textline, children, image }) => {
  return (
    <div className="text-with-bottom-image">
      <div className="inner inner--text-with-bottom-image">
        <h2>{headline}</h2>
        <p>{textline}</p>
        {children}
        {image}
      </div>
    </div>
  );
};
