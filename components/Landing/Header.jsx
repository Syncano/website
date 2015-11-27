import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, CollapsibleNav, Nav } from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Navbar bsStyle="" className="navbar navbar-fixed-top dark" style={{background: '#244273', boxShadow: 'none'}} toggleNavKey={0}>
        <NavBrand>
          <img className="light-version" src={require('../../images/syncano-white.png')} alt="Syncano Logo white"/>
        </NavBrand>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            <li><a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue mixpanel-btn" target="_blank">Sign Up</a></li>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  }
});
