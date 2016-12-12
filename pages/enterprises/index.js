import React from 'react';
import { Footer, PageHeader, PageHelmet, TextWithImage } from '../../components';

const EnterprisesPage = () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
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
        textline={<span>Syncano offers an automated serverless backend platform - leveraging the power
          of&nbsp;a&nbsp;Developer Community.</span>}
      >
        <p>
          IT legacy backend systems halters the innovation process, and results in a decreasing product market fit.
          Keeping your current product market fit requires rapid experimentation. Efficient software development is the
          key to successful Enterprises in the future.
        </p>
      </PageHeader>
      <TextWithImage
        theme="gray"
        headline={<span>Enterprise innovation<br />meets Lean Startup</span>}
        textline={`Syncano is a serverless platform for accelerated software development, leveraging the power of a
          large community. Achieve competitive advantage by unlocking the potential of thousands of developers with no
          added overhead.`}
        image={
          <img
            src={require('./integrations-to-help-you-connect-systems.svg')}
            alt="Integrations to help you connect systems"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>Ensure future market position</li>
            <li>Stay ahead of the competition</li>
            <li>Reduce the innovation backlog</li>
          </ul>
        </div>
        <p>
          Syncano can be cloud based or run on-premise.<br />Do you want to know learn how your enterprise can benefit
          from this?
        </p>
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
};

export default EnterprisesPage;
