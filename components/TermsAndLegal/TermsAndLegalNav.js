import React from 'react';

export default ({ children }) => {
  return (
    <nav className="terms-and-legal__sidebar__nav">
      <h3 className="terms-and-legal__sidebar__nav__headline">
        Table of Content
      </h3>
      <ul>
        {children.map((child) => (
          <li key={child.props.slug}>
            <a href={"#" + child.props.slug}>
              {child.props.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
