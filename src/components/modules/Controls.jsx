import React from 'react';
import NavLink from 'gatsby-link';

export default class Controls extends React.Component {
  render = () => {
    let increaseOpus = parseInt(this.props.post.title) + 1;
    let decreaseOpus = parseInt(this.props.post.title) - 1;
    return (
      <div className="controls flex spaceBetween">
        <div>
          { this.props.post.title == "1" ?
            <NavLink exact to="/"><h3>&larr;</h3></NavLink> :
            <NavLink exact to={`opus${decreaseOpus}`}><h3>&larr;Op. {decreaseOpus}</h3></NavLink>
          }
        </div>
        <div>
          { this.props.post.title == "74" ?
            <NavLink exact to="/"><h3>&rarr;</h3></NavLink> :
            <NavLink exact to={`opus${increaseOpus}`}><h3>Op. {increaseOpus}&rarr;</h3></NavLink>
          }
        </div>
      </div>
    )
  }
}
