import React from 'react';
import _ from 'lodash';
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
          const slug = _.kebabCase(title);

          return (
            <TermsAndLegalNavItem
              key={slug}
              title={title}
              slug={slug}
            />
          );
        })}
      </ul>
    </nav>
  );
};
