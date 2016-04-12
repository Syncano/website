import React from 'react';
import includes from 'underscore.string/include';
import { Link } from 'react-router';

export default (props) => {
  let activeSlug;
  const pathname = props.pathname;
  const activeColor = '#006DD6';

  if (includes(pathname, '/features/')) activeSlug = 'features';
  if (includes(pathname, '/pricing/')) activeSlug = 'pricing';
  if (includes(pathname, '/blog/')) activeSlug = 'blog';
  if (includes(pathname, '/login/')) activeSlug = 'login';
  if (includes(pathname, '/signup/')) activeSlug = 'signup';

  return (
    <div className="top-bar">
      <div className="inner">
        <div className="top-bar__logo">
          <h1>
            <Link to="/">
              <img
                src={require('../images/logo.svg')}
                alt="Syncano Logo"
              />
            </Link>
          </h1>
        </div>
        <nav className="top-bar__nav">
          <div className="top-bar__nav__hamburger">
            <img
              src={require('../images/hamburger.svg')}
              alt="hamburger menu"
            />
          </div>
          <div className="top-bar__nav__menu">
            <ul>
              <li>
                <Link
                  to="/features/"
                  className="button button-noborder"
                  style={{
                    color: activeSlug == 'features' ? activeColor : ''
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing/"
                  className="button button-noborder"
                  style={{
                    color: activeSlug == 'pricing' ? activeColor : ''
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/"
                  className="button button-noborder"
                  style={{
                    color: activeSlug == 'blog' ? activeColor : ''
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/login/"
                  className="button button-noborder"
                  style={{
                    color: activeSlug == 'login' ? activeColor : ''
                  }}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup/"
                  className="button button-filled"
                >
                  Sign Up For Free
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
};
