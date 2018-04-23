import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import BgImage from './BgImage';

export default class LocationCard extends React.Component {
  render = () => {
    return(
      <FadeInWrapper id={this.props.id}>
        <div className={`locationCard flex ${this.props.revrev}`}>
            <BgImage sizes={this.props.src.childImageSharp.sizes} height="500" />
            <div className="locationInfoWrapper flex column center">
              <div className="locationInfo">
                {this.props.children}
              </div>
            </div>
          </div>
      </FadeInWrapper>
    )
  }
}
