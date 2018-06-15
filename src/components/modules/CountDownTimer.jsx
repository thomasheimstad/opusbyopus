import React from 'react';
import Helmet from 'react-helmet';
export default class CountDownTimer extends React.Component {
  state = {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    letsCelebrate: false
  }
  componentDidMount = () => {
    this.getDistance();
    this.intervalId = setInterval(this.getDistance, 1000);
  }
  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }
  getDistance = () => {
    let distance = Date.parse(this.props.date) - Date.parse(new Date());
    if(distance <= 0){
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        letsCelebrate: true
      })
    } else {
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({
          days, hours, minutes, seconds
        })
    }
  }
  render = () => {
    return(
      <div className="countDownTimer flex column">
        <Helmet>
          <script src="https://static.nrk.no/ludo/latest/video-embed.js"></script>
        </Helmet>
        { !this.state.letsCelebrate ?
          <div className="flex center row wrap">
            <h2>{this.state.days}d</h2>
            <h2>{this.state.hours}t</h2>
            <h2>{this.state.minutes}m</h2>
            <h2>{this.state.seconds}s</h2>
          </div>
          :
          <div className="flex center">
            <div className="button">
              <a href="https://www.nrk.no/video/PS*a2c8daef-4299-48e9-ada1-27043c18d7d9">SE SENDINGEN LIVE</a>
            </div>
            <div className="button">
              <a href="https://www.nrk.no/kultur/grieg_-minutt-for-minutt-1.14081196">FØLG NETTPRATEN</a>
            </div>
          </div>
        }
      </div>
    )
  }
}
