import React from 'react';
import PlatformsItem from './PlatformsItem';

export default () => {
  return (
    <div className="platforms">
      <div className="platforms__row">
        <PlatformsItem
          className="javascript"
          imgSrc={require('./images/javascript.svg')}
          title="JavaScript"
          href="https://github.com/Syncano/syncano-js/"
        />
        <PlatformsItem
          className="python"
          imgSrc={require('./images/python.svg')}
          title="Python"
          href="https://github.com/Syncano/syncano-python/"
        />
        <PlatformsItem
          className="android"
          imgSrc={require('./images/android.svg')}
          title="Android"
          href="https://github.com/Syncano/syncano-android/"
        />
        <PlatformsItem
          className="ios"
          imgSrc={require('./images/ios@2x.png')}
          title="iOS"
          href="https://github.com/Syncano/syncano-ios/"
        />
      </div>
      <div className="platforms__row">
        <PlatformsItem
          className="angularjs"
          imgSrc={require('./images/angularjs.svg')}
          title="AngularJS"
          href="https://github.com/Syncano/ng-syncano/"
        />
        <PlatformsItem
          className="ruby"
          imgSrc={require('./images/ruby.svg')}
          title="Ruby"
          href="https://github.com/Syncano/syncano-ruby/"
        />
        <PlatformsItem
          className="emberjs"
          imgSrc={require('./images/emberjs.svg')}
          title="Ember.js"
          href="https://github.com/Syncano/ember-syncano/"
        />
        <PlatformsItem
          className="arduino"
          imgSrc={require('./images/arduino.svg')}
          title="Arduino"
          href="https://github.com/Syncano/syncano-arduino/"
        />
      </div>
    </div>
  );
};
