import React from 'react';
import {
  CounterBoxes,
  PageHelmet,
  PageHeader,
  CTASection,
  Footer,
  TextWithImage,
  ListColumns
} from '../../components';
import SocialProfilesCommunity from '../../components/SocialProfiles/SocialProfilesCommunity';

const { redirect_uri } = APP_CONFIG;

const Community = () => (
  <div className="community-page">
    <PageHelmet
      title="Syncano for Mobile Developers"
      mixpanelTitle="Mobile Developers"
      description={`One person with an idea needs iteration to reach perfection. With a community, you have many brains to make that process incredibly fast.`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Innovate faster"
      textline={[
        'Increase your productivity and focus on user experience.',
        <br />,
        'Build powerful backends for your apps in half the time and scale without managing servers.'
      ]}
    />
    <CounterBoxes />
    <ListColumns headline="Communities fuel growth">
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ margin: '0 0 32px' }}>
          The fastest growing companies of today owes their success to the utilization of communities.
        </div>
        <div className="community-icons">
          <img src={require('./airbnb.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./houses.svg')} />
        </div>
        <div className="community-icons">
          <img src={require('./uber.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./sports-car.svg')} />
        </div>
        <div className="community-icons">
          <img src={require('./ebay.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./shopping-cart.svg')} />
        </div>
      </div>
    </ListColumns>

    <TextWithImage
      variant="image-right"
      theme="purple"
      image={
        <div style={{ width: '50%', margin: '0 auto' }}>
          <img
            src={require('./suitcase-icon.svg')}
            alt="enterprise"
          />
        </div>
      }
      headline="Speed for your enterprise">
      <div className="text-with-image__text__list">
        <ul>
          <li>Create new products faster</li>
          <li>Reduce the backlog</li>
          <li>Unlimited resources. Zero overhead.</li>
        </ul>
      </div>
    </TextWithImage>
    <TextWithImage
      theme="gray"
      image={
        <div style={{ width: '50%', margin: '0 auto' }}>
          <img
            src={require('./web-startup.svg')}
            alt="startup"
          />
        </div>
      }
      headline="Accelerate your startup">
      <div className="text-with-image__text__list">
        <ul>
          <li>Reach market fit faster</li>
          <li>Unlimited resources. Unaffected burn rate.</li>
          <li>Discover new possibilities</li>
        </ul>
      </div>
    </TextWithImage>
    <TextWithImage
      variant="image-right"
      image={
        <div style={{ width: '50%', margin: '0 auto' }}>
          <img
            src={require('./programming.svg')}
            alt="developers"
          />
        </div>
      }
      headline="Opportunities for developers">
      <div className="text-with-image__text__list">
        <ul>
          <li>Monetize your skills</li>
          <li>Be part of the global tech revolution</li>
          <li>Connect with peers</li>
        </ul>
      </div>
    </TextWithImage>
    <SocialProfilesCommunity />
    <CTASection/>
    <Footer/>
  </div>
);

export default  Community;