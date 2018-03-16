import React from 'react';
import BgImage from "./BgImage";
import Overcast from "./Overcast";
import DownArrow from 'react-icons/lib/fa/angle-down';

export default class Hero extends React.Component {
  render = () => {
    return (
      <div className="hero flex center">
        {/*<div id={this.props.id} style={styles}>*/}
        <BgImage sizes={this.props.src}  height={this.props.height} position={this.props.position} fit={this.props.fit} />
        <Overcast id={this.props.id} height="100"/>
      </div>
    )
  }
}
