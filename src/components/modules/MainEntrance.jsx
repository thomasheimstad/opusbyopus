import React from 'react';
import BgImage from './BgImage';
import CountDownTimer from './CountDownTimer';
import ScrollToAnchor from './ScrollToAnchor';
import ZoomIn from './ZoomIn';
import MdList from 'react-icons/lib/md/list';
export default class MainEntrance extends React.Component {
render = () => {
  return(
  <div className="mainEntrance flex center" style={{height: this.props.windowHeight}}>
    <div className="mainEntranceImg flex center column">
      <BgImage sizes={this.props.src} position={this.props.position} fit={this.props.fit} />
      <div className="flex center column">
        <ZoomIn>
          <h1>GRIEG</h1>
          <h2>MINUTT FOR MINUTT</h2>
        </ZoomIn>
      </div>
    </div>
    <div className="mainEntranceText flex column center">
      <CountDownTimer date="Jun 15, 2018 18:00:00"/>
      <div className="mainEntranceTextInfo flex center column">
        <h2 style={{maxWidth: '50ch'}}>15. juni kl. 17.30 starter den aller lengste fremførelsen av Edvard Griegs musikk noen sinne. NRK direktesender 30 timer med live musikk fra Griegs hjem Troldhaugen, Grieghallen og fra Store Studio.</h2>
      </div>
      <ScrollToAnchor
        anchorId="mainSeller1"
        scrollSpeed={1000}
      />
    </div>
  </div>
  )
}
}
