import React from 'react';
import classNames from 'classnames';

import PlatformsBarItem from './PlatformsBarItem';

export default ({ variant, centered, size }) => {
  const className = classNames({
    'platforms-bar': true,
    'platforms-bar--mobile': (variant === 'mobile'),
    'platforms-bar--full-stack': (variant === 'full-stack'),
    'platforms-bar--large': (size === 'large')
  });

  return (
    <div className={className}>
      <div className="inner">
        <PlatformsBarItem
          variant={variant}
          className="javascript"
          imgSrc={require('./images/javascript.svg')}
          title="JavaScript"
          href="https://github.com/Syncano/syncano-js/"
        />
        <PlatformsBarItem
          variant={variant}
          className="python"
          imgSrc={require('./images/python.svg')}
          title="Python"
          href="https://github.com/Syncano/syncano-python/"
        />
        <PlatformsBarItem
          variant={variant}
          className="android"
          imgSrc={require('./images/android.svg')}
          title="Android"
          href="https://github.com/Syncano/syncano-android/"
        />
        <PlatformsBarItem
          variant={variant}
          className="ios"
          imgSrc={require('./images/ios@2x.png')}
          title="iOS"
          href="https://github.com/Syncano/syncano-ios/"
        />
        <PlatformsBarItem
          variant={variant}
          className="angularjs"
          imgSrc={require('./images/angularjs.svg')}
          title="AngularJS"
          href="https://github.com/Syncano/ng-syncano/"
        />
        <PlatformsBarItem
          variant={variant}
          className="ruby"
          imgSrc={require('./images/ruby.svg')}
          title="Ruby"
          href="https://github.com/Syncano/syncano-ruby/"
        />
        <PlatformsBarItem
          variant={variant}
          className="emberjs"
          imgSrc={require('./images/emberjs.svg')}
          title="Ember.js"
          href="https://github.com/Syncano/ember-syncano/"
        />
        <PlatformsBarItem
          variant={variant}
          className="arduino"
          imgSrc={require('./images/arduino.svg')}
          title="Arduino"
          href="https://github.com/Syncano/syncano-arduino/"
        />
      </div>
    </div>
  );
};
