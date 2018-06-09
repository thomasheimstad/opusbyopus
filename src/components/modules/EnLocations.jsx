import React from 'react';
import LocationCard from './LocationCard';

export default class EnLocations extends React.Component {
  render = () => {
    return (
      <div className="locations flex spaceAround column">
        <LocationCard
          src={this.props.trold}
          id="MainLocationTrold"
          embed="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7901.461849566656!2d5.334278756443554!3d60.3235493537705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x463cf9a2f5f3f511%3A0x21218e34c0b69822!2sHop+Light+Rail+Stop%2C+Nesttunvegen+43%2C+5232+Paradis%2C+Norway!3m2!1d60.3267715!2d5.346650299999999!4m5!1s0x463cf99177a78e9b%3A0x8511c1fd93c7c06!2sEdvard+Grieg+Museum+Troldhaugen%2C+Troldhaugvegen%2C+Paradis%2C+Norway!3m2!1d60.319624999999995!2d5.329447!5e0!3m2!1sen!2sdk!4v1522004314111"
          >
          <h2>Troldhaugen</h2>
          <p>Troldhaugen was the home of the Norwegian composer Edvard Grieg and his wife Nina. The villa was completed in 1885, and the Griegs lived here for the last 22 summers of Edvard's life. Since 1928 when the museum was opened to the public, it has been a popular destination for Grieg-enthusiasts from all over the world. Troldhaugen consists of the original villa, the composer hut, the tomb, a modern museum building and the chamber music hall Troldsalen. Most of the conserts during Grieg minute by minute takes place at Troldhaugen, mainly in the concert hall and in the villa. And potentially a few surprises!
          </p>
          {/*<a target="_blank" href="https://goo.gl/maps/oUXd1hEUv1s"><h4>Hvordan komme seg til Troldhaugen</h4></a>*/}
        </LocationCard>
        <LocationCard
          src={this.props.grieg}
          id="MainLocationGrieg"
          revrev="rowReverse"
          embed="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3942.8599645527693!2d5.32807525396727!3d60.38857573207041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d306d8bd273b82!2sGrieghallen!5e0!3m2!1sno!2sno!4v1524596712639"
          >
          <h2>Grieghallen</h2>
          <p>With 1610 seats, Griegsalen, the main hall in Grieghallen, is the largest arena for classical concerts in Bergen. The building was completed in 1978, and consists of a number of concert- and banquet halls. In total 3500 square meters of space! The Danish architect Knud Munk is responsible for the design, and seen from from one of the seven mountains surrounding the city, Grieghallen looks like a concert grand piano. Grieghallen is the home of the Bergen Philharmonic Orchestra, and during Grieg minute by minute, they perform, amoungst others, the a-minor piano concerto friday night on the 15th June, and Peer Gynt in the middle of Saturday night.
          </p>
          {/*<a target="_blank" href="https://goo.gl/maps/FhStkU6T5Am"><h4>Hvordan komme seg til Grieghallen</h4></a>*/}
        </LocationCard>
        <LocationCard
          src={this.props.store}
          id="MainLocationStore"
          embed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5878.143663251652!2d10.717745816933174!3d59.93352516756745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dddb7401749%3A0x93178cf20602044e!2sNRK!5e0!3m2!1sen!2sno!4v1524596640771"
          >
          <h2>Store Studio</h2>
          <p>The national broadcaster in Norway, NRK, has its own studio building in Oslo. Store studio seats 250 people, and has since the 1950s been an institution in Norwegian broadcasting history. Store studio has been an arena for many of the famous live radio shows, and has since the 60s been used in TV productions with live audiences. During Grieg minute by minute, the Norwegian Radio Orchestra will perform a number of Griegs top hits. Amongst others the Holberg suite early Saturday morning, and Peer Gynt Suite 1 & 2, with the incidental music from the play Peer Gynt.</p>
          {/*<a target="_blank"  href="https://goo.gl/maps/ECuZh6e739p"><h4>Hvordan komme seg til Store Studio</h4></a>*/}
        </LocationCard>
      </div>
    )
  }
}
