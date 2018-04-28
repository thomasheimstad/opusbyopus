import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainEntrance from "../components/modules/MainEntrance";
import MainHero from '../components/modules/MainHero';
import MainSeller from '../components/modules/MainSeller';
import MainInfoText from '../components/modules/MainInfoText';
import MainStarter from '../components/modules/MainStarter';
import Footer from '../components/modules/Footer';
import PageImg from '../posts/img/GriegMinuttForMinutt.jpg';
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
        <SEO pageImg={PageImg}/>
        <MainEntrance
          id="MainEntrance"
          src={this.props.data.front2.childImageSharp.sizes}
          windowHeight={this.state.windowHeight}
        />
        <MainSeller />
        <MainInfoText />

        <Footer src={this.props.data.front.childImageSharp.sizes}/>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const query = graphql`
  query MainImageQuery {
    front: file(relativePath: { regex: "/GriegNightTrans/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1080, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    front2: file(relativePath: { regex: "/GriegNightCircle2/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1080, maxHeight: 1080, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
