import React, { Component } from "react";
import CollaboratorsLogo from "../modules/CollaboratorsLogo";
import Locations from "../modules/Locations";

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
                  <h1>#NRKGrieg</h1>
                  <h3>Minutt For Minutt</h3>
                  <h4>NRK, BFO, KODE</h4>
                </div>
                <div>
                  <h2>Hva er Grieg minutt for minutt?</h2>
                  <p>
                  På 175 årsdagen til Edvard Grieg, <strong>15. juni 2018 kl. 18.00</strong>, går startskuddet for det som blir tidenes feiring av den folkekjære komponisten. Alle hans 74 musikkverker, eller opus som de også kalles, skal spilles live og i rekkefølge på NRK. Gjennom nærmere <strong>30 timer</strong> nonstop, skal hele Griegs musikalske produksjon fremføres av de fremste norske musikere.
                  </p>
                  <p>
                    Arrangementet blir et storstilt musikalsk portrett av Edvard Griegs berømte musikk, en presentasjon av orkestre og enkeltutøvere i dagens norske musikkliv og en storstilt folkefest der hele landet kan delta. Dette blir årets store sakte-TV satsing fra NRK. NRK´s sakte-TV har samlet millioner av seere de siste årene. De tar alle flater i bruk og gjør Grieg minutt for minutt til årets store mediebegivenhet på musikkfronten. All musikken spilles live! Det betyr at det blir nattkonserter i <strong>Grieghallen</strong>, døgnåpent på <strong>Troldhaugen</strong> og folkefest hele sommernatten mellom 15. og 16. juni. I Oslo sitter også Kringkastingsorkesteret parat i <strong>Store Studio</strong>, og sprer feststemningen til hovedstaden.
                  </p>
                  <h2>Hvordan kan jeg delta i festen?</h2>
                  <p>
                    Grieg minutt for minutt er <strong>åpent og gratis for alle!</strong>
                  </p>
                  <p>
                    Nam tempus tristique eros vel aliquet. Pellentesque facilisis pharetra ipsum in facilisis. Fusce id dolor ligula. Aenean tincidunt tincidunt odio in venenatis. Morbi condimentum ultrices elit eget dictum. Cras vulputate nunc nisl, sed ultrices nisi rutrum et. Curabitur eu est rhoncus, condimentum orci et, laoreet velit. Vivamus consequat justo nulla, a scelerisque mauris sagittis quis. Proin iaculis massa mauris, sed iaculis justo rutrum vitae.

                    Nulla non quam pharetra, rutrum ante id, auctor turpis. Duis dignissim bibendum sem at tincidunt. Nullam at finibus nulla, varius suscipit massa. Nullam pretium est felis, nec suscipit ligula maximus sed. Integer sed sodales odio. Integer faucibus blandit orci at scelerisque. Nunc tempor ligula in velit posuere, sed luctus mi euismod.
                  </p>
                </div>
              </div>
            </div>
            <Locations
              trold={this.props.trold}
              grieg={this.props.grieg}
              store={this.props.store}
            />
              <div className="collaboratorsLogo flex column center basePad">
                <h2>Et samarbeid mellom</h2>
                <CollaboratorsLogo />
              </div>
          </div>
        </div>
    );
  }
}
