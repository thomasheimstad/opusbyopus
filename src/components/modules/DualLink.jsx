import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavLink from 'gatsby-link';

const DualLink = (props) => {
  return (
    <div className="flex center dualLink">
      <div class="button postButton"><a href="http://harmonien.no/konserter-og-billetter/2018/06/grieg-minutt-for-minutt/" target="_blank"><h3>Kjøp billetter til Grieghallen her</h3></a></div>
      <div class="button postButton">
        {props.link1 ?
          <AnchorLink href={`#${props.link1}`}><h3>{props.children}</h3></AnchorLink> :
          <NavLink to={props.link2}><h3>{props.children}</h3></NavLink>}
      </div>
    </div>
  )
}
export default DualLink;
