import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import BgImage from './BgImage';

export default class LocationCard extends React.Component {
  render = () => {
    return(
      <FadeInWrapper id={this.props.id}>
        <BgImage sizes={this.props.src} height="400" />
        <div className={`locationCard flex ${this.props.revrev}`}>
          <div className="locationInfoWrapper flex column center">
            <div className="locationInfo basePad">
              {this.props.children}
            </div>
          </div>
        </div>
        <iframe
          src={this.props.embed}
          width="100%"
          height="100%" 
          frameBorder="0"
          style={{border: '0'}}
          allowFullScreen></iframe>
      </FadeInWrapper>
    )
  }
}
