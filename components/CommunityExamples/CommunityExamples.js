import React from 'react';

const CommunityExamples = ({ headline, children }) => (
  <div className="community-examples">
    <div className="inner">
      <h2>{headline}</h2>
      <div className="community-examples__examples">
        {children}
      </div>
    </div>
  </div>
);

export default CommunityExamples;
