import React from 'react';
import { prefixLink } from 'gatsby-helpers';

export default () => {
  return (
    <div className="platforms">
      <div className="platforms__scroll">
        <div className="inner inner--platforms">
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/js-medium@2x.png')}
              alt="JavaScript"
              title="JavaScript"
            />
          </div>
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/android-medium@2x.png')}
              alt="Android"
              title="Android"
            />
          </div>
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/python-medium@2x.png')}
              alt="Python"
              title="Python"
            />
          </div>
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/ios-medium@2x.png')}
              alt="iOS"
              title="iOS"
            />
          </div>
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/swift-medium@2x.png')}
              alt="Swift"
              title="Swift"
            />
          </div>
          <div className="platforms__item">
            <img
              src={prefixLink('images/platforms/ruby-medium@2x.png')}
              alt="Ruby"
              title="Ruby"
            />
          </div>
          <div className="platforms__item platforms__item--more">
            <img
              src={prefixLink('images/platforms/more-medium@2x.png')}
              alt="the sign of infinity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
