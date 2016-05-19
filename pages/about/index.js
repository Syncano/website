import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { AboutUs, AboutUsHeaderImage, CounterBoxes, CTASection, Footer, OfficesMap, PageHeader, Team } from '../../components';

export default () => {
  return (
    <DocumentTitle title="About us">
      <div>
        <PageHeader
          headline="About us"
          textline="We help developers build amazing apps"
        />
        <AboutUsHeaderImage
          imageSrc={require('./header-image.jpg')}
          image2xSrc={require('./header-image@2x.jpg')}
          imageSmall2xSrc={require('./header-image-small.jpg')}
          imageSmall2xSrc={require('./header-image-small@2x.jpg')}
          imageMediumSrc={require('./header-image-medium.jpg')}
        />
        <AboutUs
          headline="Empowering developers worldwide"
          imageSrc={require('./about-us.png')}
          image2xSrc={require('./about-us@2x.png')}
          imageSmallSrc={require('./about-us-small.png')}
          imageSmall2xSrc={require('./about-us-small@2x.png')}
        >
          <p>We believe in the world-changing power of apps and the developers who build them. The ever-increasing
          complexity of these apps demands a new serverless platform - made by developers, for developers.</p>
          <p>At Syncano, we’re changing the way the world thinks about software development. We want to help developers
          focus on strategic initiatives, and not worry about heavy lifting.</p>
        </AboutUs>
        <CounterBoxes />
        <OfficesMap />
        <Team headline="Meet the Syncano team">
          <Team.Member
            photoSrc={require('./team-member-nikolai-fasting.jpg')}
            photo2xSrc={require('./team-member-nikolai-fasting@2x.jpg')}
            photoMediumSrc={require('./team-member-nikolai-fasting-medium.jpg')}
            photoMedium2xSrc={require('./team-member-nikolai-fasting-medium@2x.jpg')}
            name="Nikolai Fasting"
            position="Chief Executive Officer"
          />
          <Team.Member
            photoSrc={require('./team-member-hubert-wesolowski.jpg')}
            photo2xSrc={require('./team-member-hubert-wesolowski@2x.jpg')}
            photoMediumSrc={require('./team-member-hubert-wesolowski-medium.jpg')}
            photoMedium2xSrc={require('./team-member-hubert-wesolowski-medium@2x.jpg')}
            name="Hubert Wesołowski"
            position="Junior Front-end Developer"
          />
          <Team.Member
            photoSrc={require('./team-member-nikolai-fasting.jpg')}
            photo2xSrc={require('./team-member-nikolai-fasting@2x.jpg')}
            photoMediumSrc={require('./team-member-nikolai-fasting-medium.jpg')}
            photoMedium2xSrc={require('./team-member-nikolai-fasting-medium@2x.jpg')}
            name="Nikolai Fasting"
            position="Chief Executive Officer"
          />
          <Team.Member
            photoSrc={require('./team-member-hubert-wesolowski.jpg')}
            photo2xSrc={require('./team-member-hubert-wesolowski@2x.jpg')}
            photoMediumSrc={require('./team-member-hubert-wesolowski-medium.jpg')}
            photoMedium2xSrc={require('./team-member-hubert-wesolowski-medium@2x.jpg')}
            name="Hubert Wesołowski"
            position="Junior Front-end Developer"
          />
          <Team.Member
            photoSrc={require('./team-member-nikolai-fasting.jpg')}
            photo2xSrc={require('./team-member-nikolai-fasting@2x.jpg')}
            photoMediumSrc={require('./team-member-nikolai-fasting-medium.jpg')}
            photoMedium2xSrc={require('./team-member-nikolai-fasting-medium@2x.jpg')}
            name="Nikolai Fasting"
            position="Chief Executive Officer"
          />
          <Team.Member
            photoSrc={require('./team-member-hubert-wesolowski.jpg')}
            photo2xSrc={require('./team-member-hubert-wesolowski@2x.jpg')}
            photoMediumSrc={require('./team-member-hubert-wesolowski-medium.jpg')}
            photoMedium2xSrc={require('./team-member-hubert-wesolowski-medium@2x.jpg')}
            name="Hubert Wesołowski"
            position="Junior Front-end Developer"
          />
          <Team.Member
            photoSrc={require('./team-member-nikolai-fasting.jpg')}
            photo2xSrc={require('./team-member-nikolai-fasting@2x.jpg')}
            photoMediumSrc={require('./team-member-nikolai-fasting-medium.jpg')}
            photoMedium2xSrc={require('./team-member-nikolai-fasting-medium@2x.jpg')}
            name="Nikolai Fasting"
            position="Chief Executive Officer"
          />
          <Team.Member
            photoSrc={require('./team-member-hubert-wesolowski.jpg')}
            photo2xSrc={require('./team-member-hubert-wesolowski@2x.jpg')}
            photoMediumSrc={require('./team-member-hubert-wesolowski-medium.jpg')}
            photoMedium2xSrc={require('./team-member-hubert-wesolowski-medium@2x.jpg')}
            name="Hubert Wesołowski"
            position="Junior Front-end Developer"
          />
        </Team>
        <CTASection theme="gray">
          <h2>Working at Syncano</h2>
          <p>Join us and help create a unique serverless platform for developers worldwide</p>
          <a
            href="https://syncano.workable.com/"
            className="button button--large button--filled"
            target="_blank"
          >
            View Jobs at Syncano
          </a>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
