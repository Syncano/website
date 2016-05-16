import React from 'react';

export default ({ photoSrc, photo2xSrc, photoMediumSrc, photoMedium2xSrc, name, position }) => {
  return (
    <li className="team__list__member">
      <div className="team__list__member__photo">
        <picture>
          <source
            media="(min-width: 1300px)"
            srcSet={`${photoMediumSrc} 1x, ${photoMedium2xSrc} 2x`}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`${photoSrc} 1x, ${photo2xSrc} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${photoMediumSrc} 1x, ${photoMedium2xSrc} 2x`}
          />
          <source
            srcSet={`${photoSrc} 1x, ${photo2xSrc} 2x`}
          />
          <img
            src={photoMedium2xSrc}
            alt={`Photo of ${name}`}
          />
        </picture>
      </div>
      <h3 className="team__list__member__name">
        {name}
      </h3>
      <p className="team__list__member__position">
        {position}
      </p>
    </li>
  );
};
