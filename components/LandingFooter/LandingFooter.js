import React from 'react';
import { Link } from 'react-router';

export default () => (
  <footer className="footer footer--landing">
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
      <div className="footer__copyright">
        <p>&copy; 2016 Syncano. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
