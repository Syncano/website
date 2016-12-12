import React from 'react';
import SocialProfilesGroup from './SocialProfilesGroup';
import SocialProfilesIcon from './SocialProfilesIcon';

const SocialProfiles = ({ variant }) => (
  <div className="social-profiles">
    <div className="inner">
      <SocialProfilesGroup title="Fork us on GitHub">
        <SocialProfilesIcon
          href="https://github.com/Syncano/"
          title="GitHub"
          imgSrc={require('./images/github.svg')}
        />
      </SocialProfilesGroup>
      <SocialProfilesGroup title="Follow us">
        <SocialProfilesIcon
          href="https://www.facebook.com/syncano/"
          title="Facebook"
          imgSrc={require('./images/facebook.svg')}
        />
        <SocialProfilesIcon
          href="https://twitter.com/Syncano/"
          title="Twitter"
          imgSrc={require('./images/twitter.svg')}
        />
        <SocialProfilesIcon
          href="https://twitter.com/SyncanoStatus/"
          title="Twitter Status"
          imgSrc={require('./images/twitter.svg')}
          dotImgSrc={require('./images/status.svg')}
          dotImgAlt="Status"
          isHidden={variant === 'community'}
        />
        <SocialProfilesIcon
          href="https://www.linkedin.com/company/syncano/"
          title="LinkedIn"
          imgSrc={require('./images/linkedin.svg')}
          isHidden={variant !== 'community'}
        />
        <SocialProfilesIcon
          href="https://www.syncano.io/blog/"
          title="Blog"
          imgSrc={require('./images/blog.svg')}
          isHidden={variant !== 'community'}
        />
      </SocialProfilesGroup>
      <SocialProfilesGroup title="Join the community">
        <SocialProfilesIcon
          href="https://www.syncano.io/slack-invite/"
          title="Slack"
          imgSrc={require('./images/slack.svg')}
        />
      </SocialProfilesGroup>
    </div>
  </div>
);

export default SocialProfiles;
