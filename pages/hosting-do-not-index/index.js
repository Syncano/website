import React, { PropTypes } from 'react';
import {
  CTASection,
  Footer,
  LoggedInContent,
  LoggedOutContent,
  PageHeader,
  PageHelmet,
  SideIconParagraphs,
  Terminal,
  TerminalSection
} from '../../components';

const HostingPage = (props, { modals }) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Static Web Hosting for Developers"
        mixpanelTitle="Hosting"
        description="Secure, single-command web publishing for your applications."
        ogImageSrc={`${redirect_uri}${require('file-loader!./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('file-loader!./twitter-image.png')}`}
        noindexNofollow={true}
      />
      <PageHeader
        headline={<span>Static Web Hosting <br />for Developers</span>}
        textline="Secure, single-command web publishing for your applications."
      >
        <LoggedOutContent>
          <span
            className="button button--large button--featured"
            onClick={modals.signUp.open}
          >
            Get Started for Free
          </span>
        </LoggedOutContent>
        <LoggedInContent>
          <a
            className="button button--large button--featured"
            href={APP_CONFIG.dashboardUrl}
          >
            Go to Dashboard
          </a>
        </LoggedInContent>
        <p className="page-header__button-description">
          30 days free &bull; No credit card required
        </p>
      </PageHeader>
      <TerminalSection
        variant="under-page-header"
        theme="hosting-publish"
      >
        <Terminal
          code={require('./syncano-hosting-publish.txt')}
          bottomShadow={true}
        />
      </TerminalSection>
      <SideIconParagraphs
        variant="top-spacing"
        theme="blue"
      >
        <SideIconParagraphs.Paragraph
          iconSrc={require('./simple-web-publishing-from-the-command-line.svg')}
          headline={<span>Simple web publishing <br />from the command line</span>}
          text={<span>With the <a href="https://github.com/Syncano/syncano-cli" target="_blank">Syncano CLI</a>, you can
            rapidly push your entire web app, or just individual files, with just a few commands. Take a look below to
            see just how simple it really is!</span>}
        />
        <SideIconParagraphs.Paragraph
          iconSrc={require('./securely-delivered-content-worldwide.svg')}
          headline={<span>Securely delivered <br />content worldwide</span>}
          text={`SSL is a standard for web app security in today’s modern web. By hosting your app with Syncano, you’ll
            have security built-in, creating a worry-free production environment!`}
        />
        <SideIconParagraphs.Paragraph
          iconSrc={require('./quick-rollbacks-to-undo-mistakes.svg')}
          headline="Quick rollbacks to undo mistakes"
          text={`Need to rollback to a previous version fast? The Syncano Platform allows for making switches between
            hosted sites so that you can easily control which version will be displayed. Never again will you regret
            pushing to production!`}
        />
        <SideIconParagraphs.Paragraph
          iconSrc={require('./scale-your-websites-on-demand.svg')}
          headline="Scale your websites on demand"
          text={`Each Syncano hosted site uses Amazon’s S3 platform for storage. This means all of your data and files
            are secure, and your web app is automatically highly-scalable, as well as extremely durable.`}
        />
      </SideIconParagraphs>
      <TerminalSection
        headline="Hosting Quickstart"
        textline="Learn how to start with Syncano Hosting in one minute!"
      >
        <Terminal code={require('./hosting-quickstart.txt')} />
        <a
          href="http://docs.syncano.io/v1.1/docs/hosting/"
          className="button"
          target="_blank"
        >
          View Documentation
        </a>
      </TerminalSection>
      <CTASection />
      <Footer />
    </div>
  );
};

HostingPage.contextTypes = {
  modals: PropTypes.object
};

export default HostingPage;
