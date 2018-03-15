import React from 'react';
import MdMenu from 'react-icons/lib/md/format-align-justify';

import NavLink from 'gatsby-link';

export default class NavBar extends React.Component{
  state = {
    invis: "hideBackground"
  }
  render = () => {
    return (
        <div className={`mainNavBar ${this.state.invis}`}>
          <div className="mainNavBarHeader">
            <h2 onClick={this.props.handleNavClick}><MdMenu /></h2>
          </div>
        </div>
      );
    }
  }
