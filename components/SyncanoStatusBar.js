import React from 'react';
import { Link } from 'react-router';
import StatusInfo from '../components/StatusInfo';

const SyncanoStatusBar = props => (
  <div
    className="syncano-status-bar"
    style={props.style}
  >
    <div className="syncano-status-bar__news-column">
      <div>News from Syncano:</div>
      <a
        className="syncano-status-bar__news-column__blog-link"
        href="https://www.syncano.io/blog/executing-logic-based-on-data-changes-with-triggers/"
        target="_blank"
      >
        Executing Logic Based on Data Changes with Triggers
      </a>
    </div>
    <div className="syncano-status-bar__status-column">
      <div>Syncano Status:</div>
      <StatusInfo />
      <Link
        className="syncano-status-bar__status-column__status-link"
        to="/help/"
      >
        Status Page
      </Link>
    </div>
  </div>
);

export default SyncanoStatusBar;
