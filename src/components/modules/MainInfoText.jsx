import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import NavLink from 'gatsby-link';
import MdTime from 'react-icons/lib/md/access-time';
const MainInfoText = () => {
  return (
    <div className="mainInfoText flex center row blogPost basePad">
        <div className="flex center column ">
          <FadeInWrapper id="mainInfoText1">
            <h1>Grieg 175 år</h1>
            <h3>NRK, BFO & KODE</h3>
          </FadeInWrapper>
            <div className="basePad">
              <FadeInWrapper id="mainInfoText2">
                <h2>Grieg minutt for minutt – årets store TV-begivenhet! 15. juni 2018 er det 175 år siden Edvard Grieg ble født. Vi markerer dagen med verdens lengste Grieg-konsert, 30 timer direkte på NRK!</h2>
                <p>En klassisk musikkfest i Bergen! Grieg minutt for minutt er enestående anledning til å oppleve hele Griegs produksjon fra opus 1–74, fremført av det beste fra norsk musikkliv. Troldhaugen, Edvard Griegs hjem, blir åpent gjennom hele arrangementet og et sentrum for den store folkefesten. Det blir også store arrangementer og opplevelser i Grieghallen, både med Bergen Filharmoniske Orkester, kor og andre musikere. Også Kringkastingsorkesteret bidrar med stor musikk fra Store Studio. Kanskje blir det innslag fra andre deler av landet også!</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText3">
                <p>Det du nå ser på hjemmesiden er bare begynnelsen - en smakebit. Listen over artister og Griegs opusnumre oppdateres fortløpende.</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText4">
                <p>Programmet går fra ettermiddagen 15. juni og til nærmere midnatt 16. juni.  Det blir nattkonserter i Grieghallen, døgnåpent på Troldhaugen og folkefest hele sommernatten. Vil du på nattfremføring av Peer Gynt i Grieghallen, ha frokost på Troldhaugen med den fantastiske cellosonaten, eller oppleve strykekvartetten i grålysningen ved Nordåsvannet?</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText5">
                <p>Du kan sikre deg billetter til nattkonserter i Grieghallen allerede nå, mens arrangementet på Troldhaugen blir gratis for alle. Du kan også oppleve alt på TV, hjemme i din egen stue, sammen med over en million andre seere.</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText6">
                <p>Når sendingen begynner kl. 17.30 fredag 15. juni fordeler høydepunktene seg automatisk. «Jeg elsker dig» i Dagsrevy-tid fredag, A-mollkonserten utpå kvelden, Peer Gynt i sceneversjon i Grieghallen litt etter midnatt, den fabelaktige balladen i g-moll i fire-tiden lørdag morgen, Holbergsuiten i frokosttid lørdag, Haugtussa til middag, og endelig Salmene – Griegs aller siste opus – ved gravstedet på Troldhaugen sent lørdag kveld.</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText7">
                <p>Bergen kommune bidrar også til festen, og samarbeider bredt med både frivillige kor og korps, med kulturskolene og skolene, om sidearrangementer før og under den store jubileumsmarkeringen. Grieg minutt for minutt er en anledning til å oppleve det beste av norsk musikkliv gjennom den store musikkarven vi eier sammen. Du er herved invitert til Edvard Griegs 175-årsdag!</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText8">
                <h2>Partnere</h2>
                <p>Prosjektet «Grieg minutt for minutt» er et initiativ fra KODE Kunstmuseer og komponisthjem og Musikkselskapet Harmonien. Innholdet produseres av KODE, Bergen Filharmoniske Orkester og Kringkastingsorkesteret, med viktige bidrag fra Griegakademiet ved Universitetet i Bergen og Norges Musikkhøgskole. Et stort antall frilansmusikere og kor deltar. Grieg minutt for minutt er en nasjonal musikkdugnad med over 600 sangere og musikere.</p>
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
