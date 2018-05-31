import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavLink from 'gatsby-link';

const AnchorLinks = (props) => {
    return(
      <div className="flex center">
      <div className="button infoButton"><AnchorLink href={`#${props.link1}`}>{props.link1}</AnchorLink></div>
      <div className="button infoButton"><AnchorLink href={`#${props.link2}`}>{props.link2}</AnchorLink></div>
      <div className="button infoButton"><AnchorLink href={`#${props.link3}`}>{props.link3}</AnchorLink></div>
    </div>
  )
}
export default AnchorLinks;
