import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, NavBrand, CollapsibleNav, Nav } from 'react-bootstrap';
import { OnScroll } from 'react-window-mixins';
const isBrowser = typeof window !== 'undefined';

export default React.createClass({
  mixins: [OnScroll],

  shouldBeVisible() {
    if (!isBrowser) {
      return true;
    }

    let highlightsSection = document.getElementsByClassName('highlights')[0];

    if (!highlightsSection) {
      return false;
    }

    let highlightsSectionOffsetTop = highlightsSection.offsetTop;

    return this.state.scroll.y > highlightsSectionOffsetTop;
  },

  render() {
    return (
      <Navbar bsStyle="" className="navbar navbar-fixed-top dark" style={{background: '#244273', boxShadow: 'none'}} toggleNavKey={0}>
        <NavBrand>
          <img className="light-version" src={require('../../images/syncano-white.png')} alt="Syncano Logo white"/>
        </NavBrand>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            <li className={this.shouldBeVisible() ? 'show' : 'hidden'}><a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue mixpanel-btn" target="_blank">Sign Up</a></li>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  }
});
