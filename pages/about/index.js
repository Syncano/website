import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { AboutUs, AboutUsHeaderImage, BlockquoteSection, CounterBoxes, CTASection, Footer, OfficesMap, PageHeader, Team } from '../../components';

export default () => {
  return (
    <DocumentTitle title="About">
      <div>
        <PageHeader
          headline="About"
          textline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <AboutUsHeaderImage
          imageSrc={require('./header-image.jpg')}
          image2xSrc={require('./header-image@2x.jpg')}
          imageSmall2xSrc={require('./header-image-small.jpg')}
          imageSmall2xSrc={require('./header-image-small@2x.jpg')}
          imageMediumSrc={require('./header-image-medium.jpg')}
        />
        <AboutUs headline="Made for developers, by developers">
          <p>We believe in the world-changing power of apps and in the developers who build them. And the
          ever-increasing complexity of these apps demanded a new platform made by developers, for developers.</p>
          <p>Syncano eliminates the need for backend development - but unlike other BaaS systems, we’re just getting you
          started.</p>
          <p>Synchronize all the data in real-time, wherever it’s from, whenever it’s relevant, and whatever it looks
          like. Deploy totally scalable code to any device.</p>
        </AboutUs>
        <CounterBoxes />
        <BlockquoteSection>
          <p>„What used to take 5 weeks now takes just 1 week with Syncano. You let developers be developers and not get
          stuck being middleware or database engineers.”</p>
        </BlockquoteSection>
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
          <h2>Join Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link
            to="/jobs/"
            className="button button--large button--featured"
          >
            View Jobs at Syncano
          </Link>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
