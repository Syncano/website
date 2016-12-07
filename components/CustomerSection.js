import React from 'react';
import MobileAppDownloadButtons from './MobileAppDownloadButtons';
import TextWithImage from './TextWithImage';

export default ({
  theme,
  headline,
  textline,
  imageClassName,
  imageSrc,
  image2xSrc,
  imageSmallSrc,
  imageSmall2xSrc,
  url,
  buttonText,
  googlePlayUrl,
  itunesUrl,
  children
}) => {
  return (
    <TextWithImage
      theme={theme}
      variant="customer"
      headline={headline}
      textline={textline}
      image={
        <picture>
          <source
            media="(min-width: 321px)"
            srcSet={`${imageSrc} 1x, ${image2xSrc} 2x`}
          />
          <source srcSet={`${imageSmallSrc} 1x, ${imageSmall2xSrc} 2x`} />
          <img
            className={imageClassName}
            src={image2xSrc}
            alt={headline}
          />
        </picture>
      }
    >
      {url && buttonText && <a
        className="button"
        href={url}
        target="_blank"
      >
        {buttonText}
      </a>}
      <MobileAppDownloadButtons
        googlePlayUrl={googlePlayUrl}
        itunesUrl={itunesUrl}
      />
      {children}
    </TextWithImage>
  );
};
