import React from 'react';

const SocialProfilesGroup = ({ title, children }) => (
  <div className="social-profiles__group">
    <h3>{title}</h3>
    <div className="social-profiles__group__profiles">
      {children}
    </div>
  </div>
);

export default SocialProfilesGroup;
