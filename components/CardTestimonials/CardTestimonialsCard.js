import React from 'react';
import { Link } from 'react-router';

const CardTestimonialsCard = ({
  headline,
  textline,
  link1To,
  link1Text,
  link2To,
  link2Text,
  authorImgSrc,
  quote,
  author
}) => (
  <div className="card-testimonials__card">
    <div className="card-testimonials__card__headline">{headline}</div>
    <div className="card-testimonials__card__textline">{textline}</div>
    <div className="card-testimonials__card__buttons">
      <Link
        to={link1To}
        className="button button--filled"
      >
        {link1Text}
      </Link>
      <Link
        to={link2To}
        className="button button--filled"
      >
        {link2Text}
      </Link>
    </div>
    <div className="card-testimonials__card__body">
      <div className="card-testimonials__card__body__image">
        <img
          src={authorImgSrc}
          alt={author}
        />
      </div>
      <div className="card-testimonials__card__body__quote">
        <blockquote className="card-testimonials__card__body__quote__text">
          <p>{quote}</p>
        </blockquote>
        <div className="card-testimonials__card__body__quote__author">{author}</div>
      </div>
    </div>
  </div>
);

export default CardTestimonialsCard;
