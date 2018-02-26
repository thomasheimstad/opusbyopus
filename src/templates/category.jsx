import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Starter from "../components/modules/Starter";
import ToolTipBottom from '../components/modules/ToolTipBottom';
import config from "../../data/SiteConfig";
import GriegMFM from '../posts/img/GriegMFM.png';

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet
          title={`Kategori "${category}" | ${config.siteTitle}`}
        />
        <Starter>
          <h1>{category === "opus" ? "OPUSLISTEN" : "MEDVIRKENDE ARTISTER"}</h1>
          <h2>{config.siteTitle}</h2>
        </Starter>
        <ToolTipBottom anchorId="treeView" scrollSpeed={1000} />
        <PostListing postEdges={postEdges} view="treeView" categories={category} img={GriegMFM}/>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
            category
            tags
            date
          }
        }
      }
    }
  }
`;
