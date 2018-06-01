import React, { Component } from "react";
import DualLink from "../modules/DualLink";
import CollaboratorsLogo from "../modules/CollaboratorsLogo";
import Locations from "../modules/Locations";
import AnchorLinks from "../modules/AnchorLinks";

export default class NoInfo extends Component {
  shouldComponentUpdate() {
   return false;
  }
  render() {
    return (
        <div className="postContent flex center column">
          <div className="blogPost">
            <div className="basePad">
              <div className="flex center column">
                <div>
                  <h1>#nrkgrieg</h1>
                  <h3>Minutt for minutt</h3>
                  <h4>NRK, Bergen Filharmoniske Orkester, KODE</h4>
                </div>
                <div>
                  <h3 style={{textAlign: "center", marginBottom:"2rem"}}>Grieg minutt for minutt kan sees direkte på NRK, lyttes til på radio eller oppleves fra salen. Bli med på folkefesten i Bergen, dag og natt, 15.–16. juni. Alle konsertene i Grieghallen for 450 kroner. Konsertene som spilles på Troldhaugen er gratis å ta del i!</h3>
                  <DualLink link1="Troldhaugen">Gratis på Troldhaugen og i Store studio</DualLink>
                  <AnchorLinks link1="Troldhaugen" link2="Grieghallen" link3="Oppladning" />
                  <div className="arenaInfo">
                    <h2 id="Troldhaugen">Dette skjer på Troldhaugen:</h2>
                    <p>Konsertene som spilles på Troldhaugen er gratis å ta del i, og hele sendingen vises kontinuerlig på skjermer på området fra fredag kl. 17.30. Vi kan ikke garantere plass i Troldsalen eller villaen, og anmoder publikum om å følge anvisninger fra verter på området.
                    </p>
                    <p>Servering i kafeen og på museumsområdet hele døgnet, med alle rettigheter.
                    Ta gjerne med piknikpledd og kle deg etter været. Det er lov å ta med medbrakt mat for å spise på uteområdet, men ikke medbrakt alkohol.</p>

                    <h3>Fredag kveld: </h3>
                    <p>Åpning kl. 17.15. Sendingen starter kl. 17.30. 
                    Bli med på starten på verdens lengste Griegkonsert! Bursdagsmarkering for Grieg med kake. Arve Tellefsen spiller.</p>
                    <h3>Natt til lørdag: </h3>
                    <p>Konsertpause på Troldhaugen kl. 23.30 til 02.30.
                    Sval stemning og salg av varm suppe kl. 03–05. 
                    Lørdag morgen: Morgenstemning.
                    Salg av frokost og kaffe fra 06.30.
                    Holbergsuiten og salg av boblende festfrokost kl. 08.</p>
                    <h3>Lørdag: Konserter hele dagen.</h3>
                    <p>Feststemning på museumsområdet. Nyt dagen og sendingen på Troldhaugen. Salg av mat, eller ta med egen piknikkurv.</p>
                    <h3>Lørdag kveld: Avslutningen.</h3>
                    <p>Innspurten starter med Haugtussa ca. kl. 18.45. Sendingen avsluttes med Salmene ca. kl. 22 - de første tre i Troldsalen og den siste ved gravstedet.</p>
                  </div>
                  <div className="arenaInfo">
                    <h2 id="Grieghallen">Dette skjer i Grieghallen:</h2>
                    <p>Grieghallen åpner dørene for publikum fredag kl. 17.00. Hele sendingen vises kontinuerlig på storskjerm i foajeen og i Griegsalen.
                    Det er gratis å følge arrangementet på foajéstorskjermen, og om du vil oppleve konsertene fra salen tilbyr vi ulike billettløsninger.</p>
                    <p>Servering og kafésalg hele døgnet med alle rettigheter.
                    Ta gjerne med liggeunderlag og sovepose om du trenger å legge deg litt nedpå underveis i sendingen!</p>
                    <div class="button postButton"><a href="http://harmonien.no/konserter-og-billetter/2018/06/grieg-minutt-for-minutt/" target="_blank">Kjøp billetter til Grieghallen her</a></div>
                    <h3>Fredag kl. 21.50</h3>
                    <p>Fra a-mollkonserten til Peer Gynt. Salg av hot dog og wraps</p>
                    <h3>Lørdag kl. 04.30</h3>
                    <p>Fra Landkjenning til Norge rundt. Ta gjerne med soveposer! Salg av frokost med croissanter og annet godt.</p>
                    <h3>Lørdag 16. juni kl. 12.00</h3>
                    <p>Den lyriske og symfoniske Grieg. Framføres i to avdelinger: den første fra 12.00 til 12.35 og den andre fra 16.30 til 17.40. Salg av suppe, rundstykker og salater.</p>

                    <h3>Vi tar forbehold om endringer i programmet. </h3>
                  </div>
                  <div className="arenaInfo">
                    <h2 id="Oppladning">OPPLADNING – HELGEN 9.–10. juni. <br/>Bergen kommune bidrar til en markering av 175-årsjubileet.</h2>

                    <p>Bergen kommune har invitert frivillige kor, korps, orkestre og andre sangere og musikere fra byens rike amatørkulturliv til å lage et lite forspill helgen før det store arrangementet.</p>

                    <h3>Konserter i Nygårdsparken, ved Paviljongen i parkens øvre del:</h3>
                    <p>Lørdag 9. juni
                    Dragefjellet Musikkorps kl 12.00
                    HUM-koret ca kl 1330</p>

                    <p>Søndag 10. juni (Parkdagen i Nygårdsparken) <br/>
                    Evita Tellnes – sopransolist fra Bergen kulturskole <br/>
                    Landås kirkekor – ca kl 1330 – Carina Bless</p>

                    <h3>Andre konserter:</h3>
                    <p>B3 - Bergen Treblåsensemble: <br/>
                    Konsert i Mariakirken lørdag 9. juni kl 1830 Spiller blant annet Gangar (Op. 54) og Aften på høyfjellet (Op 68) av Edvard Grieg. Billetter: kr 150.</p>

                    <p>Landås kirkekor: <br/>
                    Sommerkonsert i Landås hovedgård søndag 10. juni kl 16. Landås kirkekor markerer Grieg-jubileet og inviterer til bursdagskonsert i Griegs barndomsparadis. Konserten er gratis og åpen for alle.</p>

                    <h3>Vi tar forbehold om endringer i programmet.</h3>
                  </div>
                </div>
              </div>
            </div>
            <Locations
              trold={this.props.trold}
              grieg={this.props.grieg}
              store={this.props.store}
            />
              {/*
                <div className="collaboratorsLogo flex column center basePad">
                <h2>Et samarbeid mellom</h2>
                <CollaboratorsLogo />
              </div>
                */}
          </div>
        </div>
    );
  }
}
