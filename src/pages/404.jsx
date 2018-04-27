import React from 'react';
import NavLink from 'gatsby-link';

export default class PageNotFound extends React.Component {
  render = () => {
    return (
      <div className="flex center column basePad" style={{height: '100%', width: '100%', backgroundColor: '#e1e1e1'}}>
        <h2>Her har det nok skjedd en feil.</h2>
        <h2>Siden du har valgt finnes ikke.</h2>
        <div className="button"><NavLink to="/">Returner hjem her.</NavLink></div>
      </div>
    )
  }
}
