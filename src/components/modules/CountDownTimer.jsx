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
          <div>
            <div className="flex center row wrap">
              <div className="flex center column">
                <h3>DAGER</h3>
                <h1>{this.state.days}</h1>
              </div>
              <div className="flex center column">
                <h3>TIMER</h3>
                <h1>{this.state.hours}</h1>
              </div>
              <div className="flex center column">
                <h3>MINUTTER</h3>
                <h1>{this.state.minutes}</h1>
              </div>
              <div className="flex center column">
                <h3>SEKUNDER</h3>
                <h1>{this.state.seconds}</h1>
              </div>
            </div>
            <div className="flex column">
              <h2>igjen til #NRKGRIEG</h2>
              <h2>minutt for minutt</h2>
            </div>
          </div>
          :
        <div>
          <h1>test</h1>
        </div>
        }
      </div>
    )
  }
}
