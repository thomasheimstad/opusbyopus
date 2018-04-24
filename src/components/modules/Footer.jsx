import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import BgImage from './BgImage';
import NavLink from 'gatsby-link';

export default class Footer extends React.Component {
  state = {
    bottom: false
  }
  handleScroll = () => {
     if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight -43 ||
        (window.innerHeight + window.scrollY) >= document.body.scrollHeight -43) {
       this.setState({
         bottom: true
       })
     } else {
       this.setState({
         bottom: false
       })
     }
   }
   componentDidMount = () => {
     window.addEventListener('scroll', this.handleScroll);
   }
   componentWillUnmount = () => {
     window.removeEventListener('scroll', this.handleScroll);
   }
   render = () => {
     return (
       <div className="footer flex center column">
         <div style={
           this.state.bottom ? {visibility: "visible", opacity: "1", transition: "0.3s ease-in"} : {visibility : "hidden", opacity: "0", transition: "0.3s ease-out"}}>
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
