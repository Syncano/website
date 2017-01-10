import React from 'react';

const TwoPagesPromoPage = ({ imgSrc, title, description, children }) => (
  <div className="two-pages-promo__page">
    <div className="two-pages-promo__page__image">
      <img
        src={imgSrc}
        alt={title}
      />
    </div>
    <h3 className="two-pages-promo__page__title">{title}</h3>
    <div className="two-pages-promo__page__description">
      <p>{description}</p>
    </div>
    {children}
  </div>
);

export default TwoPagesPromoPage;
