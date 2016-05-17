import React, { Component } from 'react';
import SliderWrapper from './SliderWrapper';

export default class TwitterPricingSlider extends Component {
  componentDidMount = () => {
    if (typeof twttr !== 'undefined') {
      twttr.widgets.load(this.twitterSlider);
    }
  };

  render = () => {
    return (
      <div
        className="twitter-slider twitter-slider--pricing"
        ref={(ref) => this.twitterSlider = ref}
      >
        <div className="inner">
          <div className="twitter-slider__slider">
            <SliderWrapper
              slidesToShow={3}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    dots: true
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    dots: true
                  }
                },
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    dots: false
                  }
                }
              ]}
            >
              <div>
                <blockquote className="twitter-tweet" data-conversation="none" data-lang="pl">
                  <p lang="en" dir="ltr"><a href="https://twitter.com/FawazShak">@FawazShak</a> I&#39;m liking <a href="https://twitter.com/Syncano">@Syncano</a>. Their support exceeds everyone I&#39;ve ever dealt with.</p>
                  &mdash; Josh Lopez (@DevJoshLopez) <a href="https://twitter.com/DevJoshLopez/status/727236023298625537">2 maja 2016</a>
                </blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-lang="pl">
                  <p lang="en" dir="ltr">Been using <a href="https://twitter.com/Syncano">@Syncano</a> for a while for all my backend needs. All you <a href="https://twitter.com/hashtag/developer?src=hash">#developer</a> peeps check it out! <a href="https://twitter.com/hashtag/javascript?src=hash">#javascript</a> <a href="https://twitter.com/hashtag/nodejs?src=hash">#nodejs</a> <a href="https://t.co/dr0n68uA82">https://t.co/dr0n68uA82</a></p>
                  &mdash; Devin Visslailli (@DevinViss) <a href="https://twitter.com/DevinViss/status/723543598843744258">22 kwietnia 2016</a>
                </blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-lang="pl">
                  <p lang="en" dir="ltr">Congrats to Forbes Technology Council company <a href="https://twitter.com/Syncano">@Syncano</a> on the launch of Sockets. Great news <a href="https://twitter.com/nikf2001">@Nikf2001</a>! <a href="https://t.co/A5KASS66m8">https://t.co/A5KASS66m8</a></p>
                  &mdash; Forbes Tech Council (@ForbesTechCncl) <a href="https://twitter.com/ForbesTechCncl/status/721009609604014080">15 kwietnia 2016</a>
                </blockquote>
              </div>
            </SliderWrapper>
          </div>
        </div>
      </div>
    );
  };
};
