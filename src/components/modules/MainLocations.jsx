import React from 'react';
import LocationCard from './LocationCard';

export default class MainLocations extends React.Component {
  render = () => {
    return (
      <div className="mainLocations flex spaceAround column basePad">
        <LocationCard src={this.props.trold} id="MainLocationTrold">
          <h2>Troldhaugen</h2>
          <h4>Troldhaugen var hjemmet til Edvard og Nina Grieg. Villaen på Troldhaugen ble ferdigstilt i 1885 og ekteparet Grieg bodde her de siste 22 somrene av Edvards liv. Stedet er i dag fylt av interessante minner om Grieg og har siden 1928, da området ble åpnet som museum, vært et valfartssted for Griegelskere fra alle kanter av verden. Troldhaugen består i dag av villaen, Komponisthytten og ekteparets gravsted, så vel som et moderne museumsbygg og konsertsalen Troldsalen. De fleste konsertene under Grieg minutt for minutt foregår på Troldhaugen, hovedsaklig i Troldsalen og i villaen. Med potensielt noen overraskelser underveis.</h4><a target="_blank" href="https://goo.gl/maps/oUXd1hEUv1s"><h4>Hvordan komme seg til Troldhaugen</h4></a>
        </LocationCard>
        <LocationCard src={this.props.grieg} id="MainLocationGrieg" revrev="rowReverse">
          <h2>Grieghallen</h2>
          <h4>Med sine 1610 sitteplasser er Griegsalen, hovedsalen i Grieghallen, den største arenaen for klassiske konserter i Bergen. Bygget sto ferdig i 1978, og huser også en rekke konsert- og bankettsaler på totalt 3500 kvadratmeter. Den danske arkitekten Knud Munk er mannen bak ideen, og sett fra ett av de syv fjellene ser bygget ut som et stort konsertflygel. Griegsalen er hjemmearena for Bergen Filharmoniske orkester, som under Grieg minutt for minutt spiller blant annet Griegs berømte pianokonsert i A-moll utpå kvelden fredag 15. juni, og Peer Gynt natt til lørdag.</h4><a target="_blank" href="https://goo.gl/maps/FhStkU6T5Am"><h4>Hvordan komme seg til Grieghallen</h4></a>
        </LocationCard>
        <LocationCard src={this.props.store} id="MainLocationStore">
          <h2>Store Studio</h2>
          <h4>NRKs studiobygning Store Studio har plass til totalt 250 publikumere, og har siden byggets ferdigstillelse i 1950 vært en institusjon i norsk kringkastingshistorie. Store Studio har vært arena for mange av de direktesendte radioprogrammene, men ble også brukt til fjernsynssendinger med publikum på 60-tallet. Mange kjenner kanskje igjen Melodi Grand Prix-finalene herfra i årene 1960-65 samt i 1969. Under Grieg minutt for minutt fremfører Kringkastingsorkesteret en rekke Grieg-perler direkte fra NRKs storstue, blant annet Holberg-suiten tidlig lørdag morgen, og Peer Gynt-suite 1 og 2 - orkestermusikken fra skuespillet Peer Gynt.</h4><a target="_blank"  href="https://goo.gl/maps/ECuZh6e739p"><h4>Hvordan komme seg til Store Studio</h4></a>
        </LocationCard>
      </div>
    )
  }
}
