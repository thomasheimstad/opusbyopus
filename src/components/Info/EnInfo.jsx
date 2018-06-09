import React, { Component } from "react";
import EnDualLink from "../modules/EnDualLink";
import CollaboratorsLogo from "../modules/CollaboratorsLogo";
import EnLocations from "../modules/EnLocations";
import AnchorLinks from "../modules/AnchorLinks";

export default class EnInfo extends Component {
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
                  <h3>Minute by minute</h3>
                  <h4>NRK, Bergen Philharmonic Orchestra, KODE</h4>
                </div>
                <div>
                  <h3 style={{textAlign: "center", marginBottom:"2rem"}}>Join the celebrations in Bergen, day and night, 15th - 16th June. All the concerts at Troldhaugen are free! Tickets for the concerts in Grieghallen are cheap and available!</h3>
                  <EnDualLink link1="Troldhaugen">Free concerts at Troldhaugen</EnDualLink>
                  <AnchorLinks link1="Troldhaugen" link2="Grieghallen" link3="Locations" />
                  <div className="arenaInfo">
                    <h2 id="Troldhaugen">What's going on at Troldhaugen: </h2>
                    <p>The concerts at Troldhaugen are free entrance. In addition, the entire TV-production is shown continuously on TV-screens around Troldhaugen, from friday 17:30. We cannot guarantee seats in the concert hall nor in the villa, and we advice our audiences to follow the instructions by our hosts on location.
                    </p>
                    <p>The cafe is open for 30 hours. It's also possible to bring your own picknick-basket: Bringing your own food is absolutely allowed. Bringing your own alcohol isn't.</p>

                    <h3>Friday evening: </h3>
                    <p>Opening at 17:15. The broadcast starts at 17:30. Join the start of the world's longest Grieg concert! Free anniversary-cake for all. Arve Tellefsen kickstarts the concert at 17:30.</p>
                    <h3>Night to Saturday: </h3>
                    <p>Small concert break at Troldhaugen from 00:00 - 02:30. Chill mood, hot soup-sale between 03-05.</p>
                    <h3>Saturday morning: Morning mood. </h3>
                    <p>Breakfast-sale and coffee from 06:30. Holbergsuit on screen from Oslo, and bubbly-anniversary-breakfast-sale from 08:00.</p>
                    <h3>Saturday: Concerts all day. </h3>
                    <p>Partymood at the museum. Enjoy the day, the broadcast and the concerts at Troldhaugen. You may purchase food in the cafe, or bring your own picknick-basket.</p>
                    <h3>Saturday evening: The finale. </h3>
                    <p>The beginning of the end starts with The Mountain Maid at 18:45, and the broadcast ends with Grieg's Four psalms at 22:10. The last psalm is peformed by the gravesite.</p>
                  </div>
                  <div className="arenaInfo">
                    <h2 id="Grieghallen">What's going on in Grieghallen:</h2>
                    <p>Grieghallen opens its doors Friday at 17:00. The entire broadcast is shown on huge screens in the foyer and in the Griegsalen. It is free to follow the event on the big screens, and if you want to experience the concerts, we offer different ticket solutions.</p>
                    <p>The cafe is open the entire 30 hours! You may also bring a sleeping pad if you need a little rest during the broadcast!</p>
                    <div class="button postButton"><a href="http://harmonien.no/english/concerts-and-tickets/2018/06/grieg-minute-by-minute/" target="_blank">Purchase tickets to Grieghallen here</a></div>
                    <h3>Friday at 21:50</h3>
                    <p>From the a-minor concerto to Peer Gynt. Hot dogs and wraps for sale.</p>
                    <h3>Saturday at 04.30</h3>
                    <p>From Landkjenning to Norwegian Dances. Feel free to bring sleeping pods. Breakfast with croissants and other snacks available for sale.</p>
                    <h3>Saturday 16th June at 12.00</h3>
                    <p>The lyric and the symphonic Grieg. Performed in two sections: the first from 12:00 to 12:30, and the other from 16:30 to 17:40. Soups, bread and salats for sale.</p>

                    <h3>With reservation - changes may occur</h3>
                  </div>
                </div>
              </div>
            </div>
            <div id="Locations">
              <EnLocations
                trold={this.props.trold}
                grieg={this.props.grieg}
                store={this.props.store}
              />
            </div>
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
