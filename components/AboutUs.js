import React from 'react';

export default ({ headline, children, imageSrc, image2xSrc, imageSmallSrc, imageSmall2xSrc }) => {
  return (
    <div className="about-us">
      <div className="inner">
        <div className="about-us__text">
          <h2>{headline}</h2>
          {children}
        </div>
        <div className="about-us__image">
          <picture>
            <source
              media="(min-width: 321px)"
              srcSet={`${imageSmallSrc} 1x, ${imageSmall2xSrc} 2x`}
            />
            <source
              srcSet={`${imageSrc} 1x, ${image2xSrc} 2x`}
            />
            <img
              src={image2xSrc}
              alt="grid with photos of us"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
