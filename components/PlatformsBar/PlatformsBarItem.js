import React from 'react';

export default ({ className, imgSrc, title, href }) => {
  return (
    <a
      className={`platforms-bar__item ${className}`}
      href={href}
      target="_blank"
      title={`View our ${title} library`}
    >
      <img
        src={imgSrc}
        alt={title}
      />
    </a>
  );
};
