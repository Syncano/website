import React from 'react';
import { Link } from 'react-router';

const HamburgerMenuLink = (props, { hamburgerMenu }) => {
  return (
    <Link
      {...props}
      onClick={hamburgerMenu.toggle}
    />
  );
};

HamburgerMenuLink.contextTypes = {
  hamburgerMenu: React.PropTypes.object
};

export default HamburgerMenuLink;
