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

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} pageImg={PageImg} />
        <Starter>
          <h1>EDVARD GRIEG</h1>
          <h2>OPUS FOR OPUS</h2>
        </Starter>
        <ToolTipBottom anchorId="treeView" scrollSpeed={1000} />
        <PostListing postEdges={postEdges} view="treeView" title="Opus by Opus" img={GriegMFM}/>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 74
      sort: { fields: [frontmatter___opus], order: ASC }
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
            opus
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
