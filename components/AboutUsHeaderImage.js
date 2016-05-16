import React from 'react';

export default ({ imageSrc, image2xSrc, imageSmallSrc, imageSmall2xSrc, imageMediumSrc }) => {
  return (
    <div className="about-us-header-image">
      <div className="inner inner--about-us-header-image">
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
            alt="computer on a table"
          />
        </picture>
      </div>
    </div>
  );
};
