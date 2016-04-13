import React from 'react';
import Slider from 'react-slick';

 export default React.createClass({
  getSliderConfig() {
    return {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },

  render() {
    return (
      <div className="testimtionals">
        <Slider {...this.getSliderConfig()}>
          <div>
            <div className="inner">
              <blockquote>
                <p>„What used to take 5 weeks now takes just 1 week with Syncano. You let developers be developers and not get stuck being middleware or database engineers.”</p>
              </blockquote>
            </div>
          </div>
          <div>
            <div className="inner">
              <blockquote>
                <p>„What used to take 5 weeks now takes just 1 week with Syncano. You let developers be developers and not get stuck being middleware or database engineers.”</p>
              </blockquote>
            </div>
          </div>
          <div>
            <div className="inner">
              <blockquote>
                <p>„What used to take 5 weeks now takes just 1 week with Syncano. You let developers be developers and not get stuck being middleware or database engineers.”</p>
              </blockquote>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
});
