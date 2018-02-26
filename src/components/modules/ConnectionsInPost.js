import React from 'react';
import BgImage from './BgImage';
import NavLink from 'gatsby-link';

export default class ConnectionsInPost extends React.Component {
  state = {
    lang: 'no'
  }
  sortConnections = () => {
    if(this.props.connections.map(connection=>connection.hasOwnProperty("opuses"))){
      return this.props.connections.slice().sort((a, b) => a.frontmatter.title > b.frontmatter.title)
    } else {
      return this.props.connections.slice().sort((a, b) => a.frontmatter.title > b.frontmatter.title)
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
          {
            this.props.connections[0].frontmatter.opus ?
            <h2>{this.state.lang == "en" ? "#NRKGRIEG Minute by minute" : "#NRKGRIEG Minutt for minutt"}</h2> :
            <h2>{this.state.lang == "en" ? "#NRKGRIEG Minute by minute" : "#NRKGRIEG Minutt for minutt"}</h2>
          }
          <div className="perPost flex spaceAround row">
          { artistList }
        </div>

      </div>
    )
  }
}
