import React from 'react';
import TermsAndLegalNavItem from './TermsAndLegalNavItem';

export default ({ children }) => {
  return (
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
  );
};
