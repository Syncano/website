import React from 'react';

export default ({icon, headline, text, children}) => {
  return (
    <div className="text-columns__column">
      <div className="columns__column__headline">
        {icon}
        <h4>{headline}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
}
