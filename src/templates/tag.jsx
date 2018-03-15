import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Starter from "../components/modules/Starter";
import ToolTipBottom from '../components/modules/ToolTipBottom';
import config from "../../data/SiteConfig";
import GriegMFM from '../posts/img/GriegMFM.png';

export default class TagTemplate extends React.Component {
  state = {
    classSet: "index-container"
  }
  componentDidMount = () => {
    this.setState({
      classSet: "index-container"
    })
  }
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className={`${this.state.classSet}`} style={{height: "100%"}}>
        <Helmet title={`Merket med "${tag}" | ${config.siteTitle}`} />
        <Starter height={postEdges[0].node.frontmatter.category === "opus" ? "100" : "50" }>
          <h1>{postEdges[0].node.frontmatter.category === "opus" ? "Opus med" : "Instrumentgruppe"}</h1>
          <h2>{tag}</h2>
        </Starter>
        { postEdges[0].node.frontmatter.category === "opus" ?
        <ToolTipBottom
          anchorId={postEdges[0].node.frontmatter.category === "opus" ? "treeView" : "artistView"}
          scrollSpeed={1000} /> :
          null }
        <PostListing
          postEdges={postEdges}
          view={postEdges[0].node.frontmatter.category === "opus" ? "treeView" : "artistView"}
          tags={tag}
          img={GriegMFM}
          title={`Posts tagged as "${tag}"`} />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
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
            workname
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
