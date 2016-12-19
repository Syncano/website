import React from 'react';

const ParagraphsWithIconList = ({ children }) => (
  <div className="paragraphs-with-icon-list">
    <div className="inner">
      <ul>
        {children}
      </ul>
    </div>
  </div>
);

export default ParagraphsWithIconList;
