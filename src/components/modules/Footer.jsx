import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import BgImage from './BgImage';
import NavLink from 'gatsby-link';

export default class Footer extends React.Component {
   render = () => {
     return (
       <div className="footer flex center column">
         <div className="bgImageWrapper">
           <BgImage sizes={this.props.src} height="400" position={this.props.position} fit={this.props.fit} />
         </div>
         <FadeInWrapper id="footer">
           <div className="footerLinks flex wrap basePad center">
             <div className="button"><NavLink to="/info">Mer Info</NavLink></div>
             <div className="button"><NavLink to="/opus-for-opus">Opus for opus</NavLink></div>
             <div className="button"><NavLink to="/artister">Artister</NavLink></div>
           </div>
         </FadeInWrapper>
       </div>
     )
   }
 }
