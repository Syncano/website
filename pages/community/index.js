import React from 'react';
import {
  CounterBoxes,
  Footer,
  CommunityExamples,
  PageHeader,
  PageHelmet,
  SocialProfiles,
  TextWithImage
} from '../../components';

const CommunityPage = () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Communities Fuel Growth | Syncano"
        mixpanelTitle="Community"
        description={`One person with an idea needs iteration to reach perfection. With a community, you have many
          brains to make that process incredibly fast.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Communities fuel growth"
        textline={<span><q>One person with an idea needs iteration to reach perfection. With a community, you have many
          brains to make that process incredibly fast.</q><br className="force" />- Maciej Kucharz, CTO, Syncano</span>}
      >
        <p>
          The Syncano Community is the sum of everyone who uses the system and contributes to creating ever growing
          library of functions and integrations. These building blocks are what we call Syncano Sockets, and they are
          the key to the exponential growth potential for anyone who uses Syncano.
        </p>
      </PageHeader>
      <CounterBoxes />
      <CommunityExamples
        headline="The most successful businesses are built on communities"
        textline={`The fastest growing companies of today owes their success to the utilization of communities. These
          are some examples:`}
      >
        <CommunityExamples.Example
          leftImgSrc={require('./airbnb.svg')}
          leftImgAlt="Airbnb"
          rightImgSrc={require('./houses.svg')}
          rightImgAlt="houses"
          text={`Airbnb taps into the crowd of home owners in order to create a marketplace for accomodation. Their
            software connects an unlimited capacity for growth with practically no incremental cost.`}
        />
        <CommunityExamples.Example
          leftImgSrc={require('./uber.svg')}
          leftImgAlt="Uber"
          rightImgSrc={require('./cars.svg')}
          ightImgAlt="sports car"
          text={`Uber uses the potential that lies in all the worlds’ unused transportation capacity by being the
            central connection point to a worldwide crowd of car owners. Although they do need some local presence in
            each country where they operate, it outcompetes other personal transportation services through scaling their
            market share with minimal resources.`}
        />
        <CommunityExamples.Example
          leftImgSrc={require('./alibaba.svg')}
          leftImgAlt="Alibaba"
          rightImgSrc={require('./shopping-carts.svg')}
          ightImgAlt="shopping carts"
          text={`Alibaba is the worlds largest online ecommerce retailer, but they have no inventory of their own. It is
            a software service that connects a vast network of retail suppliers to their customers, scaling their
            revenue to exponential levels. It is essentially a community for ecommerce, and has created unforeseen
            growth in revenue - with lightning speed.`}
        />
        <CommunityExamples.Example
          leftImgSrc={require('./syncano.svg')}
          leftImgAlt="Syncano"
          rightImgSrc={require('./thinking.svg')}
          ightImgAlt="thinking"
          text={
            <div>
              <div>
                Innovation drives growth and speed keeps you ahead of your competition. Syncano has the community that
                unlocks this potential. Do you want to learn how Syncano can connect your business to the developer
                community?
              </div>
              <a
                className="button button--large button--featured"
                href="https://pipedrivewebforms.com/form/c9950aad5f4c79f9ca4b6dc0cffe15c31317049"
                target="_blank"
              >
                Get in touch with us!
              </a>
            </div>
          }
        />
      </CommunityExamples>
      <TextWithImage
        variant="image-right"
        theme="purple"
        headline="Speed for your enterprise"
        image={
          <img
            src={require('./speed-for-your-enterprise.svg')}
            alt="suitcase"
          />
        }
      >
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
        headline="Accelerate your startup"
        image={
          <img
            src={require('./accelerate-your-startup.svg')}
            alt="startup rocket"
          />
        }
      >
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
        headline="Opportunities for developers"
        image={
          <img
            src={require('./opportunities-for-developers.svg')}
            alt="computer"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>Monetize your skills</li>
            <li>Be part of the global tech revolution</li>
            <li>Connect with peers</li>
          </ul>
        </div>
      </TextWithImage>
      <SocialProfiles variant="community" />
      <Footer />
    </div>
  );
};

export default CommunityPage;
