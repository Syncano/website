import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import TermsAndLegalNav from './TermsAndLegalNav';

export default ({ children }) => {
  return (
    <div className="terms-and-legal">
      <div className="inner">
        <StickyContainer className="terms-and-legal__sidebar">
          <Sticky
            topOffset={-10}
            className="terms-and-legal__sidebar__nav-container"
          >
            <TermsAndLegalNav>
              {children}
            </TermsAndLegalNav>
          </Sticky>
        </StickyContainer>
        <div className="terms-and-legal__page">
          {children}
        </div>
      </div>
    </div>
  );
};
