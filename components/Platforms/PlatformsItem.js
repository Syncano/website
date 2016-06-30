import React from 'react';
import LandingSpanLink from '../LandingSpanLink';

const PlatformsItem = ({ className, imgSrc, title, href }, { isLandingPage }) => {
  return (
    <LandingSpanLink
      className={`platforms__row__item ${className}`}
      href={isLandingPage ? null : href}
      target="_blank"
      title={isLandingPage ? null : `View our ${title} library`}
    >
      <img
        src={imgSrc}
        alt={title}
      />
    </LandingSpanLink>
  );
};

PlatformsItem.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default PlatformsItem;
