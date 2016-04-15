import React from 'react';
import { Link } from 'react-router';
import NewsletterForm from '../NewsletterForm';

export default () => (
  <footer className="footer">
    <div className="inner">
      <div className="footer__logo">
        <img
          src={require('./images/logo.svg')}
          alt="Syncano"
        />
        <div className="footer__logo__copyright">
          <p>&copy; 2016 Syncano. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__columns">
        <div className="footer__column">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/about/">Career</Link>
            </li>
            <li>
              <Link to="/about/">Contact Us</Link>
            </li>
            <li>
              <Link to="/about/">Terms and Legal</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/about/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">Docs</Link>
            </li>
            <li>
              <Link to="/about/">Plans &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/about/">Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>More</h4>
          <ul>
            <li>
              <Link to="/about/">Help</Link>
            </li>
            <li>
              <Link to="/about/">Tutorials</Link>
            </li>
            <li>
              <Link to="/about/">Libraries</Link>
            </li>
            <li>
              <Link to="/about/">Status</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Social Media</h4>
          <ul>
            <li>
              <Link to="/about/">Twitter</Link>
            </li>
            <li>
              <Link to="/about/">Facebook</Link>
            </li>
            <li>
              <Link to="/about/">Github</Link>
            </li>
            <li>
              <Link to="/about/">LinkedIn</Link>
            </li>
            <li>
              <Link to="/about/">Dribbble</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__newsletter">
        <h4>Join Our Newsletter</h4>
        <NewsletterForm />
        <div className="footer__newsletter__social">
          <h4>Syncano in Social Media</h4>
          <ul>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/twitter.svg')}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/facebook.svg')}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/github.svg')}
                  alt="Github"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/linkedin.svg')}
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/slack.svg')}
                  alt="Slack"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src={require('./images/dribbble.svg')}
                  alt="Dribbble"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2016 Syncano. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
