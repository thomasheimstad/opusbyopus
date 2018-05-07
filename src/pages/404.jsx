import React from 'react';
import NavLink from 'gatsby-link';
import GriegNightCircle250 from '../posts/img/GriegNightCircle250.png';

export default class PageNotFound extends React.Component {
  render = () => {
    return (
      <div className="base404 flex center column basePad" style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <img src={GriegNightCircle250} alt="Grieg minutt for minutt logo" style={{height: "200px", marginBottom: "4rem"}}/>
        <div className="flex center column">
          <h2>Innholdet her er fortsatt hemmelig.</h2>
          <h2>Du må nok vente i spenning.</h2>
          <h2>Følg med og hold deg oppdatert.</h2>
          <h2>Vi publiserer litt etter litt.</h2>
        </div>
        <div className="button"><NavLink to="/">Returner hjem</NavLink></div>
      </div>
    )
  }
}
