import React from 'react';
import PlatformsBarItem from './PlatformsBarItem';

export default () => {
  return (
    <div className="platforms-bar">
      <div className="inner inner--platforms-bar">
        <PlatformsBarItem
          className="javascript"
          imgSrc={require('./images/javascript.svg')}
          title="JavaScript"
          href="https://github.com/Syncano/syncano-js/"
        />
        <PlatformsBarItem
          className="python"
          imgSrc={require('./images/python.svg')}
          title="Python"
          href="https://github.com/Syncano/syncano-python/"
        />
        <PlatformsBarItem
          className="android"
          imgSrc={require('./images/android.svg')}
          title="Android"
          href="https://github.com/Syncano/syncano-android/"
        />
        <PlatformsBarItem
          className="swift"
          imgSrc={require('./images/ios@2x.png')}
          title="iOS"
          href="https://github.com/Syncano/syncano-ios/"
        />
        <PlatformsBarItem
          className="angularjs"
          imgSrc={require('./images/angularjs.svg')}
          title="AngularJS"
          href="https://github.com/Syncano/ng-syncano/"
        />
        <PlatformsBarItem
          className="ruby"
          imgSrc={require('./images/ruby.svg')}
          title="Ruby"
          href="https://github.com/Syncano/syncano-ruby/"
        />
        <PlatformsBarItem
          className="emberjs"
          imgSrc={require('./images/emberjs.svg')}
          title="Ember.js"
          href="https://github.com/Syncano/ember-syncano/"
        />
        <PlatformsBarItem
          className="arduino"
          imgSrc={require('./images/arduino.svg')}
          title="Arduino"
          href="https://github.com/Syncano/syncano-arduino/"
        />
      </div>
    </div>
  );
};
