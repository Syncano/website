import React from 'react';

const SocialProfilesIcon = ({ href, title, imgSrc, children, dotImgSrc, dotImgAlt, isHidden }) => {
  if (isHidden) {
    return null;
  }

  const renderDotImage = () => {
    if (!dotImgSrc) {
      return null;
    }

    return (
      <div className="social-profiles__group__profiles__icon__dot">
        <img
          src={dotImgSrc}
          alt={dotImgAlt}
        />
      </div>
    );
  };

  return (
    <a
      className="social-profiles__group__profiles__icon"
      href={href}
      target="_blank"
      title={title}
    >
      <img
        src={imgSrc}
        alt={title}
      />
      {children}
      {renderDotImage()}
    </a>
  );
};

export default SocialProfilesIcon;
