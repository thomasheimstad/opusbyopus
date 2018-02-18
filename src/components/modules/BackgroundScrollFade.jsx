import React from 'react';

export default class BackgroundScrollFade extends React.Component {
  state = {
    mediaWidth: 0
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
      if(this.state.mediaWidth > 868) {
        return { backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) ${this.props.percentage/4}%, rgba(255,255,255,1) ${this.props.percentage}%)`}
      } else {
        return { backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`}
      }
    }
    return (
      <div
        id={this.props.id}
        className="backgroundScrollFade"
        // style={{height: + 100-this.props.percentage + "%"}}
        style={backgroundStyle()}
        >
        </div>
    )
  }
}
