import React from 'react';

const ParagraphsWithIconListItem = ({ iconSrc, children }) => (
  <li className="paragraphs-with-icon-list__item">
    <div className="paragraphs-with-icon-list__item__icon">
      <img
        src={iconSrc}
        alt=""
      />
    </div>
    <div className="paragraphs-with-icon-list__item__content">
      {children}
    </div>
  </li>
);

export default ParagraphsWithIconListItem;
