import React from 'react';
import BackgroundScrollFade from "./BackgroundScrollFade";
export default class Header extends React.Component {
  render = () => {
    return(
      <div>
        <BackgroundScrollFade id="treeHider" percentage={this.props.percentage} />
        <div className="verticalLine"><div style={{height: this.props.percentage + "%"}}></div></div>
      </div>
    )
  }
}
