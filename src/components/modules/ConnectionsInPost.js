import React from 'react';
import BgImage from './BgImage';
import NavLink from 'gatsby-link';

export default class ConnectionsInPost extends React.Component {
  state = {
    lang: 'no'
  }
  sortConnections = () => {
    if(this.props.connections[0].frontmatter.category === "artister"){
      return this.props.connections
    } else {
      return this.props.connections.sort((a, b) => a.frontmatter.title - b.frontmatter.title)
    }
  }
  render = () => {
    let artistList = this.sortConnections().map((x,i) => {
      return (
        <NavLink to={x.fields.slug} key={i}>
          <h3>{x.frontmatter.workname ? "Opus "+ x.frontmatter.title : x.frontmatter.title}</h3>
          <h4>{x.frontmatter.workname ? x.frontmatter.workname : x.frontmatter.tags}</h4>
          <div>
            <BgImage sizes={x.frontmatter.thumbnail.childImageSharp.sizes} />
          </div>
        </NavLink>
      )
    })
    return (
      <div className="connectionsInPost flex spaceAround column">
        <div className="connectionsInPostHeader">
          {
            this.props.connections[0].frontmatter.opus ?
            <h1>{this.state.lang == "en" ? "#NRKGRIEG Minute by minute" : "#NRKGRIEG"}</h1> :
            <h1>{this.state.lang == "no" ? "#NRKGRIEG" : "#NRKGRIEG Minute by minute"}</h1>
          }
          {
            this.props.startDate ?
            <div className="flex center column">
              <h3>Dato {this.props.startDate}</h3>
              {this.props.startTime ? <h3>Starttid {this.props.startTime}</h3> : null}
              {this.props.location ? <h3>{this.props.location}</h3> : null}
            </div> :

            null
          }
        </div>

          <div className="perPost flex spaceAround row">
          { artistList }
        </div>

      </div>
    )
  }
}
