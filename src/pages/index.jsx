import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainEntrance from "../components/modules/MainEntrance";
import MainHero from '../components/modules/MainHero';
import MainSeller from '../components/modules/MainSeller';
import MainInfoText from '../components/modules/MainInfoText';
import MainLocations from '../components/modules/MainLocations';
import MainStarter from '../components/modules/MainStarter';
import MainFooter from '../components/modules/MainFooter';
export default class Index extends React.Component {
  state = {
    windowWidth: '',
    windowHeight: ''
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <MainEntrance
          id="MainEntrance"
          src={this.props.data.front.childImageSharp.sizes}
          windowHeight={this.state.windowHeight}
        />
        <MainSeller />
        <MainInfoText />
        <MainLocations
          trold={this.props.data.front2}
          grieg={this.props.data.front3}
          store={this.props.data.front4}
        />
        <MainHero id="MainStarter2" src={this.props.data.front5.childImageSharp.sizes} height={`${this.state.windowHeight}`} />
        <MainFooter />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const query = graphql`
  query MainImageQuery {
    front: file(relativePath: { regex: "/Griegtest1Inv/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1080, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    front2: file(relativePath: { regex: "/Troldhaugen/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    front3: file(relativePath: { regex: "/Grieghallen/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    front4: file(relativePath: { regex: "/Storestudio/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    front5: file(relativePath: { regex: "/Collage/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
