import React from 'react';
export default class ZoomIn extends React.Component {
  state = {
    zoomIn: 0.01
  }
  componentDidMount = () => {
    setTimeout(function() { this.setState({zoomIn: 1}); }.bind(this), 200);
  }
  render = () => {
    let transformStyle = {
      transform: `scale(${this.state.zoomIn})`,
      transition: "0.3s ease-out"
    }
    return (
      <div style={transformStyle}>
        {this.props.children}
      </div>
    )
  }
}
