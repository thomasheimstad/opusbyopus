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
          <ZoomIn>
            <div className="flex center column flexStart">
            <h1>GRIEG</h1>
            <h1>MINUTT</h1>
            <h1>FOR</h1>
            <h1>MINUTT</h1>
        </div>
        </ZoomIn>
      </div>
      <div className="mainEntranceText flex column center">
        <CountDownTimer date="Jun 15, 2018 17:30:00"/>
        <div className="mainEntranceTextInfo flex center column">
          <h2>15. juni kl. 17.30 starter verdens lengste fremførelse av Edvard Griegs musikk. NRK direktesender 30 timer med live musikk fra Griegs hjem Troldhaugen, Grieghallen og fra Store Studio. Vi lanserer artistene gradvis. Følg med her!</h2>
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
