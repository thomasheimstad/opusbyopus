import React from 'react';
import Overcast from "./Overcast";
import PageImg from  '../../posts/img/Griegtest1Inv.png';

export default class Starter extends React.Component {
  state = {
    zoomIn: 0.01,
    windowWidth: '',
    windowHeight: ''
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    setTimeout(function() { this.setState({zoomIn: 1}); }.bind(this), 200);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let starterHeight = {
      height: this.state.windowHeight / this.props.height
    }
    let transformStyle = {
      transform: `scale(${this.state.zoomIn})`,
      transition: "0.3s ease-out"
    }
    let backgroundStyle = {
      backgroundImage: `url(${PageImg})`,
    }
    return(
      <div className="starter flex column center basePad" style={starterHeight}>
        <div style={transformStyle}>
          {this.props.children}
        </div>
        <Overcast id="starterOvercast" height={this.props.height}>
          <div className="pageImgBackground" style={backgroundStyle}></div>
        </Overcast>
      </div>
    )
  }
}
