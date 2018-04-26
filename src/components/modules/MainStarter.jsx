import React from 'react';
import CountDownTimer from './CountDownTimer';
import NavLink from 'gatsby-link';
import GriegNightInv from '../../posts/img/GriegNightInv.png';
export default class MainStarter extends React.Component {
  render = () => {
    return (
      <div className="mainStarter flex row" style={{height: this.props.windowHeight}}>
          <NavLink to="/">
            <CountDownTimer date="Jun 15, 2018 18:00:00"/>
          </NavLink>
          <NavLink to="/opus-for-opus">
            <img src={GriegNightInv} alt="Grieg by day, Grieg by night"/>
            <h2>Opus For Opus</h2>
            <h3>Les mer om Griegs musikk</h3>
          </NavLink>
          <NavLink to="/info">
            <div className="underline">
              <h2 style={{marginBottom: "0.51rem"}}>15. & 16. juni 2018</h2>
            </div>
            <h3>Les mer om arrangementet</h3>
          </NavLink>
      </div>
    )
  }
}
