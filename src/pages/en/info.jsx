import React, { Component } from "react";
import Helmet from "react-helmet";
import EnInfo from "../../components/Info/EnInfo";
import Hero from "../../components/modules/Hero";
import Footer from "../../components/modules/Footer";
import config from "../../../data/SiteConfig";

export default class InfoPage extends Component {
  render() {
    return (
      <div className="info post flex center column">
        <Helmet title={`Info | ${config.siteTitle}`} />
        <Hero id="aboutID" src={this.props.data.front5.childImageSharp.sizes} height="400" position="50% 20%" fit="cover"/>
        <EnInfo
          trold={this.props.data.front2.childImageSharp.sizes}
          grieg={this.props.data.front3.childImageSharp.sizes}
          store={this.props.data.front4.childImageSharp.sizes}
        />
        <Footer src={this.props.data.front.childImageSharp.sizes}/>
      </div>
    );
  }
}
export const query = graphql`
  query GatsbyImageSampleQueryAboutEnglish {
    front: file(relativePath: { regex: "/GriegNightTrans/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1620, maxHeight: 1620, quality: 80) {
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
    front5: file(relativePath: { regex: "/GriegMinuttForMinutt/"  }) {
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
