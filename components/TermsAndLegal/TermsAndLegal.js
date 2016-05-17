import React from 'react';
import TermsAndLegalNav from './TermsAndLegalNav';

export default ({ children }) => {
  return (
    <div className="terms-and-legal">
      <div className="inner">
        <TermsAndLegalNav>
          {children}
        </TermsAndLegalNav>
        <div className="terms-and-legal__page">
          {children}
        </div>
      </div>
    </div>
  );
};
