import React, { Component } from "react";
import Helmet from "react-helmet";
import NoInfo from "../components/Info/NoInfo";
import Hero from "../components/modules/Hero";
import config from "../../data/SiteConfig";

export default class InfoSide extends Component {
  render() {
    return (
      <div className="info post flex center column">
        <Helmet title={`Info | ${config.siteTitle}`} />
        <Hero id="aboutID" src={this.props.data.file.childImageSharp.sizes} height="600" position="0% 50%" fit="cover"/>
        <NoInfo />
      </div>
    );
  }
}
export const query = graphql`
  query GatsbyImageSampleQueryAbout {
    file(relativePath: { regex: "/GriegBackground/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1620, maxHeight: 1100, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
