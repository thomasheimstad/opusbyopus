import React from 'react';
import NavLink from 'gatsby-link';

export default class Controls extends React.Component {
  render = () => {
    return (
      <div className="controls flex spaceBetween">
        <div>
          { this.props.post.opus == "1" ?
            <NavLink exact to="/"><h3>&larr;</h3></NavLink> :
            <NavLink exact to={`opus${this.props.post.opus-1}`}><h3>&larr;Op. {this.props.post.opus-1}</h3></NavLink>
          }
        </div>
        <div>
          { this.props.post.opus == "74" ?
            <NavLink exact to="/"><h3>&rarr;</h3></NavLink> :
            <NavLink exact to={`opus${this.props.post.opus+1}`}><h3>Op. {this.props.post.opus+1}&rarr;</h3></NavLink>
          }
        </div>
      </div>
    )
  }
}
