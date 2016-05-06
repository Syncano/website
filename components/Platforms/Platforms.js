import React from 'react';

export default () => {
  return (
    <div className="platforms">
      <div className="platforms__row">
        <div className="platforms__row__item javascript">
          <img
            src={require('./images/javascript@2x.png')}
            alt="JavaScript"
            title="JavaScript"
          />
        </div>
        <div className="platforms__row__item python">
          <img
            src={require('./images/python@2x.png')}
            alt="Python"
            title="Python"
          />
        </div>
        <div className="platforms__row__item android">
          <img
            src={require('./images/android@2x.png')}
            alt="Android"
            title="Android"
          />
        </div>
        <div className="platforms__row__item swift">
          <img
            src={require('./images/swift@2x.png')}
            alt="Swift"
            title="Swift"
          />
        </div>
      </div>
      <div className="platforms__row">
        <div className="platforms__row__item angularjs">
          <img
            src={require('./images/angularjs@2x.png')}
            alt="AngularJS"
            title="AngularJS"
          />
        </div>
        <div className="platforms__row__item ruby">
          <img
            src={require('./images/ruby@2x.png')}
            alt="Ruby"
            title="Ruby"
          />
        </div>
        <div className="platforms__row__item emberjs">
          <img
            src={require('./images/emberjs@2x.png')}
            alt="Ember.js"
            title="Ember.js"
          />
        </div>
        <div className="platforms__row__item arduino">
          <img
            src={require('./images/arduino@2x.png')}
            alt="Arduino"
            title="Arduino"
          />
        </div>
      </div>
    </div>
  );
};
