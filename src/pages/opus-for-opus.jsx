import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Starter from '../components/modules/Starter';
import ToolTipBottom from '../components/modules/ToolTipBottom';
import PostListing from "../components/PostListing/PostListing";
import FadeInWrapper from "../components/modules/FadeInWrapper"
import GriegMFM from '../posts/img/GriegMFM.png';
import PageImg from  '../posts/img/GriegBackground.jpg';

class OpusForOpus extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={{height: "100%"}}>
        <Helmet title="Opus for opus | Edvard Grieg" />
        <SEO postEdges={postEdges} pageImg={PageImg} />
        <Starter height="1">
          <h1>EDVARD GRIEG</h1>
          <h2>OPUS FOR OPUS</h2>
          <br/>
          <p>Les om hvert eneste verk, og se hvilken artist som spiller hvert opus under Grieg minutt for minutt. Skroll ned for å begynne</p>
        </Starter>
        <ToolTipBottom anchorId="treeView" scrollSpeed={1000} />
        <PostListing postEdges={postEdges} view="treeView" title="Opus by Opus" img={GriegMFM}/>
      </div>
    );
  }
}

export default OpusForOpus;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query OpusQuery {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "opus"} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            title
            workname
            composedin
            description
            tags
            category
            date
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 300, quality: 80) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
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
