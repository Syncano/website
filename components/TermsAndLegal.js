import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

export default ({ items }) => {
  return (
    <div className="terms-and-legal">
      <div className="inner">
        <StickyContainer className="terms-and-legal__sidebar">
          <Sticky
            topOffset={-10}
            className="terms-and-legal__sidebar__nav-container"
          >
            <div className="terms-and-legal__sidebar__nav">
              <h3 className="terms-and-legal__sidebar__nav__headline">
                Table of Content
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item.key}>
                    <a href={"#" + item.key}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Sticky>
        </StickyContainer>
        <div className="terms-and-legal__page">
          {items.map((item) => (
            <div
              key={item.key}
              className="terms-and-legal__page__entry"
              id={item.key}
            >
              <h3>{item.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: item.contentHTML }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
