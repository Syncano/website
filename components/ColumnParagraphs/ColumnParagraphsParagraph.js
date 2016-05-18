import React from 'react';

export default ({ iconSrc, headline, text }) => {
  return (
    <div className="column-paragraphs__paragraphs__paragraph">
      <div className="column-paragraphs__paragraphs__paragraph__headline">
        <img
          src={iconSrc}
          alt={headline}
        />
        <h3>{headline}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
