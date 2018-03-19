import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainStarter from '../components/modules/MainStarter';
import GriegMFM from '../posts/img/GriegMFM.png';
import PageImg from  '../posts/img/GriegBackground.jpg';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <MainStarter />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { regex: "/GriegBackground/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1100, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
