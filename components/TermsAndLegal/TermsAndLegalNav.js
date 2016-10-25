import React, { PropTypes } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import TermsAndLegalNavItem from './TermsAndLegalNavItem';

const TermsAndLegalNav = ({ children }, { topBarHeight }) => {
  return (
    <StickyContainer className="terms-and-legal__sidebar">
      <Sticky
        topOffset={-topBarHeight}
        className="terms-and-legal__sidebar__nav-container"
      >
        <nav className="terms-and-legal__sidebar__nav">
          <h3 className="terms-and-legal__sidebar__nav__headline">
            Table of Content
          </h3>
          <ul>
            {children.map((child) => {
              const { title } = child.props;

              return (
                <TermsAndLegalNavItem
                  key={title}
                  title={title}
                />
              );
            })}
          </ul>
        </nav>
      </Sticky>
    </StickyContainer>
  );
};

TermsAndLegalNav.contextTypes = {
  topBarHeight: PropTypes.number
};

export default TermsAndLegalNav;
