import React from 'react';

const LargeBlockquote = ({ authorImgSrc, quote, author, linkHref, linkText }) => (
  <div className="large-blockquote">
    <div className="inner">
      <div className="large-blockquote__quote">
        <div className="large-blockquote__quote__image">
          <img
            src={authorImgSrc}
            alt={author}
          />
        </div>
        <div className="large-blockquote__quote__content">
          <blockquote className="large-blockquote__quote__content__text">
            <p>{quote}</p>
          </blockquote>
          <div className="large-blockquote__quote__content__author">
            {author}
          </div>
          <div className="large-blockquote__quote__content__more">
            <a
              href={linkHref}
              target="_blank"
            >
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LargeBlockquote;
