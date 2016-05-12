import React from 'react';

export default ({ className, imgSrc, title, href }) => {
  return (
    <a
      className={`platforms__row__item ${className}`}
      href={href}
      target="_blank"
    >
      <img
        src={imgSrc}
        alt={title}
        title={title}
      />
    </a>
  );
};
