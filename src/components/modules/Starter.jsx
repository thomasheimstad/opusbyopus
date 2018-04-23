import React from 'react';
import Overcast from "./Overcast";
import ZoomIn from "./ZoomIn";
import PageImg from  '../../posts/img/GriegTrans1.png';

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
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let starterHeight = {
      height: this.state.windowHeight / this.props.height
    }
    let backgroundStyle = {
      backgroundImage: `url(${PageImg})`,
    }
    return(
      <div className="starter flex column center basePad" style={starterHeight}>
        <ZoomIn>
          {this.props.children}
        </ZoomIn>
        <Overcast id="starterOvercast" height={this.props.height}>
          <div className="pageImgBackground" style={backgroundStyle}></div>
        </Overcast>
      </div>
    )
  }
}
