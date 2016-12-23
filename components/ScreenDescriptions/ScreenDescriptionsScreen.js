import React from 'react';
import classNames from 'classnames';

export default ({ variant, imageSrc, image2xSrc, imageSmallSrc, imageSmall2xSrc, headline, text }) => {
  const className = classNames({
    'screen-descriptions__screens__screen': true,
    'screen-descriptions__screens__screen--image-right': (variant === 'image-right')
  });

  return (
    <div className={className}>
      <div className="screen-descriptions__screens__screen__image">
        <picture>
          <source
            media="(min-width: 321px)"
            srcSet={`${imageSmallSrc} 1x, ${imageSmall2xSrc} 2x`}
          />
          <source srcSet={`${imageSrc} 1x, ${image2xSrc} 2x`} />
          <img
            className="browser-image"
            src={imageSmall2xSrc}
            alt={headline}
          />
        </picture>
      </div>
      <div className="screen-descriptions__screens__screen__text">
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
