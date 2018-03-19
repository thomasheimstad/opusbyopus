import React from 'react';
import BgImage from "./BgImage";
import Overcast from "./Overcast";

export default class HeroImg extends React.Component {
  render = () => {
    return (
      <div className="hero flex center">
        {/*<div id={this.props.id} style={styles}>*/}
        <img sizes={this.props.src} src={this.props.src.src} alt={this.props.title} style={{
          height: this.props.height+"px",
          margin: "0 auto",
          alignSelf: "center",
          overflow: "hidden"
        }}/>
        <Overcast id={this.props.id} height="100%"/>
      </div>
    )
  }
}
