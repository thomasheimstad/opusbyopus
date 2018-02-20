import React from 'react';

export default class BackgroundScrollFade extends React.Component {
  state = {
    mediaWidth: 0,
    isIE: true
  }
  getIEVersion = () => {
    console.log('ran')
    let sAgent = window.navigator.userAgent;
    let Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0) {
      this.setState({
        isIE: true
      })
    }
    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) {
      this.setState({
        isIE: true
      });
    } else {
      this.setState({
        isIE: false
      }) //It is not IE
    }
    console.log(this.state.isIE)
  }
  handleResize = () => {
    this.setState({
      mediaWidth: window.innerWidth > 0 ? window.innerWidth : screen.width
    })
  }
  componentDidMount = () => {
    this.getIEVersion();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let backgroundStyle = () => {
      if(this.state.isIE) {
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
