import React from 'react';
import TiFlag from 'react-icons/lib/ti/flag';
import FaHome from 'react-icons/lib/fa/home';
import FaNumList from 'react-icons/lib/md/format-list-numbered'
import MdInfo from 'react-icons/lib/md/info-outline'
import MdStar from "react-icons/lib/md/star-outline";
import NavLink from 'gatsby-link';
import PageImg from  '../../posts/img/Griegtest1.png';

const Nav = ({showLangContent, handleLangClick, lang, showNav, handleNavClick}) => {
  return(
    <nav className={showNav ? 'showing navigator flex column' : 'hidden navigator flex column'}>
      <div>
        <span className="logo flex row"><img src={PageImg} /><p></p></span>
        <ul>
          <li onClick={handleNavClick}>
            <NavLink exact to="/" activeClassName="active">
              <h3><FaHome /> Hjem</h3>
            </NavLink>
          </li>
          <li onClick={handleNavClick}>
            <NavLink
              exact to="/opus-for-opus"
              activeClassName="active"
              className={window.location.href.indexOf("/opus") >= 0 ? "active" : ""}>
              <h3><FaNumList /> Opus for opus</h3>
            </NavLink>
          </li>
          <li onClick={handleNavClick}>
            <NavLink to="/artister" activeClassName="active">
              <h3><MdStar /> Artistene</h3>
            </NavLink>
          </li>
          <li onClick={handleNavClick}>
            <NavLink exact to="/info" activeClassName="active">
              <h3><MdInfo /> Info</h3>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* LANGUAGE
        <div>
        <h3 onClick={handleLangClick}><TiFlag /></h3>
        <div className={(showLangContent ? 'showLang' : 'hideLang')}>
          <p id="no" onClick={handleLangClick}>no</p>
          <p id="en" onClick={handleLangClick}>en</p>
        </div>
      </div>*/}
    </nav>

  )
}
export default Nav;
