import React from 'react';
import NavLink from 'gatsby-link';
const NavLinks = (props) => {
  return (
    <div className="flex center">
      <div className="button infoButton"><NavLink to={props.link1.split(" ").join("-").toLowerCase()}>{props.link1}</NavLink></div>
      <div className="button infoButton"><NavLink to={props.link2.split(" ").join("-").toLowerCase()}>{props.link2}</NavLink></div>
      <div className="button infoButton"><NavLink to={props.link3.split(" ").join("-").toLowerCase()}>{props.link3}</NavLink></div>
    </div>
  )
}
export default NavLinks
