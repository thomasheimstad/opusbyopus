import React from 'react';

export default class BackgroundScrollFade extends React.Component {
  state = {
    mediaWidth: 0
  }
  GetIEVersion = () => {
    let sAgent = window.navigator.userAgent;
    let Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
      return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
      return 11;

    else
      return 0; //It is not IE
  }
  handleResize = () => {
    this.setState({
      mediaWidth: window.innerWidth > 0 ? window.innerWidth : screen.width
    })
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let backgroundStyle = () => {
      if(GetIEVersion > 0) {
        return { backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`}
      } else {
        if(this.state.mediaWidth > 868) {
          return { backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) ${this.props.percentage/4}%, rgba(255,255,255,1) ${this.props.percentage}%)`}
        } else {
          return { backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`}
        }  
      }
    }
    return (
      <div
        id={this.props.id}
        style={backgroundStyle()}
        className="backgroundScrollFade"
        // style={{height: + 100-this.props.percentage + "%"}}
        >
        </div>
    )
  }
}
