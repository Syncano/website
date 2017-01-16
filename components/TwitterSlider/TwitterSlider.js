import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import SliderWrapper from '../SliderWrapper';
import TwitterSliderNavPrev from './TwitterSliderNavPrev';
import TwitterSliderNavNext from './TwitterSliderNavNext';
import TwitterWidget from '../TwitterWidget';
import HideOnLandingPage from '../HideOnLandingPage';
import tweetsData from '../../data-tweets.json';

const TwitterSlider = ({ theme = 'blue', headline, filter, arrows = true, hideButton }) => {
  const getTweets = () => {
    if (tweetsData.errors) {
      return null;
    }

    if (filter) {
      const collections = {
        unity: [712734440062074900, 717796429251498000, 727236023298625500]
      };

      let filtered = _.filter(tweetsData, (item) => _.includes(collections[filter], item.id));

      if (filter === 'unity') {
        const pulled = _.pullAt(filtered, [1]);

        filtered = [...filtered, ...pulled];
      }

      return filtered;
    }

    return tweetsData;
  };

  const getClassName = () => classNames({
    'twitter-slider': true,
    'twitter-slider--blue': (theme === 'blue'),
    'twitter-slider--gray': (theme === 'gray')
  });

  const getSliderWrapperResponsive = () => ([
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, dots: true, arrows: false }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, dots: true, arrows: false }
    },
    {
      breakpoint: 1025,
      settings: { slidesToShow: 3, dots: true, arrows: false }
    }
  ]);

  const getHeadline = () => {
    if (headline) {
      return headline;
    }

    return (
      <span>
        <img
          src={require('./images/heart.svg')}
          alt="heart"
        />
        <span>from our users</span>
      </span>
    );
  };

  const renderMoreButton = () => {
    if (hideButton) {
      return null;
    }

    return (
      <HideOnLandingPage>
        <a
          className="button button--white"
          href="https://twitter.com/syncanolove/"
          target="_blank"
        >
          More Tweets
        </a>
      </HideOnLandingPage>
    );
  };

  const tweets = getTweets();
  const className = getClassName();

  if (_.isEmpty(tweets)) {
    return null;
  }

  return (
    <div className={className}>
      <div className="inner">
        <h2>
          {getHeadline()}
        </h2>
        <div className="twitter-slider__slider">
          <SliderWrapper
            arrows={arrows}
            slidesToShow={3}
            prevArrow={<TwitterSliderNavPrev />}
            nextArrow={<TwitterSliderNavNext />}
            responsive={getSliderWrapperResponsive()}
          >
            {_.map(tweets, (data) => (
              <div>
                <TwitterWidget data={data} />
              </div>
            ))}
          </SliderWrapper>
        </div>
        {renderMoreButton()}
      </div>
    </div>
  );
};

export default TwitterSlider;
