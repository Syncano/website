import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, NavBrand, CollapsibleNav, Nav } from 'react-bootstrap';
import { OnScroll } from 'react-window-mixins';
import Scroll from 'react-scroll';
const isBrowser = typeof window !== 'undefined';

export default React.createClass({
  mixins: [OnScroll],

  shouldBeVisible() {
    if (!isBrowser) {
      return false;
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
          <div>
            <img className="light-version" src={require('../../images/syncano-white.png')} alt="Syncano Logo white"/>
          </div>
        </NavBrand>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            <Scroll.Link to="landing-contact-form" smooth={true} offset={-90} duration={500} style={{cursor: 'pointer'}}>
              <li className={this.shouldBeVisible() ? 'show' : 'hidden'}><div className="btn btn-dark-blue mixpanel-btn" target="_blank" style={{background: '#ffcc00', color: '#000', textTransform: 'uppercase', fontWeight: 800}}>Sign Up For Free</div></li>
            </Scroll.Link>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  }
});
