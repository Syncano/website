import React from 'react';

const CommunityExamplesExample = ({ leftImgSrc, leftImgAlt, rightImgSrc, rightImgAlt, text }) => (
  <div className="community-examples__example">
    <div className="community-examples__example__images">
      <img
        src={leftImgSrc}
        alt={leftImgAlt}
      />
      <img
        src={require('./images/arrow.svg')}
        alt="right arrow"
      />
      <img
        src={rightImgSrc}
        alt={rightImgAlt}
      />
    </div>
    {text && <div className="community-examples__example__text">
      {text}
    </div>}
  </div>
);

export default CommunityExamplesExample;
