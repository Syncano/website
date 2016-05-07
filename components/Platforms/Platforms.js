import React from 'react';

export default () => {
  return (
    <div className="platforms">
      <div className="platforms__row">
        <div className="platforms__row__item javascript">
          <img
            src={require('./images/javascript.svg')}
            alt="JavaScript"
            title="JavaScript"
          />
        </div>
        <div className="platforms__row__item python">
          <img
            src={require('./images/python.svg')}
            alt="Python"
            title="Python"
          />
        </div>
        <div className="platforms__row__item android">
          <img
            src={require('./images/android.svg')}
            alt="Android"
            title="Android"
          />
        </div>
        <div className="platforms__row__item swift">
          <img
            src={require('./images/swift.svg')}
            alt="Swift"
            title="Swift"
          />
        </div>
      </div>
      <div className="platforms__row">
        <div className="platforms__row__item angularjs">
          <img
            src={require('./images/angularjs.svg')}
            alt="AngularJS"
            title="AngularJS"
          />
        </div>
        <div className="platforms__row__item ruby">
          <img
            src={require('./images/ruby.svg')}
            alt="Ruby"
            title="Ruby"
          />
        </div>
        <div className="platforms__row__item emberjs">
          <img
            src={require('./images/emberjs.svg')}
            alt="Ember.js"
            title="Ember.js"
          />
        </div>
        <div className="platforms__row__item arduino">
          <img
            src={require('./images/arduino.svg')}
            alt="Arduino"
            title="Arduino"
          />
        </div>
      </div>
    </div>
  );
};
