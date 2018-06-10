import React from 'react';
import MdMenu from 'react-icons/lib/md/format-align-justify';
import UkFlag from "../../posts/img/ukflag.png";

import NavLink from 'gatsby-link';

const NavBar = ({handleNavClick}) => {
  return (
      <div className="mainNavBar hideBackground">
        <div className="mainNavBarHeader">
          <h2 onClick={handleNavClick}><MdMenu /></h2>
          <NavLink to="/en/info"><img src={UkFlag} alt="For English info, click here"/></NavLink>
        </div>
      </div>
    );
  }
export default NavBar;
