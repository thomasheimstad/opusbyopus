import React from 'react';
import TiFlag from 'react-icons/lib/ti/flag';
import TiHome from 'react-icons/lib/ti/home';
import MdInfo from 'react-icons/lib/md/info'
import NavLink from 'gatsby-link';

const Nav = ({showLangContent, handleLangClick, lang}) => {
  return(
    <div className="nav flex spaceBetween">
      <div>
        <NavLink exact to="/"><h2><TiHome /></h2></NavLink>
      </div>
      <div>
        <NavLink exact to="/info"><h2><MdInfo /></h2></NavLink>
      </div>
      {/* LANGUAGE
        <div>
        <h2 onClick={handleLangClick}><TiFlag /></h2>
        <div className={(showLangContent ? 'showLang' : 'hideLang')}>
          <p id="no" onClick={handleLangClick}>no</p>
          <p id="en" onClick={handleLangClick}>en</p>
        </div>
      </div>*/}
    </div>
  )
}
export default Nav;
