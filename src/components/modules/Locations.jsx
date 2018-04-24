import React from 'react';
import LocationCard from './LocationCard';

export default class Locations extends React.Component {
  render = () => {
    return (
      <div className="locations flex spaceAround column">
        <LocationCard
          src={this.props.trold}
          id="MainLocationTrold"
          embed="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7901.461849566656!2d5.334278756443554!3d60.3235493537705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x463cf9a2f5f3f511%3A0x21218e34c0b69822!2sHop+Light+Rail+Stop%2C+Nesttunvegen+43%2C+5232+Paradis%2C+Norway!3m2!1d60.3267715!2d5.346650299999999!4m5!1s0x463cf99177a78e9b%3A0x8511c1fd93c7c06!2sEdvard+Grieg+Museum+Troldhaugen%2C+Troldhaugvegen%2C+Paradis%2C+Norway!3m2!1d60.319624999999995!2d5.329447!5e0!3m2!1sen!2sdk!4v1522004314111"
          >
          <h2>Troldhaugen</h2>
          <p>Troldhaugen var hjemmet til Edvard og Nina Grieg. Villaen på Troldhaugen ble ferdigstilt i 1885 og ekteparet Grieg bodde her de siste 22 somrene av Edvards liv. Stedet er i dag fylt av interessante minner om Grieg og har siden 1928, da området ble åpnet som museum, vært et valfartssted for Griegelskere fra alle kanter av verden. Troldhaugen består i dag av villaen, Komponisthytten og ekteparets gravsted, så vel som et moderne museumsbygg og konsertsalen Troldsalen. De fleste konsertene under Grieg minutt for minutt foregår på Troldhaugen, hovedsaklig i Troldsalen og i villaen. Med potensielt noen overraskelser underveis.</p>
          {/*<a target="_blank" href="https://goo.gl/maps/oUXd1hEUv1s"><h4>Hvordan komme seg til Troldhaugen</h4></a>*/}
        </LocationCard>
        <LocationCard
          src={this.props.grieg}
          id="MainLocationGrieg"
          revrev="rowReverse"
          embed="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3942.8599645527693!2d5.32807525396727!3d60.38857573207041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d306d8bd273b82!2sGrieghallen!5e0!3m2!1sno!2sno!4v1524596712639"
          >
          <h2>Grieghallen</h2>
          <p>Med sine 1610 sitteplasser er Griegsalen, hovedsalen i Grieghallen, den største arenaen for klassiske konserter i Bergen. Bygget sto ferdig i 1978, og huser også en rekke konsert- og bankettsaler på totalt 3500 kvadratmeter. Den danske arkitekten Knud Munk er mannen bak ideen, og sett fra ett av de syv fjellene ser bygget ut som et stort konsertflygel. Griegsalen er hjemmearena for Bergen Filharmoniske orkester, som under Grieg minutt for minutt spiller blant annet Griegs berømte pianokonsert i A-moll utpå kvelden fredag 15. juni, og Peer Gynt natt til lørdag.</p>
          {/*<a target="_blank" href="https://goo.gl/maps/FhStkU6T5Am"><h4>Hvordan komme seg til Grieghallen</h4></a>*/}
        </LocationCard>
        <LocationCard
          src={this.props.store}
          id="MainLocationStore"
          embed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5878.143663251652!2d10.717745816933174!3d59.93352516756745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dddb7401749%3A0x93178cf20602044e!2sNRK!5e0!3m2!1sen!2sno!4v1524596640771"
          >
          <h2>Store Studio</h2>
          <p>NRKs studiobygning Store Studio har plass til totalt 250 publikumere, og har siden byggets ferdigstillelse i 1950 vært en institusjon i norsk kringkastingshistorie. Store Studio har vært arena for mange av de direktesendte radioprogrammene, men ble også brukt til fjernsynssendinger med publikum på 60-tallet. Mange kjenner kanskje igjen Melodi Grand Prix-finalene herfra i årene 1960-65 samt i 1969. Under Grieg minutt for minutt fremfører Kringkastingsorkesteret en rekke Grieg-perler direkte fra NRKs storstue, blant annet Holberg-suiten tidlig lørdag morgen, og Peer Gynt-suite 1 og 2 - orkestermusikken fra skuespillet Peer Gynt.</p>
          {/*<a target="_blank"  href="https://goo.gl/maps/ECuZh6e739p"><h4>Hvordan komme seg til Store Studio</h4></a>*/}
        </LocationCard>
      </div>
    )
  }
}
