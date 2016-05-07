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
            prevArrow={SlackSliderNavPrev}
            nextArrow={SlackSliderNavNext}
          >
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
            <div>
              <SlackMessage
                avatarSrc={require('./images/avatar@2x.jpg')}
                author="John Doe"
              >
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
                <p>I'm an indie mobile game developer and have just started using syncano, it's working great -
                remarkably fast even over 3G connections.</p>
              </SlackMessage>
            </div>
          </SliderWrapper>
        </div>
        <a
          href="https://syncano-community.slack.com/"
          className="button button--white"
          target="_blank"
        >
          Join Us on Slack
        </a>
      </div>
    </div>
  );
};
