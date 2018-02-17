import React from 'react';

export default class BackgroundScrollFade extends React.Component {
  render = () => {
    return (
      <div
        id={this.props.id}
        className="backgroundScrollFade"
        // style={{height: + 100-this.props.percentage + "%"}}
        style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) ${this.props.percentage/4}%, rgba(255,255,255,1) ${this.props.percentage}%)`}}
        >
        </div>
    )
  }
}
