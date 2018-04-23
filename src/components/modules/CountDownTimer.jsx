import React from 'react';
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
        { !this.state.letsCelebrate ?
          <div className="flex center row wrap">
            <h2>{this.state.days}d</h2>
            <h2>{this.state.hours}t</h2>
            <h2>{this.state.minutes}m</h2>
            <h2>{this.state.seconds}s</h2>
          </div>
          :
        <div className="flex center button">
          <a href="$"><h1>SE SENDINGEN HER</h1></a>
        </div>
        }
      </div>
    )
  }
}
