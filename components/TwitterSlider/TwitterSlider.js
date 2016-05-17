import React, { Component } from 'react';
import SliderWrapper from '../SliderWrapper';
import TwitterSliderNavPrev from './TwitterSliderNavPrev';
import TwitterSliderNavNext from './TwitterSliderNavNext';

export default class TwitterSlider extends Component {
  componentDidMount = () => {
    if (typeof twttr !== 'undefined') {
      twttr.widgets.load(this.twitterSlider);
    }
  };

  render = () => {
    return (
      <div
        className="twitter-slider"
        ref={(ref) => this.twitterSlider = ref}
      >
        <div className="inner">
          <h2>&lt;3 From our users</h2>
          <div className="twitter-slider__slider">
            <SliderWrapper
              arrows={true}
              slidesToShow={3}
              prevArrow={<TwitterSliderNavPrev />}
              nextArrow={<TwitterSliderNavNext />}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                  }
                }
              ]}
            >
              <div>
                <blockquote className="twitter-tweet" data-lang="pl"><p lang="en" dir="ltr">It&#39;s great to see this platform growing - it&#39;s really worth some minutes of your time to investigate. <a href="https://t.co/pMW4qn1Ly6">https://t.co/pMW4qn1Ly6</a></p>&mdash; Bizzi Body (@BizziBodyDotCom) <a href="https://twitter.com/BizziBodyDotCom/status/712734440062074883">23 marca 2016</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-lang="pl"><p lang="en" dir="ltr">Just spent a few minutes trying out <a href="https://twitter.com/Syncano">@syncano</a> . Nice! <a href="https://twitter.com/hashtag/MBaaS?src=hash">#MBaaS</a> <a href="https://twitter.com/hashtag/BaaS?src=hash">#BaaS</a> <a href="https://twitter.com/hashtag/cloud?src=hash">#cloud</a> <a href="https://twitter.com/hashtag/mobile?src=hash">#mobile</a> <a href="https://twitter.com/hashtag/iOS?src=hash">#iOS</a> <a href="https://twitter.com/hashtag/android?src=hash">#android</a></p>&mdash; Karthik Jayakumar (@karthikjai) <a href="https://twitter.com/karthikjai/status/667455738139320320">19 listopada 2015</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-lang="pl"><p lang="en" dir="ltr">damn <a href="https://twitter.com/Syncano">@syncano</a> yall bout to make me flip up alot of my apps backend infrastructure...this service looks sexy!</p>&mdash; SIRVON (@sirvonthomas) <a href="https://twitter.com/sirvonthomas/status/650071291634946048">2 października 2015</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-conversation="none" data-lang="pl"><p lang="en" dir="ltr"><a href="https://twitter.com/FawazShak">@FawazShak</a> I&#39;m liking <a href="https://twitter.com/Syncano">@Syncano</a>. Their support exceeds everyone I&#39;ve ever dealt with.</p>&mdash; Josh Lopez (@DevJoshLopez) <a href="https://twitter.com/DevJoshLopez/status/727236023298625537">2 maja 2016</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-lang="pl"><p lang="en" dir="ltr">So awesome, moved all my in game variables onto the <a href="https://twitter.com/Syncano">@Syncano</a> real-time platform. Can edit all game variables on the fly <a href="https://twitter.com/hashtag/GameMaker?src=hash">#GameMaker</a> <a href="https://twitter.com/hashtag/GameDev?src=hash">#GameDev</a></p>&mdash; Thomas Webb (@ReventadorGames) <a href="https://twitter.com/ReventadorGames/status/717796429251497985">6 kwietnia 2016</a></blockquote>
              </div>
            </SliderWrapper>
          </div>
          <a
            href="https://twitter.com/Syncano/"
            className="button button--white"
            target="_blank"
          >
            More Tweets
          </a>
        </div>
      </div>
    );
  };
};
