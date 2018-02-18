import React from 'react';

export default class ToolTipBottom extends React.Component {
  state = {
    opacity: 0
  }
  setTimer = () => {
    setTimeout(() =>
      this.setState({
        opacity: 1
      }),1500
    )
  }
  componentDidMount = () => {
    this.setTimer();
  }
  render = () => {
    let styles = {
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      color: "yellow",
      zIndex: "99",
      opacity: this.state.opacity,
      transition: "0.5s ease-in",
    }
    return(
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}
