import React from 'react';
import SliderWrapper from '../SliderWrapper';
import SlackSliderNavPrev from './SlackSliderNavPrev';
import SlackSliderNavNext from './SlackSliderNavNext';
import SlackMessage from '../SlackMessage';

export default () => {
  return (
    <div className="slack-slider">
      <div className="inner">
        <h2>
          Join the community on
          <img src={require('./images/slack.svg')} alt="Slack" /> 
          Slack
        </h2>
        <div className="slack-slider__slider">
          <SliderWrapper
            arrows={true}
            fade={true}
            prevArrow={<SlackSliderNavPrev />}
            nextArrow={<SlackSliderNavNext />}
          >
            <div>
              <SlackMessage
                avatarSrc={require('./images/photo-reventadorgames@2x.png')}
                author="reventadorgames"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/photo-devjoshlopez@2x.jpg')}
                author="devjoshlopez"
              >
                <p>I am new here too and coming from Parse. The people at Syncano are amazing and I think i made a good
                choice.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/photo-hoco@2x.png')}
                author="hoco"
              >
                <p>Hey, my app that used to be based on Parse.com and is now based on Syncano is in beta test!</p>
              </SlackMessage>
            </div>
          </SliderWrapper>
        </div>
        <a
          href="http://syncano.io/slack-invite/"
          className="button button--white"
          target="_blank"
        >
          Join Us on Slack
        </a>
      </div>
    </div>
  );
};
