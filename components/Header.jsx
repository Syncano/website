import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, CollapsibleNav, Nav } from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Navbar bsStyle="" className="navbar navbar-fixed-top dark" style={{background: '#244273', boxShadow: 'none'}} toggleNavKey={0}>
        <NavBrand>
          <Link to="/" style={{float: 'left'}}>
            <img className="light-version" src={require('../images/syncano-white.png')} alt="Syncano Logo white"/>
          </Link>
        </NavBrand>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <li><a href="http://docs.syncano.io/" target="_blank">Docs</a></li>
            <li><Link to="/support/">Support</Link></li>
            <li><Link to="/solutions/">Solutions</Link></li>
            <li><Link to="/pricing/">Pricing</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </Nav>
          <Nav navbar right>
            <li><a href="https://dashboard.syncano.io/#/login" className="btn btn-blue mixpanel-login" target="_blank">Login</a></li>
            <li><a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue mixpanel-btn" target="_blank">Sign Up</a></li>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  }
});
