import React from 'react';
import FadeInWrapper from '../modules/FadeInWrapper';
import BgImage from "../modules/BgImage";
import NavLink from 'gatsby-link';

export default class ArtistView extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  render = () => {
    return (
      <FadeInWrapper id={this.props.title}>
        <div className="artistCard">
          <NavLink exact to={this.props.path}>
          <BgImage sizes={this.props.thumbnail.childImageSharp.sizes}  height="200" />
          <div className="artistInfo flex column center">
            <h2>{this.props.title}</h2>
            <h4>{this.props.tags}</h4>
          </div>
          </NavLink>
        </div>
      </FadeInWrapper>
    )
  }
}
