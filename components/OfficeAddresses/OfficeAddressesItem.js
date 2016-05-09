import React from 'react';

export default ({ imageSrc, title, address }) => {
  return (
    <div className="office-addresses__item">
      <img
        className="office-addresses__item__flag"
        src={imageSrc}
      />
      <h3 className="office-addresses__item__title">
        {title}
      </h3>
      <div className="office-addresses__item__address">
        {address}
      </div>
    </div>
  );
};
