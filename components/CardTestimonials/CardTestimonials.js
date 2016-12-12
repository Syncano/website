import React from 'react';

const CardTestimonials = ({ children }) => (
  <div className="card-testimonials">
    <div className="inner">
      <div className="card-testimonials__cards">
        {children}
      </div>
    </div>
  </div>
);

export default CardTestimonials;
