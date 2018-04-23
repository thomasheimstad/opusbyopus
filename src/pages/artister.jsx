import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Starter from "../components/modules/Starter";
import PostListing from "../components/PostListing/PostListing";
import FadeInWrapper from "../components/modules/FadeInWrapper"
import GriegMFM from '../posts/img/GriegMFM.png';
import PageImg from  '../posts/img/GriegBackground.jpg';
import NavLink from 'gatsby-link';

class Artister extends React.Component {
  state = {
    artistType: 'alle'
  }
  getTagsList() {
    let tagList = [];
    this.props.data.allMarkdownRemark.edges.forEach(postEdge => {
      tagList.push(postEdge.node.frontmatter.tags);
    });
    let toArray = [];
    let tezt = () => {for (const x of tagList) { toArray.push(x) };}
    tezt();
    toArray = toArray.reduce(function(a, b){
      return a.concat(b);
      }
    );
    let fastUniq = a => {
      var seen = {};
      var out = [];
      var len = a.length;
      var j = 0;
      for(var i = 0; i < len; i++) {
        var item = a[i];
        if(seen[item] !== 1) {
           seen[item] = 1;
           out[j++] = item;
         }
      }
      return out;
    }
    return fastUniq(toArray);
  }
  handleArtistClick(e){
    if(this.state.artistType !== e.target.id ){
      this.setState({
        artistType: e.target.id
      })
    }
  }
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tagList = this.getTagsList();
    let style = {
      background: "#a0a0a0"
    }
    return (
      <div className=" artist-container">
        <Helmet title="Artister | #NRKGRIEG" />
        <SEO postEdges={postEdges} pageImg={PageImg} />
        <Starter height="2">
          <h1>#NRKGRIEG</h1>
          <h2>Artister</h2>
        </Starter>
        <div className="flex center tag-container">
          <h4
            onClick={(e) => this.handleArtistClick(e)}
            id='alle'
            style={this.state.artistType === 'alle' ? style : null}>Alle</h4>
          {/* Your post list here. */
          tagList.map((item,i) =>
             <h4
               onClick={(e) => this.handleArtistClick(e)}
               id={item}
               key={i}
               style={this.state.artistType === item ? style : null}>{item}</h4>
            )
          }
        </div>
        <PostListing
          postEdges={postEdges}
          view="artistView"
          title="Artister"
          artistType={this.state.artistType}
          img={GriegMFM}
        />
      </div>
    );
  }
}

export default Artister;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query ArtistQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "artister"} } }
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
  }
`;
