import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Starter from "../components/modules/Starter";
import config from "../../data/SiteConfig";
import Tree from '../posts/img/Tree.png';

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <Starter>
          <h1>MEDVIRKENDE ARTISTER</h1>
          <h2>{config.siteTitle}</h2>
        </Starter>
        <PostListing postEdges={postEdges} view="treeView" categories={category} img={Tree}/>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
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
            opus
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
