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
              <Link to="/jobs/">Career</Link>
            </li>
            <li>
              <Link to="/contact/">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms-of-service/">Terms and Legal</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="https://www.syncano.io/blog/">Blog</a>
            </li>
            <li>
              <a href="http://docs.syncano.io/">Docs</a>
            </li>
            <li>
              <Link to="/pricing/">Plans &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/solutions/">Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>More</h4>
          <ul>
            <li>
              <Link to="/support/">Help</Link>
            </li>
            <li>
              <a href="https://www.syncano.io/blog/tag/tutorials/">Tutorials</a>
            </li>
            <li>
              <a href="http://docs.syncano.io/docs/syncano-libraries/">Libraries</a>
            </li>
            <li>
              <a
                href="http://syncano.statuspage.io/"
                target="_blank"
              >
                Status
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a
                href="https://twitter.com/Syncano/"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/syncano/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Syncano/"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/syncano/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/SYNCANO/"
                target="_blank"
              >
                Dribbble
              </a>
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
              <a
                href="https://twitter.com/Syncano/"
                target="_blank"
                title="Twitter"
              >
                <img
                  src={require('./images/twitter.svg')}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/syncano/"
                target="_blank"
                title="Facebook"
              >
                <img
                  src={require('./images/facebook.svg')}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Syncano/"
                target="_blank"
                title="GitHub"
              >
                <img
                  src={require('./images/github.svg')}
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/syncano/"
                target="_blank"
                title="LinkedIn"
              >
                <img
                  src={require('./images/linkedin.svg')}
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                href="https://syncano-community.slack.com/"
                target="_blank"
                title="Slack"
              >
                <img
                  src={require('./images/slack.svg')}
                  alt="Slack"
                />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/SYNCANO/"
                target="_blank"
                title="Dribbble"
              >
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
