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
      title="Syncano community"
      mixpanelTitle="Community"
      description={`One person with an idea needs iteration to reach perfection. With a community, you have many brains to make that process incredibly fast.`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Communities fuel growth"
      textline={[
        `“One person with an idea needs iteration to reach perfection.`,
        <br />,
        `With a community, you have many brains to make that process incredibly fast.”`,
        <br />,
        `- Maciej Kucharz, CTO, Syncano`
      ]}
    >
      <div style={{ lineHeight: 1.6 }}>
        <br />
        The Syncano Community is the sum of everyone who uses the system and contributes to creating ever growing library of functions and integrations. These building blocks are what we call Syncano Sockets, and they are the key to the exponential growth potential for anyone who uses Syncano.
      </div>
    </PageHeader>
    <CounterBoxes />
    <ListColumns headline={[
      'The most successful businesses',
      ' are built on communities'
    ]}>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ margin: '0 0 32px', lineHeight: 1.6 }}>
          The fastest growing companies of today owes their success to the utilization of communities.<br/>These are some examples:
        </div>
        <div className="community-icons">
          <img src={require('./airbnb.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./houses.svg')} />
        </div>
        <div style={{ lineHeight: 1.6, marginBottom: 48 }}>
         AirBnB taps into the crowd of home owners in order to create a marketplace for accomodation. Their software connects an unlimited capacity for growth with practically no incremental cost.
        </div>
        <div className="community-icons">
          <img src={require('./uber.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./sports-car.svg')} />
        </div>
        <div style={{ lineHeight: 1.6, marginBottom: 48 }}>
          Uber uses the potential that lies in all the worlds’ unused transportation capacity by being the central connection point to a worldwide crowd of car owners. Although they do need some local presence in each country where they operate, it outcompetes other personal transportation services through scaling their market share with minimal resources.
        </div>
        <div className="community-icons">
          <img src={require('./alibaba.svg')} />
          <img src={require('./next.svg')} />
          <img src={require('./shopping-cart.svg')} />
        </div>
        <div style={{ lineHeight: 1.6, marginBottom: 48 }}>
          Alibaba is the worlds largest online ecommerce retailer, but they have no inventory of their own. It is a software service that connects a vast network of retail suppliers to their customers, scaling their revenue to exponential levels. It is essentially a community for ecommerce, and has created unforeseen growth in revenue - with lightning speed.
        </div>
      </div>
    </ListColumns>
    <CTASection>
      <h2 style={{ marginBottom: 16 }}>Syncano and the developer community</h2>
      <div style={{ color: '#fff', lineHeight: 1.6 }}>
        <div>Innovation drives growth and speed keeps you ahead of your competition. Syncano has the community that unlocks this potential.</div>
        <div>Do you want to learn how Syncano can connect your business to the developer community?</div>
        <a
          className="button button--large button--featured"
          href="https://pipedrivewebforms.com/form/c9950aad5f4c79f9ca4b6dc0cffe15c31317049"
          target="_blank"
        >
          Get in touch with us!
        </a>
      </div>
    </CTASection>
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
    <Footer/>
  </div>
);

export default  Community;