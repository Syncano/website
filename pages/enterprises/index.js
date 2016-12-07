import React from 'react';
import {
  CTASection,
  CustomerSection,
  Footer,
  Link,
  PageHeader,
  PageHelmet,
  TextWithBackground,
  TextWithImage
} from '../../components';

const { redirect_uri } = APP_CONFIG;

const Enterprises = () => (
  <div className="enterprises-page">
    <PageHelmet
      title="Syncano for Enterprises"
      mixpanelTitle="Enterprises"
      description={`Achieve a competitive advantage by unlocking the potential of thousands of developers across the
        world. Learn more...`}
      ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
      twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
    />
    <PageHeader
      headline="Syncano for Enterprises"
      textline={[
        'Syncano offers an automated serverless backend platform - leveraging the power of a Developer Community.',
        <br />,
        <br />,
        'IT legacy backend systems halters the innovation process, and results in a decreasing product market fit. Keeping your current product market fit requires rapid experimentation. Efficient software development is the key to successful Enterprises in the future.'
      ]}
    >

    </PageHeader>
    <TextWithImage
      theme="gray"
      headline={[
        'Enterprise innovation',
        <br />,
        'meets Lean Startup'
      ]}
      textline={[
        'Syncano is a serverless platform for accelerated software development, leveraging the power of a large community. Achieve competitive advantage by unlocking the potential of thousands of developers with no added overhead.',
      ]}
      image={
        <img
          src={require('./integrations-to-help-you-connect-systems.svg')}
          alt="Integrations to help you connect systems"
        />
      }
    >
      <div className="text-with-image__text__list" style={{ marginBottom: 32 }}>
        <ul>
          <li>Ensure future market position</li>
          <li>Stay ahead of the competition</li>
          <li>Reduce the innovation backlog</li>
        </ul>
      </div>
      <div style={{ lineHeight: 1.6 }}>
        Syncano can be cloud based or run on-premise.
        <br />
        <br />
        Do you want to know learn how your enterprise can benefit from this?
      </div>      
      <a
        className="button"
        href="https://pipedrivewebforms.com/form/c9950aad5f4c79f9ca4b6dc0cffe15c31317049"
        target="_blank"
      >
        Book a meeting with Us
      </a>
    </TextWithImage>
    <Footer />
  </div>
);

export default Enterprises;
