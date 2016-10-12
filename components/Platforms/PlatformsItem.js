import React, { PropTypes } from 'react';
import Link from '../Link';

const PlatformsItem = ({ className, imgSrc, title, href }, { isLandingPage }) => {
  return (
    <Link
      tagName="a"
      className={`platforms__row__item ${className}`}
      href={!isLandingPage && href}
      target="_blank"
      title={isLandingPage ? title : `View our ${title} library`}
    >
      <img
        src={imgSrc}
        alt={title}
      />
    </Link>
  );
};

PlatformsItem.contextTypes = {
  isLandingPage: PropTypes.bool
};

export default PlatformsItem;
