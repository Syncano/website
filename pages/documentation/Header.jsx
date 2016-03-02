import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, CollapsibleNav, Nav } from 'react-bootstrap';

const styles = {
  root: {
    background: '#fff',
    boxShadow: 'none'
  },
  link: {
    color: 'rgba(77, 89, 102, 0.5)',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '19px',
    margin: '0 5px'
  }
};

export default () => (
  <Navbar bsStyle="" className="navbar navbar-fixed-top dark" style={styles.root} toggleNavKey={0}>
    <NavBrand>
      <Link to="/" style={{float: 'left'}}>
        <img className="light-version" src={require('./syncano-top.svg')} alt="Syncano Logo blue"/>
      </Link>
    </NavBrand>
    <CollapsibleNav eventKey={0}>
      <Nav navbar right>
        <li><Link style={styles.link} to="/features/">Features</Link></li>
        <li><Link style={styles.link} to="/pricing/">Pricing</Link></li>
        <li><Link style={styles.link} to="/blog/">Blog</Link></li>
        <li><a href="https://dashboard.syncano.io/#/login" style={styles.link} target="_blank">Login</a></li>
        <li>
          <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue mixpanel-btn" target="_blank">
            Sign Up for free
          </a>
        </li>
      </Nav>
    </CollapsibleNav>
  </Navbar>
);
