import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import NavLink from 'gatsby-link';
import MdTime from 'react-icons/lib/md/access-time';
import NavLinks from "../modules/NavLinks";
import DualLink from "../modules/DualLink";
const MainInfoText = () => {
  return (
    <div className="mainInfoText flex center row blogPost basePad">
        <div className="flex center column ">
          <FadeInWrapper id="mainInfoText1">
            <h1>Edvard Grieg 175 år</h1>
            <h3>#nrkgrieg</h3>
            <h4>NRK, Bergen Filharmoniske Orkester & KODE</h4>
          </FadeInWrapper>
            <div className="basePad">
              <FadeInWrapper id="mainInfoText2">
                <h2>15. juni 2018 er det 175 år siden Edvard Grieg ble født. Vi markerer dagen med verdens lengste Grieg-konsert, 30 timer direkte på NRK!</h2>
                <p>En klassisk musikkfest i Bergen! Grieg minutt for minutt er en enestående anledning til å oppleve hele Griegs produksjon fra opus 1–74, fremført av det beste fra norsk musikkliv. Troldhaugen, Edvard Griegs hjem, blir åpent gjennom hele arrangementet og et sentrum for den store folkefesten. Det blir også store arrangementer og opplevelser i Grieghallen, med Bergen Filharmoniske Orkester, kor og andre musikere. Også Kringkastingsorkesteret bidrar med stor musikk fra Store Studio. Kanskje blir det innslag fra andre deler av landet også!</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText3">
                <p>Det du nå ser på hjemmesiden er bare begynnelsen - en smakebit. Listen over artister og Griegs opusnumre oppdateres fortløpende. Programmet går fra ettermiddagen 15. juni og til nærmere midnatt 16. juni. Du er herved invitert til Edvard Griegs 175-årsdag, bli med på festen, dag og natt!</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoAnchorLinks">
                <DualLink link2="info#Troldhaugen">Gratis på Troldhaugen og i Store studio</DualLink>
                <NavLinks link1="Opus for opus" link2="Artister" link3="Info"/>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText4">
                <h2 style={{marginTop: "1rem"}}>Partnere</h2>
                <p>Prosjektet «Grieg minutt for minutt» er et initiativ fra KODE Kunstmuseer og komponisthjem og Musikkselskapet Harmonien. Innholdet produseres av KODE, Bergen Filharmoniske Orkester og Kringkastingsorkesteret, med viktige bidrag fra Griegakademiet ved Universitetet i Bergen, Norges Musikkhøgskole og Bergen Filharmoniske Ungdomsorkester. Et stort antall frilansmusikere og kor deltar. Grieg minutt for minutt er en nasjonal musikkdugnad med over 600 sangere og musikere. Bergen kommune bidrar også til festen, og samarbeider bredt med både frivillige kor og korps, med kulturskolene og skolene, om sidearrangementer før og under den store jubileumsmarkeringen.</p>
                <h3>
                  Prosjektet hadde ikke vært mulig uten støtte fra Sparebankstiftelsen DNB til KODE Kunstmuseer og komponisthjem. </h3>
              </FadeInWrapper>
              {/*<FadeInWrapper id="mainInfoText5">
                <div className="flex spaceAround wrap">
                  <div className="button"><NavLink to="/info">Mer Info</NavLink></div>
                  <div className="button"><NavLink to="/opus-for-opus">Opus for opus</NavLink></div>
                  <div className="button"><NavLink to="/artister">Artister</NavLink></div>
                </div>
              </FadeInWrapper>*/}
            </div>
        </div>
    </div>
  )
}
export default MainInfoText;
