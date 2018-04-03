import React from 'react';
import MdMenu from 'react-icons/lib/md/format-align-justify';

import NavLink from 'gatsby-link';

const NavBar = ({handleNavClick}) => {
  return (
      <div className="mainNavBar hideBackground">
        <div className="mainNavBarHeader">
          <h2 onClick={handleNavClick}><MdMenu /></h2>
        </div>
      </div>
    );
  }
export default NavBar;
