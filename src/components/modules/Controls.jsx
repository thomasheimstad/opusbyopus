import React from 'react';
import NavLink from 'gatsby-link';

export default class Controls extends React.Component {
  render = () => {
    return (
      <div className="controls flex spaceBetween">
        <div>
          { this.props.post.title == "1" ?
            <NavLink exact to="/"><h3>&larr;</h3></NavLink> :
            <NavLink exact to={`opus${parseInt(this.props.post.title)-1}`}><h3>&larr;Op. {parseInt(this.props.post.title)-1}</h3></NavLink>
          }
        </div>
        <div>
          { this.props.post.title == "74" ?
            <NavLink exact to="/"><h3>&rarr;</h3></NavLink> :
            <NavLink exact to={`opus${parseInt(this.props.post.title)+1}`}><h3>Op. {parseInt(this.props.post.title)+1}&rarr;</h3></NavLink>
          }
        </div>
      </div>
    )
  }
}
