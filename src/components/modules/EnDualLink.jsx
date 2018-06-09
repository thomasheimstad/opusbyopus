import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavLink from 'gatsby-link';

const EnDualLink = (props) => {
  return (
    <div className="flex center dualLink">
      <div class="button postButton"><a href="http://harmonien.no/english/concerts-and-tickets/2018/06/grieg-minute-by-minute/" target="_blank"><h3>Buy tickets to Grieghallen here!</h3></a></div>
      <div class="button postButton">
        {props.link1 ?
          <AnchorLink href={`#${props.link1}`}><h3>{props.children}</h3></AnchorLink> :
          <NavLink to={props.link2}><h3>{props.children}</h3></NavLink>}
      </div>
    </div>
  )
}
export default EnDualLink;
