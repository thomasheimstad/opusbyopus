import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Starter from "../components/modules/Starter";
import ToolTipBottom from '../components/modules/ToolTipBottom';
import config from "../../data/SiteConfig";
import GriegMFM from '../posts/img/GriegMFM.png';

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <Starter>
          <h1>INSTRUMENT:</h1>
          <h2>{tag}</h2>
        </Starter>
        <ToolTipBottom anchorId="treeView" scrollSpeed={1000} />
        <PostListing postEdges={postEdges} view="treeView" tags={tag} img={GriegMFM} title={`Posts tagged as "${tag}"`} />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            opus
            composedin
            tags
            date
            category
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
