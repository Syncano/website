import React from 'react';

const TwoPagesPromo = ({ children }) => (
  <div className="two-pages-promo">
    <div className="inner">
      <div className="two-pages-promo__pages">
        {children}
      </div>
    </div>
  </div>
);

export default TwoPagesPromo;
