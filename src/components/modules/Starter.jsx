import React from 'react';
import Overcast from "./Overcast";
import PageImg from  '../../posts/img/Griegtest1Inv.png';

export default class Starter extends React.Component {
  state = {
    zoomIn: 0.01
  }
  componentDidMount = () => {
    setTimeout(function() { this.setState({zoomIn: 1}); }.bind(this), 200);
  }
  render = () => {
    let starterHeight = {
      height: this.props.height + "%"
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
