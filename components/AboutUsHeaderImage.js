import React from 'react';

export default ({ imageSrc, image2xSrc, imageSmallSrc, imageSmall2xSrc, imageMediumSrc, imageAlt }) => {
  return (
    <div className="about-us-header-image">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${imageMediumSrc} 1x`}
        />
        <source
          media="(min-width: 321px)"
          srcSet={`${imageSmallSrc} 1x, ${imageSmall2xSrc} 2x`}
        />
        <source
          srcSet={`${imageSrc} 1x, ${image2xSrc} 2x`}
        />
        <img
          src={imageMediumSrc}
          alt={imageAlt}
        />
      </picture>
    </div>
  );
};
