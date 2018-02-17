import React from "react";

export default class Overcast extends React.Component {
  state = {
    scrollTop : 0
  }
  handleScroll = () => {
    let distance = document.getElementById(`${this.props.id}`).getBoundingClientRect().top;
    this.setState({
      scrollTop: distance
    })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render = () => {
    let styles = {
      backgroundColor: "#111",
      position: "absolute",
      width: 100+"%",
      height: 100+"%",
      opacity: -this.state.scrollTop / 400,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      top:0,
      left: 0,
    }
    return (
      <div id={this.props.id} style={styles}>{this.props.children}</div>
    )
  }
}
