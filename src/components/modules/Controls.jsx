import React from 'react';
import NavLink from 'gatsby-link';

export default class Controls extends React.Component {
  opus = (parseOpusInt) => {
    if(parseOpusInt <= 74) {
      return (
        <div className="controls flex spaceBetween">
          <div>
            { this.props.post.title == "1" ?
              <NavLink exact to="/opus-for-opus"><h3>&larr;</h3></NavLink> :
              <NavLink exact to={`/opus${parseOpusInt-1}`}><h3>&larr;Op. {parseOpusInt-1}</h3></NavLink>
            }
          </div>
          <div>
            { this.props.post.title == "74" ?
              <NavLink exact to="/opus107"><h3>&rarr;</h3></NavLink> :
              <NavLink exact to={`/opus${parseOpusInt+1}`}><h3>Op. {parseOpusInt+1}&rarr;</h3></NavLink>
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className="controls flex spaceBetween">
          <div>
            <NavLink exact to="/opus74"><h3>&larr;</h3></NavLink>
          </div>
          <div>
          </div>
        </div>
      )
    }
  }
  render = () => {
    let parseOpusInt = parseInt(this.props.post.title)
    return (
      this.opus(parseOpusInt)
    )
  }
}
