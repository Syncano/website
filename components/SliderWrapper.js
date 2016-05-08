import React from 'react';
import Slider from 'react-slick';

const SliderWrapper = ({ children, ...other }) => {
  return (
    <div className="slider-wrapper">
      <Slider {...other}>
        {children}
      </Slider>
    </div>
  );
};

SliderWrapper.defaultProps = {
  arrows: false, 
  dots: false, 
  infinite: true, 
  speed: 500, 
  slidesToShow: 1, 
  slidesToScroll: 1
};

export default SliderWrapper;
