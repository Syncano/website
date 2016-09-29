import React from 'react';
import { Link } from 'react-router';
import NewsletterForm from '../NewsletterForm';

export default () => (
  <footer className="footer">
    <div className="inner">
      <div className="footer__logo">
        <Link to="/">
          <img
            src={require('./images/logo.svg')}
            alt="Syncano"
          />
        </Link>
        <div className="footer__logo__copyright">
          <p>&copy; 2016 Syncano. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__columns">
        <div className="footer__column">
          <div className="footer__headline">Company</div>
          <ul>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <a href="https://syncano.workable.com/" target="_blank">Jobs</a>
            </li>
            <li>
              <Link to="/terms-of-service/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/terms-of-service/#privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnAKAA0" target="_blank">Privacy Shield</a>
            </li>
            <li>
              <Link to="/contact/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__headline">Product</div>
          <ul>
            <li>
              <Link to="/features/">Features</Link>
            </li>
            <li>
              <Link to="/pricing/">Plans &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/help/">Help &amp; Status</Link>
            </li>
            <li>
              <a href="https://www.syncano.io/blog/" target="_blank">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__headline">Resources</div>
          <ul>
            <li>
              <a href="http://docs.syncano.io/docs/getting-started-with-syncano/" target="_blank">Getting Started</a>
            </li>
            <li>
              <a href="http://docs.syncano.io/" target="_blank">Documentation</a>
            </li>
            <li>
              <a href="http://docs.syncano.io/docs/syncano-libraries/" target="_blank">Libraries</a>
            </li>
            <li>
              <a href="https://www.syncano.io/blog/tag/tutorials/" target="_blank">Tutorials</a>
            </li>
            <li>
              <a href="http://docs.syncano.io/v0.1.1/docs/" target="_blank">API Reference</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__headline">Let’s connect</div>
          <ul>
            <li>
              <a href="https://twitter.com/Syncano/" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/syncano/" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/Syncano/" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.syncano.io/slack-invite/" target="_blank">Slack</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/syncano/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://dribbble.com/SYNCANO/" target="_blank">Dribbble</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__newsletter">
        <div className="footer__headline">Get our serverless digest</div>
        <NewsletterForm />
        <div className="footer__newsletter__social">
          <div className="footer__headline">Let’s connect</div>
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
                href="https://www.syncano.io/slack-invite/"
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
