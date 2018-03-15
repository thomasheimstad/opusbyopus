import React from 'react';
import CountDownTimer from './CountDownTimer';
import NavLink from 'gatsby-link';
import Griegtest1Inv from '../../posts/img/Griegtest1Inv.png';
const MainStarter = () => {
  return (
    <div className="mainStarter flex row">
        <NavLink to="/">
          <CountDownTimer date="Jun 15, 2018 18:00:00"/>
        </NavLink>
        <NavLink to="/opus-for-opus">
          <img src={Griegtest1Inv} alt="Grieg by day, Grieg by night"/>
          <h2>Opus For Opus</h2>
          <h3>Les mer om Griegs musikk</h3>
        </NavLink>
        <NavLink to="/info">
          <h2>15. & 16. juni 2018</h2>
          <h3>Les mer om arrangementet</h3>
        </NavLink>
    </div>
  )
}
export default MainStarter;
